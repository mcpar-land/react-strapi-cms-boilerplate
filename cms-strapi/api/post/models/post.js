'use strict'
const slugify = require('slugify')
const ellipsize = require('ellipsize')

const MAX_PREVIEW_LENGTH = 288

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#life-cycle-callbacks)
 * to customize this model
 */

const doSlug = (data) => {
	if (!data.uri) data.uri = slugify(data.title, { lower: true })
	else if (!/^[a-zA-Z0-9_-]*$/.test(data.uri)) throw new Error('Invalid URI!')
}

const doPreview = (data) => {
	data.body_preview = ellipsize(data.body, MAX_PREVIEW_LENGTH)
}

module.exports = {
	lifecycles: {
		async beforeCreate(data) {
			doSlug(data)
			doPreview(data)
		},
		async beforeUpdate(params, data) {
			doSlug(data)
			doPreview(data)
		},
		async beforeFind(params, populate) {},
	},
}
