import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import createApolloClient from './apolloClient'

let globalApolloClient: any = null

export const initOnContext = (ctx) => {
	const inAppContext = Boolean(ctx.ctx)

	if (process.env.NODE_ENV === 'development') {
		if (inAppContext) {
			console.warn(
				'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' +
					'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n'
			)
		}
	}

	// Initialize ApolloClient if not already done
	const apolloClient =
		ctx.apolloClient ||
		initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx)

	apolloClient.toJSON = () => null

	ctx.apolloClient = apolloClient

	if (inAppContext) {
		ctx.ctx.apolloClient = apolloClient
	}

	return ctx
}

const initApolloClient = (initialState, ctx) => {
	if (typeof window === 'undefined') {
		return createApolloClient(initialState, ctx)
	}

	if (!globalApolloClient) {
		globalApolloClient = createApolloClient(initialState, ctx)
	}

	return globalApolloClient
}

export const withApollo = ({ ssr = false } = {}) => (PageComponent) => {
	const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
		let client = apolloClient
			? apolloClient
			: initApolloClient(apolloState, undefined)

		return (
			<ApolloProvider client={client}>
				<PageComponent {...pageProps} />
			</ApolloProvider>
		)
	}

	if (process.env.NODE_ENV !== 'production') {
		const displayName =
			PageComponent.displayName || PageComponent.name || 'Component'
		WithApollo.displayName = `withApollo(${displayName})`
	}

	if (ssr || PageComponent.getInitialProps) {
		WithApollo.getInitialProps = async (ctx) => {
			const inAppContext = Boolean(ctx.ctx)
			const { apolloClient } = initOnContext(ctx)

			let pageProps = {}
			if (PageComponent.getInitialProps) {
				pageProps = await PageComponent.getInitialProps(ctx)
			} else if (inAppContext) {
				pageProps = await App.getInitialProps(ctx)
			}

			if (typeof window === 'undefined') {
				const { AppTree } = ctx

				if (ctx.res && ctx.res.finished) return pageProps

				if (ssr && AppTree) {
					try {
						const { getDataFromTree } = await import('@apollo/react-ssr')

						let props
						if (inAppContext) {
							props = { ...pageProps, apolloClient }
						} else {
							props = { pageProps: { ...pageProps, apolloClient } }
						}
						await getDataFromTree(<AppTree {...props} />)
					} catch (error) {
						console.error('Error while running `getDataFromTree`', error)
					}

					Head.rewind()
				}
			}
			return {
				...pageProps,
				apolloState: apolloClient.cache.extract(),
				apolloClient: ctx.apolloClient,
			}
		}
	}
	return WithApollo
}
