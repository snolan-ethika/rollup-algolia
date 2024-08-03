import { getPageObject, getMultiQuery } from './algolia-setup'
export default async function () {
	// const thePage = await getPageObject('/shop')
	// console.log('thePage', thePage)
	const results = await getMultiQuery()
	console.log('results', results)
}