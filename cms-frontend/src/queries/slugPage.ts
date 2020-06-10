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
				... on ComponentAllPageComponentsRichTextColumns {
					columns {
						text
					}
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
			side_menu {
				Name
				items {
					__typename
					... on ComponentMenuPageReference {
						custom_title
						feature_link
						page {
							title
							uri
						}
					}
					... on ComponentMenuSubmenu {
						Name
						items {
							custom_title
							feature_link
							page {
								title
								uri
							}
						}
					}
				}
			}
		}
	}
`
