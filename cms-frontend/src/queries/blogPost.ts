import gql from 'graphql-tag'

export const BLOG_POST = gql`
	query BlogPost($uri: String!) {
		posts(where: { uri: $uri }) {
			id
			title
			status
			created_at
			updated_at
			body
		}
	}
`
