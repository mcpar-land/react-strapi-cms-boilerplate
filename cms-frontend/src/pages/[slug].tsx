import React from 'react'
import { withApollo } from '../libs/apollo'
import { useQuery } from '@apollo/react-hooks'
import { SLUG_PAGE } from '../queries/slugPage'
import { MAIN_MENU } from '../queries/mainMenu'
import Centerer from '../components/Centerer'
import MainMenu from '../components/MainMenu'
import { useRouter } from 'next/dist/client/router'
import PageComponentsRenderer from '../components/PageComponentsRenderer'
import Head from 'next/head'

import './[slug].scss'
import SideMenu from '../components/SideMenu'

function SlugPage() {
	const router = useRouter()

	const { slug } = router.query

	const { loading, error, data } = useQuery(SLUG_PAGE, {
		variables: { uri: slug },
	})

	if (error) return <pre> ERROR: {JSON.stringify(error, null, 2)}</pre>
	if (loading) return <h3>Loading...</h3>

	const page = data.pages[0]

	return (
		<Centerer width="lg">
			<MainMenu />
			{page ? (
				<>
					<Head>
						<title>{page.title}</title>
					</Head>
					<h1>{page.title}</h1>
					<div className="page-flex">
						<PageComponentsRenderer components={page.components} />
						{page.side_menu && <SideMenu menu={page.side_menu} />}
					</div>
				</>
			) : (
				<div>Page not found.</div>
			)}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Centerer>
	)
}

export default withApollo({ ssr: true })(SlugPage)
