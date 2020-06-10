module.exports = {
	resolver: {
		Query: {
			posts: {
				resolverOf: 'application::post.post.find',
				resolver: async (obj, options, ctx) => {
					console.log(options)
					return await strapi.api.post.services.post.find({
						status: 'published',
					})
				},
			},
		},
	},
}
