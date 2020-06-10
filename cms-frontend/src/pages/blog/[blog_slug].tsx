import React from 'react'
import Centerer from '../../components/Centerer'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

function BlogPostPage() {
	const router = useRouter()

	const { blog_slug: slug } = router.query

	return (
		<Centerer width="lg">
			<Head>
				<title></title>
			</Head>
		</Centerer>
	)
}
