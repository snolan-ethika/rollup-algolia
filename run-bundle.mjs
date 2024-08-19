import myBundle from './dist/bundle.mjs'

(async function() {
	const thing = await myBundle()
	console.log('thing', thing)
})()