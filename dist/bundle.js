'use strict';

var algoliasearch = require('algoliasearch');

require('dotenv').config();

const pageIndex = 'pages';
const pageClient = algoliasearch(
	process.env.VITE_algolia_id, // insert your appId
	process.env.VITE_algolia_api_key // insert your apiKey
);
const pageIdx = pageClient.initIndex(pageIndex);

const getPageObject = async (path) => {
	return pageIdx.getObject(path);
};

async function main () {
	return await getPageObject('/shop')
}

module.exports = main;
