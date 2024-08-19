import dotenv from 'dotenv'
dotenv.config()
import algoliasearch from 'algoliasearch'

const pageIndex = process.env.pageIndex;
const productIndex = process.env.productsIndex;
const pageClient = algoliasearch(
	process.env.algolia_id, // insert your appId
	process.env.algolia_api_key // insert your apiKey
);
const pageIdx = pageClient.initIndex( pageIndex )
const productIdx = pageClient.initIndex( productIndex )

export const getThePage = async ( thePage ) => {
	let page
	try {
		page = await pageIdx.getObject( thePage )
	} catch (e) {
		page = { status: 'catch', message: e?.message || e }
	}
	return page
}

export const getTheProducts = async ( { query = '', facets = [], filters = {} } ) => {
	let results
	try {
		results = await productIdx.search( query, { facets, filters } )
	} catch (e) {
		results = { status: 'catch', message: e?.message || e }
	}
	return results
}