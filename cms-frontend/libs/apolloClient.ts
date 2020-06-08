import { ApolloClient } from 'apollo-client'
import {
	InMemoryCache,
	IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

console.log(
	'creating apollo client with web root',
	process.env.WEB_ROOT + '/api'
)

export default function createApolloClient(initialState: any, ctx: any) {
	return new ApolloClient({
		ssrMode: Boolean(ctx),
		link: new HttpLink({
			uri: 'http://localhost:3000/api',
			credentials: 'same-origin',
			fetch,
		}),
		cache: new InMemoryCache({
			fragmentMatcher: new IntrospectionFragmentMatcher({}),
		}).restore(initialState),
	})
}
