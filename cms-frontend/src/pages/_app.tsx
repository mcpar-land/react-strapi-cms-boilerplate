import React, { useEffect } from 'react'
import Head from 'next/head'

import './_app.scss'

export default function MyApp(props) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>My Page</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
