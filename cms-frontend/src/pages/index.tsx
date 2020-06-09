import { useQuery } from '@apollo/react-hooks'
import { MAIN_MENU } from '../queries/mainMenu'
import { withApollo } from '../libs/apollo'
import MainMenu from '../components/MainMenu'
import { Container } from 'next/app'
import Centerer from '../components/Centerer'

function Home() {
	// const { loading, error, data } = useQuery(MAIN_MENU)

	// if (error) return <pre> ERROR: {JSON.stringify(error, null, 2)}</pre>
	// if (loading) return <h3>Loading...</h3>

	return (
		<Centerer width="lg">
			<MainMenu />
			<h1>Testing Time!</h1>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</Centerer>
	)
}

export default withApollo({ ssr: true })(Home)
