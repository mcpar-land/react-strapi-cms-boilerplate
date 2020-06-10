import React from 'react'
import Centerer from './Centerer'
import MainMenu from './MainMenu'

import './BlogPage.scss'
import { useQuery } from '@apollo/react-hooks'
import { BLOG_SIDEBAR } from '../queries/blogSidebar'
import Link from 'next/link'

import config from '../../cms-config.json'

function BlogPage({ children }) {
	const { loading, error, data } = useQuery(BLOG_SIDEBAR)

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
				<div className="blog-main">{children}</div>
			</div>
		</Centerer>
	)
}

export default BlogPage
