import React from 'react'
import Centerer from './Centerer'
import MainMenu from './MainMenu'

import './BlogPage.scss'
import { useQuery } from '@apollo/react-hooks'
import { BLOG_SIDEBAR } from '../queries/blogSidebar'
import Link from 'next/link'

import config from '../../cms-config.json'
import { Card } from 'react-bootstrap'

const BlogPreview: React.FC<{
	post: {
		title: string
		body_preview: string
		uri: string
	}
}> = ({ post }) => {
	const linkGeneral = `/${config.blogPrefix}/[blog_slug]`
	const link = `/${config.blogPrefix}/${post.uri}`
	return (
		<Link href={linkGeneral} as={link}>
			<div className="blog-preview-link">
				<h2>{post.title}</h2>
				<p>{post.body_preview}</p>
			</div>
		</Link>
	)
}

const BlogPage: React.FC<{ homepage: boolean }> = ({
	children,
	homepage = false,
}) => {
	const { loading, error, data } = useQuery(BLOG_SIDEBAR, {
		variables: {
			getPreviews: true,
		},
	})

	if (error) return <div>Error!</div>

	const sidebarItems = loading ? (
		<div>Loading...</div>
	) : (
		data.posts.map((item, i) => {
			const linkGeneral = `/${config.blogPrefix}/[blog_slug]`
			const link = `/${config.blogPrefix}/${item.uri}`
			return (
				<div key={i}>
					<Link href={linkGeneral} as={link}>
						<a>{item.title}</a>
					</Link>
				</div>
			)
		})
	)

	return (
		<Centerer width="lg">
			<MainMenu />
			<div className="blog-wrap">
				<div className="blog-sidebar">{sidebarItems}</div>
				<div className="blog-main">
					{homepage
						? data?.previews.map((item, i) => (
								<BlogPreview key={i} post={item} />
						  ))
						: children}
				</div>
			</div>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</Centerer>
	)
}

export default BlogPage
