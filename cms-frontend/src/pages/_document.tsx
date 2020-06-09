import React from 'react'
import NextDocument, { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import theme from '../theme'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends NextDocument {
	// render() {
	// 	return (
	// 		<Html>
	// 			<Head>
	// 				<meta name="theme-color" content={theme.palette.primary.main} />
	// 				<link
	// 					rel="stylesheet"
	// 					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
	// 				/>
	// 			</Head>
	// 			<body>
	// 				<Main />
	// 				<NextScript />
	// 			</body>
	// 		</Html>
	// 	)
	// }

	static async getInitialProps(ctx: any) {
		const sheets = new ServerStyleSheets()
		const originalRenderPage = ctx.renderPage

		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
			})

		const initialProps = await NextDocument.getInitialProps(ctx)

		return {
			...initialProps,
			styles: [
				...React.Children.toArray(initialProps.styles),
				sheets.getStyleElement(),
			],
		}
	}
}
