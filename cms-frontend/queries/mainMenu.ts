import gql from 'graphql-tag'

export const MAIN_MENU = gql`
	query MainMenu {
		mainMenu {
			main_menu {
				Name
				items {
					__typename
					... on ComponentMenuPageReference {
						page {
							uri
						}
					}
					... on ComponentMenuSubmenu {
						pages {
							uri
						}
					}
				}
			}
		}
	}
`
