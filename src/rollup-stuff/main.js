// src/main.js
import { getThePage, getTheProducts } from './algolia-setup'
import { createFilters } from 'eth-algolia-filters'

const facets = {
	'facet-division.lvl0': {
		Kids: 441,
		Women: 5
	}
}
const filtered = createFilters( {
	filterType: 'filters',
	facets,
	tags: [ 'kids', 'toddlers', 'boys-staple', 'hipster' ]
} )

export default async function () {
	console.log( 'thePage', await getThePage( '/shop' ) )
	console.log( 'products', await getTheProducts( { filters: filtered?.filters } ) )
}