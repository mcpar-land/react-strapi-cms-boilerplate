import React from 'react'
import ReactMarkdown from 'react-markdown'

import './BlogPost.scss'

const BlogPost: React.FC<{
	post: {
		id: string
		title: string
		status: string
		created_at: string
		updated_at: string
		body: string
	}
}> = ({ post }) => {
	return (
		<div className="blog-post">
			<h1 className="blog-post-title">{post.title}</h1>
			<p>Created at: {post.created_at}</p>
			<ReactMarkdown source={post.body} className="blog-body" />
		</div>
	)
}

export default BlogPost
