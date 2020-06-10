import gql from 'graphql-tag'

export const BLOG_SIDEBAR = gql`
	query BlogSidebar {
		posts(where: { status: "draft" }, sort: "created_at:desc") {
			title
			created_at
			uri
		}
	}
`
