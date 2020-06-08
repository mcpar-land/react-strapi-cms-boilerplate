module.exports = {
	client: {
		includes: ['./cms-frontend/queries/**/*.ts'],
		service: {
			name: 'dev-strapi',
			url: 'http://localhost:3000/api',
			tagName: 'gql',
		},
	},
}
