var myBundle = require('./dist/bundle.js');

myBundle().then( r => {
	console.log('r', r)
})