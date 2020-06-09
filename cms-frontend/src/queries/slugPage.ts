import gql from 'graphql-tag'

export const SLUG_PAGE = gql`
	query SlugPage($uri: String!) {
		pages(where: { uri: $uri }) {
			title
			id
			uri
			components {
				__typename
				... on ComponentAllPageComponentsRichText {
					text
				}
				... on ComponentAllPageComponentsImageHeader {
					title
					background {
						url
						name
						caption
					}
				}
				... on ComponentAllPageComponentsAttachment {
					attachment {
						url
						name
						caption
					}
				}
				... on ComponentAllPageComponentsImageGallery {
					gallery {
						url
						name
						caption
						previewUrl
					}
				}
			}
		}
	}
`
