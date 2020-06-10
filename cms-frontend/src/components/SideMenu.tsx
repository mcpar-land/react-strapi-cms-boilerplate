import React from 'react'

import './SideMenu.scss'
import MenuItem from './MenuItem'

const SideMenu: React.FC<{ menu: { items: any[]; Name: string } }> = ({
	menu: { items, Name },
}) => {
	// return <pre>{JSON.stringify(items, null, 2)}</pre>
	return (
		<div className="side-menu">
			{items.map((item, i) => {
				if (item.__typename === 'ComponentMenuPageReference') {
					return (
						<MenuItem
							item={item}
							key={i}
							className="side-menu-link side-menu-item"
						/>
					)
				} else if (item.__typename === 'ComponentMenuSubmenu') {
					return (
						<div className="side-menu-submenu" key={i}>
							{item.Name && (
								<div className="side-menu-submenu-name side-menu-item">
									{item.Name}
								</div>
							)}
							<div className="side-menu-submenu-items">
								{item.items.map((subitem, j) => (
									<MenuItem
										item={subitem}
										key={j}
										className="side-menu-link side-menu-item"
									/>
								))}
							</div>
						</div>
					)
				}
			})}
		</div>
	)
}

export default SideMenu
