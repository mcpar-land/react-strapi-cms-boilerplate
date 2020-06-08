import Head from 'next/head'
import { Container, Box, Typography } from '@material-ui/core'

export default function Home() {
	return (
		<Container maxWidth="md">
			<Box>
				<Typography variant="h1">Testing Time</Typography>
			</Box>
		</Container>
	)
}
