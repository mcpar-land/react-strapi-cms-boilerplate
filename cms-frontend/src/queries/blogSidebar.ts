import gql from 'graphql-tag'

export const BLOG_SIDEBAR = gql`
	query BlogSidebar($getPreviews: Boolean!) {
		posts(sort: "created_at:desc") {
			title
			created_at
			uri
		}
		previews: posts(sort: "created_at:desc", limit: 3)
			@include(if: $getPreviews) {
			title
			body_preview
			uri
		}
	}
`
