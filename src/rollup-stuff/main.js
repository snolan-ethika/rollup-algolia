import getPageObject from './algolia-setup'
export default async function () {
	return await getPageObject('/shop')
}