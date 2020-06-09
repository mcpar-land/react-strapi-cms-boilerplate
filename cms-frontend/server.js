const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const devProxy = {
	'/api': {
		target: process.env.STRAPI_ROOT + '/graphql',
		pathRewrite: { '^/api': '' },
		changeOrigin: true,
	},
	'/strapi': {
		target: process.env.STRAPI_ROOT,
		pathRewrite: { '^/strapi': '' },
		changeOrigin: true,
	},
}

app
	.prepare()
	.then(() => {
		const server = express()

		if (dev && devProxy) {
			const { createProxyMiddleware } = require('http-proxy-middleware')
			Object.keys(devProxy).forEach((context) => {
				server.use(createProxyMiddleware(context, devProxy[context]))
			})
		}

		server.all('*', (req, res) => handle(req, res))

		server.listen(port, (err) => {
			if (err) throw err
			console.log(`> ready on http://localhost:${port} [${env}]`)
		})
	})
	.catch((err) => {
		console.log('An error occurred, unable to start the server')
		console.log(err)
	})
