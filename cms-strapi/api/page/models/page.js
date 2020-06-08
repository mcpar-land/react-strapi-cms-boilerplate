'use strict'
const slugify = require('slugify')

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

const doSlug = (data) => {
	if (!data.uri) data.uri = slugify(data.title, { lower: true })
	else if (!/^[a-zA-Z0-9_-]*$/.test(data.uri)) throw new Error('Invalid URI!')
}

module.exports = {
	lifecycles: {
		async beforeCreate(data) {
			doSlug(data)
		},
		async beforeUpdate(params, data) {
			doSlug(data)
		},
	},
}
