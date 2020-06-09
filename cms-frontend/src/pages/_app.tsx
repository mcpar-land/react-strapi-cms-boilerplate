import React, { useEffect } from 'react'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

export default function MyApp(props) {
	const { Component, pageProps } = props

	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>My Page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<meta name="theme-color" content={theme.palette.primary.main} />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>

			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</MuiThemeProvider>
		</>
	)
}
