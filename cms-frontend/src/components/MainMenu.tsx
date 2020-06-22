import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './MainMenu.scss'
import { useQuery } from '@apollo/react-hooks'
import { MAIN_MENU } from '../queries/mainMenu'
import MenuItem from './MenuItem'
import { useRouter } from 'next/router'

const MainMenu: React.FC<{}> = ({}) => {
	const { loading, error, data } = useQuery(MAIN_MENU)

	if (loading) return <div>Loading...</div>
	if (error) return <div>ERROR</div>

	const router = useRouter()

	const active = (item) =>
		item.page?.uri === router.query.slug ||
		item.feature_link === router.query.slug

	const items: any[] = data.mainMenu.main_menu.items
	const menuItems = items.map((item, i) => {
		if (item.__typename === 'ComponentMenuPageReference') {
			return (
				<MenuItem
					item={item}
					component={Nav.Link}
					key={i}
					passHref
					active={active(item)}
				/>
			)
		} else if (item.__typename === 'ComponentMenuSubmenu') {
			return (
				<NavDropdown key={i} title={item.Name} id={'nav-dropdown-' + i}>
					{item.items.map((subitem, j) => (
						<MenuItem
							item={subitem}
							component={NavDropdown.Item}
							key={j}
							passHref
							active={active(subitem)}
						/>
					))}
				</NavDropdown>
			)
		}
	})

	return (
		<Navbar bg="light" expand="sm">
			<Link href="/">
				<Navbar.Brand className="nav-brand">Brand Name</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav>{menuItems}</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default MainMenu
