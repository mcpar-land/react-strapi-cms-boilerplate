import React from 'react'
import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

import './MainMenu.scss'

const MenuItem: React.FC<{ title: string; uri?: string }> = ({
	title,
	uri,
}) => {
	const e = <span>{title}</span>

	return uri ? <Link href={'/' + uri}>{e}</Link> : e
}

const MainMenu: React.FC<{ items: any[] }> = ({ items }) => {
	const menuItems = items.map((item, i) => {
		if (item.__typename === 'ComponentMenuPageReference') {
			return (
				<Nav.Link key={i}>
					<MenuItem title={item.page.title} uri={item.page.uri} />
				</Nav.Link>
			)
		} else if (item.__typename === 'ComponentMenuSubmenu') {
			return (
				<NavDropdown key={i} title={item.Name} id={'nav-dropdown-' + i}>
					{item.pages.map((subitem, j) => (
						<NavDropdown.Item key={j}>
							<MenuItem title={subitem.title} uri={subitem.uri} />
						</NavDropdown.Item>
					))}
				</NavDropdown>
			)
		}
	})

	return (
		<Navbar bg="light" expand="sm">
			<Link href="/">
				<Navbar.Brand>Brand Name</Navbar.Brand>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav>{menuItems}</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default MainMenu
