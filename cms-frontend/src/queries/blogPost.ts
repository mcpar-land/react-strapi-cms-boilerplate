import gql from 'graphql-tag'

export const BLOG_POST = gql`
	query BlogPost($slug: String!) {
		posts(where: { slug: $slug }) {
			id
			title
			created_at
			updated_at
			body
		}
	}
`
