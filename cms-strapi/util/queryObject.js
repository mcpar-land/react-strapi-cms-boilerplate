/**
 *
 * @param {string} str
 * @returns {{[key: string]: string}}
 */
const queryObject = (str) => {
	const queryString = str.split('?')[1] || str

	const queryEntries = new URLSearchParams(queryString).entries()
	let query = {}
	for (const [key, value] of queryEntries) query[key] = value

	return query
}

module.exports = queryObject
