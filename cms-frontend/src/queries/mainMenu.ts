import gql from 'graphql-tag'

export const MAIN_MENU = gql`
	query MainMenu {
		mainMenu {
			main_menu {
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
