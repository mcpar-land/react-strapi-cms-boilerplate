import Head from 'next/head'
import { Container, Box, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import { MAIN_MENU } from '../queries/mainMenu'
import { withApollo } from '../libs/apollo'

function Home() {
	const { loading, error, data } = useQuery(MAIN_MENU)

	if (error) return <pre> ERROR: {JSON.stringify(error, null, 2)}</pre>
	if (loading) return <h3>Loading...</h3>

	return (
		<Container maxWidth="md">
			<Box>
				<Typography variant="h1">Testing Time</Typography>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</Box>
		</Container>
	)
}

export default withApollo({ ssr: true })(Home)
