require('dotenv').config()
import algoliasearch from 'algoliasearch'

const pageIndex = 'pages';
const pageClient = algoliasearch(
	process.env.VITE_algolia_id, // insert your appId
	process.env.VITE_algolia_api_key // insert your apiKey
);
const pageIdx = pageClient.initIndex(pageIndex);

const getPageObject = async (path) => {
	return pageIdx.getObject(path);
}

const getMultiQuery = async () => {
	const queries = [
		{
			indexName: 'products',
			query: '',
			params: {
				filters: 'page_slugs:"/shop/boys" AND facet-division.lvl0:Men',
				hitsPerPage: 60,
			},
			page: 0,
		},
		{
			indexName: 'products',
			query: '',
			params: {
				filters: 'page_slugs:"/shop/women"',
				hitsPerPage: 60,
			},
		}
	];
	const response = await pageClient.multipleQueries(queries, { strategy: 'stopIfEnoughMatches' });
	return response
}

export { getPageObject, getMultiQuery }