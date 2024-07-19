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

export default getPageObject