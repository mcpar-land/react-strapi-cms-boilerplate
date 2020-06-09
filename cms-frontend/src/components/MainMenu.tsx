import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Link from 'next/link'

const MenuItem: React.FC<{ title: string; uri?: string }> = ({
	title,
	uri,
}) => {
	const e = <Typography variant="button">{title}</Typography>

	return uri ? <Link href={'/' + uri}>{e}</Link> : e
}

const MainMenu: React.FC<{ items: any[] }> = ({ items }) => {
	const menuItems = items.map((item, i) => {
		if (item.__typename === 'ComponentMenuPageReference') {
			return <MenuItem key={i} title={item.page.title} uri={item.page.uri} />
		} else if (item.__typename === 'ComponentMenuSubmenu') {
			return (
				<>
					<MenuItem title={item.Name} />
				</>
			)
		}
	})

	return <Box>{menuItems}</Box>
}

export default MainMenu
