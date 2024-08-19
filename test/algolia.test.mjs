import myBundle from '../dist/bundle.mjs'

describe('Algolia Test', function () {
	it('should create an instance of Algolia', async function () {
		const thing = await myBundle()
		console.log('thing', thing)
	})
})