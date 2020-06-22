import React from 'react'

import Centerer from '../../components/Centerer'
import MainMenu from '../../components/MainMenu'

import './blog.scss'
import { withApollo } from '../../libs/apollo'
import BlogPage from '../../components/BlogPage'

function BlogHomepage() {
	return (
		<BlogPage homepage>
			<h1>Blog Homepage</h1>
		</BlogPage>
	)
}

export default withApollo({ ssr: true })(BlogHomepage)
