const queryObject = require('../../../util/queryObject')

module.exports = {
	resolver: {
		Query: {
			posts: {
				resolverOf: 'application::post.post.find',
				resolver: async (obj, options, ctx) => {
					const query = queryObject(ctx.context.request.url)
					return await strapi.api.post.services.post.find({
						...query,
						status: 'published',
					})
				},
			},
		},
	},
}
