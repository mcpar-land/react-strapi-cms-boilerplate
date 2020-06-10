import React from 'react'
import Link from 'next/link'

import config from '../../cms-config.json'

const MenuItem: React.FC<{
	item: {
		custom_title?: string
		feature_link?: string
		page?: { title: string; uri: string }
	}
	className?: string
	component?: any
	passHref?: boolean
}> = ({ item, className, component, passHref = false }) => {
	let link = 'no link'

	if (item.feature_link == 'blog') {
		link = '/' + config.blogPrefix
	} else if (item.feature_link == 'home') {
		link = '/'
	} else if (item.page) {
		link = '/' + item.page.uri
	}

	const Component = component || 'a'

	return (
		<Link href={link} passHref={passHref}>
			<Component className={className}>
				{item.custom_title ||
					item.page?.title ||
					item.feature_link ||
					'Unnamed Link'}
			</Component>
		</Link>
	)
}

export default MenuItem
