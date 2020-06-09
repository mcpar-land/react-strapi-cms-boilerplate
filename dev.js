require('dotenv-flow').config({
	node_env: 'development',
})

process.env.NODE_ENV = 'development'

const concurrently = require('concurrently')

// console.log(process.env)

concurrently(
	[
		{
			command: 'yarn --cwd cms-frontend dev',
			name: 'client',
			prefixColor: 'magenta',
			env: process.env,
		},
		{
			command: 'yarn --cwd cms-strapi develop',
			name: 'server',
			prefixColor: 'cyan',
			env: process.env,
		},
		{
			command: 'yarn --cwd cms-frontend gql-gen',
			name: 'gql-gen',
			prefixColor: 'green',
		},
	],
	{
		restartDelay: 2000,
		restartTries: 5,
	}
)
