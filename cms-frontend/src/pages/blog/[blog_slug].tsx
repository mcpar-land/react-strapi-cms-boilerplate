import React from 'react'

import { useRouter } from 'next/dist/client/router'
import BlogPage from '../../components/BlogPage'
import { withApollo } from '../../libs/apollo'
import { useQuery } from '@apollo/react-hooks'
import { BLOG_POST } from '../../queries/blogPost'
import BlogPost from '../../components/BlogPost'

function BlogPostPage() {
	const router = useRouter()

	const { blog_slug: slug } = router.query

	const { loading, error, data } = useQuery(BLOG_POST, {
		variables: { uri: slug },
	})

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error!</div>

	const post = data.posts[0]

	return !!post ? (
		<BlogPage>
			<BlogPost post={post} />
		</BlogPage>
	) : (
		<div>No post found.</div>
	)
}

export default withApollo({ ssr: true })(BlogPostPage)
