import * as chai from 'chai'
// const chai = require('chai');

const facets1 = {
	'facet-fit.lvl0': {
		'Underwear': 1
	},
	'facet-fit.lvl1': {
		'Underwear > Toddlers\' Staple': 1
	},
	'facet-division.lvl0': {
		'Kids': 1
	},
	'facet-division.lvl1': {
		'Kids > Toddlers': 1
	},
	'facet-product-line.lvl0': {
		'Lifestyle': 1,
		'Premium': 1
	},
	'sizes_available_in_stock': {
		'2T': 1,
		'3T': 1,
		'4T': 1
	}
}
const facets2 = {
	'facet-fit.lvl0': {
		'Underwear': 15
	},
	'facet-fit.lvl1': {
		'Underwear > Boys\' Staple': 5,
		'Underwear > JR Staple': 5,
		'Underwear > Toddlers\' Staple': 5
	},
	'facet-division.lvl0': {
		'Kids': 15
	},
	'facet-division.lvl1': {
		'Kids > Boys': 5,
		'Kids > Girls': 5,
		'Kids > Toddlers': 5
	},
	'facet-product-line.lvl0': {
		'Lifestyle': 10,
		'Performance': 5
	},
	'sizes_available_in_stock': {
		'M': 10,
		'S': 10,
		'L': 9,
		'2T': 5,
		'3T': 5,
		'4T': 5
	}
}
const kidsFacets = {
	'facet-fit.lvl0': {
		'Underwear': 15
	},
	'facet-fit.lvl1': {
		'Underwear > Boys\' Staple': 5,
		'Underwear > JR Staple': 5,
		'Underwear > Toddlers\' Staple': 5
	},
	'facet-division.lvl0': {
		'Kids': 15
	},
	'facet-division.lvl1': {
		'Kids > Boys': 5,
		'Kids > Girls': 5,
		'Kids > Toddlers': 5
	},
	'facet-product-line.lvl0': {
		'Lifestyle': 10,
		'Performance': 5
	},
	'sizes_available_in_stock': {
		'M': 10,
		'S': 10,
		'L': 9,
		'2T': 5,
		'3T': 5,
		'4T': 5
	}
}
const facets4 = {
	'facet-fit.lvl0': {
		'Hats & Beanies': 2,
		'Underwear': 2,
		'Accessories': 1
	},
	'facet-fit.lvl1': {
		'Hats & Beanies > Melin Hat': 2,
		'Underwear > Men\'s Staple': 2,
		'Accessories > Cashmere Scarf': 1
	},
	'facet-division.lvl0': {
		'Men': 5,
		'Women': 3
	},
	'facet-product-line.lvl0': {
		'Premium': 4,
		'Lifestyle': 1
	},
	'facet-collaboration.lvl0': {
		'Melin Series': 2
	},
	'sizes_available_in_stock': {
		'L': 2,
		'M': 2,
		'S': 2,
		'XL': 2,
		'XXL': 2,
		'ONS': 1,
		'XXXL': 1
	}
}
const facets5 = {
	'facet-fit.lvl0': {
		'Underwear': 1,
		'Bras': 1
	},
	'facet-fit.lvl1': {
		'Underwear > Toddlers\' Staple': 1,
		'Bras > Bikini': 1
	}
}
const queries = {
	'hierarchicalMenu': {
		'facet-fit.lvl0': 'Underwear'
	}
}
const realWorld = {
	'facet-fit.lvl0': {
		'Underwear': 262,
		'Bras': 196,
		'Pants & Tights': 49,
		'Shorts': 25,
		'Tops & T-Shirts': 24,
		'Bodysuits': 19,
		'Pullovers & Hoodies': 7
	},
	'facet-fit.lvl1': {
		'Bras > Sports Bra': 92,
		'Underwear > Women\'s Staple': 89,
		'Bras > Bralette Bra': 36,
		'Underwear > Cheeky': 33,
		'Underwear > Thong': 29,
		'Underwear > Shorty': 27,
		'Underwear > Bikini': 23,
		'Bras > Triangle Bra': 22,
		'Underwear > Brazilian Cheeky': 21,
		'Pants & Tights > Women\'s Leggings': 19,
		'Shorts > Biker Short': 19,
		'Pants & Tights > Full Length Tight': 17,
		'Underwear > Brazilian Thong': 17,
		'Bras > PullOver Bra': 16,
		'Underwear > Hipster': 14,
		'Bras > V-Neck Bra': 13,
		'Bras > High-Neck Bra': 11,
		'Pants & Tights > High Waisted Tight': 11,
		'Tops & T-Shirts > High-Neck Tank Top': 7,
		'Underwear > Seamless Thong': 7,
		'Pullovers & Hoodies > Pullover Hoodie': 6,
		'Shorts > Sweatshort': 5,
		'Bras > Bandeau Bra': 4,
		'Tops & T-Shirts > Cropped Tank Top': 4,
		'Tops & T-Shirts > The Fitted Crew': 4,
		'Tops & T-Shirts > Boyfriend Tee': 3,
		'Tops & T-Shirts > V-Neck Tee': 3,
		'Bras > Full Triangle Bra': 2,
		'Pants & Tights > Sweatpants': 2,
		'Tops & T-Shirts > Distressed Tee': 2,
		'Underwear > Seamless Hipster': 2,
		'Pullovers & Hoodies > Crew Neck': 1,
		'Tops & T-Shirts > Cami Set': 1,
		'Tops & T-Shirts > Graphic Tee': 1
	},
	'facet-division.lvl0': {
		'Women': 581
	},
	'facet-product-line.lvl0': {
		'Lifestyle': 419,
		'Performance': 93,
		'Premium': 84
	},
	'facet-collaboration.lvl0': {
		'Rolling Loud Series': 1
	},
	'sizes_available_in_stock': {
		'XS': 581,
		'L': 540,
		'XL': 538,
		'M': 521,
		'S': 507,
		'4XL': 114,
		'XXXL': 102,
		'XXL': 99
	}
}
const mensFacets = {
	'facet-fit.lvl0': {
		'Underwear': 341,
		'Hats & Beanies': 48,
		'Tops & T-Shirts': 40,
		'Pants & Tights': 30,
		'Accessories': 25,
		'Socks': 18,
		'Shorts': 14,
		'Pullovers & Hoodies': 10,
		'Footwear': 5,
		'Jackets': 4
	},
	'facet-fit.lvl1': {
		'Underwear > Mid': 183,
		'Underwear > Men\'s Staple': 133,
		'Underwear > Men\'s Alternate': 24,
		'Tops & T-Shirts > Graphic Tee': 21,
		'Pants & Tights > Men\'s ¾ Tight': 16,
		'Socks > Crew Socks': 13,
		'Hats & Beanies > Athletic Hat': 12,
		'Pants & Tights > Men\'s Lounge Pant': 10,
		'Shorts > Basketball Short': 10,
		'Pullovers & Hoodies > Pullover Hoodie': 8,
		'Footwear > Slides': 5,
		'Hats & Beanies > Raw Edge Beanie': 5,
		'Hats & Beanies > Wool Fold Beanie': 5,
		'Accessories > Beach Towel': 4,
		'Accessories > Golf Balls': 4,
		'Accessories > Swaddle Blanket': 4,
		'Hats & Beanies > Capulet Beanie': 4,
		'Hats & Beanies > Thermal Knit Legend Beanie': 4,
		'Pants & Tights > Sweatpants': 4,
		'Shorts > Sweatshort': 4,
		'Hats & Beanies > Czar Beanie': 3,
		'Hats & Beanies > Hathaway Beanie': 3,
		'Hats & Beanies > Standard Issue Beanie': 3,
		'Hats & Beanies > Thermal Knit Fold Beanie': 3,
		'Jackets > Varsity Jacket': 3,
		'Tops & T-Shirts > Classic Fit Tee': 3,
		'Tops & T-Shirts > Long Sleeve - Classic Fit': 3,
		'Tops & T-Shirts > Long Sleeve - Slim Fit': 3,
		'Tops & T-Shirts > Rollover Turtleneck': 3,
		'Tops & T-Shirts > Slim Fit Tee': 3,
		'Tops & T-Shirts > V-Neck Tee': 3,
		'Accessories > Belts': 2,
		'Accessories > Skateboard Decks': 2,
		'Hats & Beanies > Melin Hat': 2,
		'Hats & Beanies > Pom Beanie': 2,
		'Pullovers & Hoodies > Crew Neck': 2,
		'Socks > Moto Socks': 2,
		'Socks > No-Show Socks': 2,
		'Accessories > Bank Bag': 1,
		'Accessories > Bicycle Playing Cards': 1,
		'Accessories > Cashmere Scarf': 1,
		'Accessories > Clip Hangers': 1,
		'Accessories > Fragrance': 1,
		'Accessories > Gift Card': 1,
		'Accessories > Golf Glove': 1,
		'Accessories > Pillow': 1,
		'Accessories > Umbrella': 1,
		'Hats & Beanies > Boonie Hat': 1,
		'Hats & Beanies > Distressed Beanie': 1,
		'Jackets > Zip Hoodie': 1,
		'Socks > Snow Sock': 1,
		'Tops & T-Shirts > Jerseys': 1,
		'Underwear > fitKIT': 1
	},
	'facet-division.lvl0': {
		'Men': 534,
		'Women': 76,
		'Kids': 2
	},
	'facet-division.lvl1': {
		'Kids > Boys': 2
	},
	'facet-product-line.lvl0': {
		'Lifestyle': 391,
		'Premium': 114,
		'Performance': 73
	},
	'facet-collaboration.lvl0': {
		'Callaway Golf Series': 5,
		'Rolling Loud Series': 4,
		'Melin Series': 2,
		'Bicycle Playing Cards Series': 1,
		'Dame Dash Series': 1,
		'John Wall Series': 1
	},
	'sizes_available_in_stock': {
		'35': 5,
		'36': 4,
		'37': 4,
		'38': 4,
		'39': 3,
		'40': 3,
		'41': 4,
		'42': 4,
		'43': 5,
		'44': 5,
		'45': 5,
		'46': 5,
		'47': 5,
		'L': 393,
		'XL': 383,
		'M': 381,
		'S': 373,
		'XXL': 339,
		'XXXL': 294,
		'4XL': 163,
		'ONS': 56,
		'LL': 1,
		'LM': 1,
		'LML': 1,
		'LS': 1,
		'LXL': 1,
		'L|XL': 1,
		'RL': 1,
		'RM': 1,
		'RML': 1,
		'RS': 1,
		'RXL': 1,
		'S|M': 1
	}
}

/*
 * example object of tags
{
    "tag": {
        "_id": "648353dd801c705edf0d49b3",
        "display_name": "green test",
        "group": "custom",
        "icon_in_nav": false,
        "link_type": "None",
        "name": "green",
        "nav_type": "Navigation",
        "parent_tag": "",
        "priority": 3,
        "short_name": "green test"
    },
    "children": [],
    "count": 441,
    "depth": 0,
    "is_active": false,
    "url": "/shop/kids",
    "url_no_group": "/shop/kids"
}
 */

const buildFacetLinks = ( facets ) => {
	let tempFacets = []
	if (facets) {
		const isEmpty = ( obj ) => {
			return Object.keys( obj ).length === 0
		}
		const keys = Object.keys( facets )
		if (keys.length) {
			keys?.map( res2 => {
				const splitTitle = res2.split( '.' )
				if (splitTitle) {
					const parentTag = splitTitle[0].split( '-' )
					const parentFacet = res2.split( '.' )
					const displayName = parentTag[parentTag.length - 1]
					let tempObj = {}, groupedObj = {}
					const facetKey = Object.keys( facets[res2] )
					facetKey?.map( res3 => {
						// tagNav?.tag?.identifier + ': ' + tagNav?.tag?.name
						const url = `${ encodeURIComponent( res2 ) + ':' + encodeURIComponent( res3 ) }`
						const findTempTitle = tempFacets?.find( findRes => findRes?.tag?.group === displayName )
						const findGroupedFacets = tempFacets?.find( findRes => findRes?.tag?.group === splitTitle[0] )
						if (typeof splitTitle[1] === 'undefined') {
							if (!findGroupedFacets) {
								groupedObj = {
									tag: {
										name: res2,
										display_name: displayName,
										short_name: res2,
										group: splitTitle[0],
										parent_tag: displayName,
										identifier: res2,
										link_type: 'Auto'
									},
									children: []
								}
							} else {
								groupedObj = findGroupedFacets
							}
						} else {
							if (!findTempTitle) {
								tempObj = {
									tag: {
										name: res3,
										display_name: res3,
										// display_name: displayName,
										short_name: res3,
										group: displayName,
										// group: splitTitle[0],
										parent_tag: displayName,
										identifier: res2,
										link_type: 'Auto'
									},
									children: [],
									url: `?t=${ url }`
								}
							} else {
								tempObj = findTempTitle
							}
						}
						if (splitTitle[1] === 'lvl1') {
							tempObj.children.push( {
								tag: {
									name: res3,
									display_name: res3,
									short_name: res3,
									group: splitTitle[0],
									parent_tag: displayName,
									identifier: res2,
									link_type: 'Auto'
								},
								url: `?t=${ url }`
							} )
						}
						if (typeof splitTitle[1] === 'undefined') {
							groupedObj.children.push( {
								tag: {
									name: res3,
									display_name: res3,
									short_name: res3,
									group: splitTitle[0],
									parent_tag: displayName,
									identifier: res2,
									link_type: 'Auto'
								},
								url
							} )
						}
						if (!findTempTitle && !isEmpty( tempObj )) tempFacets.push( tempObj )
						if (!findGroupedFacets && !isEmpty( groupedObj )) tempFacets.push( groupedObj )
					} )
				}
			} )
		}
	}
	const findSizes = tempFacets?.find( ( res, key ) => {
		if (res?.tag?.name === 'sizes_available_in_stock') {
			tempFacets.splice( key, 1 )
			return res?.tag?.name === 'sizes_available_in_stock'
		}
	} )
	return { facets: tempFacets, sizes: findSizes?.children || [] }
}

const buildRawFacets = ( facets ) => {
	let tempFacets = []
	const keys = Object.keys( facets )
	if (keys.length) {
		tempFacets = keys
	}
	return tempFacets
}

const buildFacetsForLookup = ( facets ) => {
	let tempFacets = ''
	const facetKeys = Object.keys( facets )
	if (facetKeys.length) {
		facetKeys.map( res => {
			const facetKey = Object.keys( facets[res] )
			facetKey.map( res2 => {
				if (!tempFacets.length) {
					tempFacets += `(${ res }:"${ res2 }")`
				} else {
					tempFacets += ` AND (${ res }:"${ res2 }")`
				}
			} )
		} )
	}
	return tempFacets
}

const newFacetLookup = ( facets ) => {
	let tempFacets = ''
	if (facets.length) {
		facets.map( res => {
			const splitRes = res?.split( ':' )
			if (splitRes.length) {
				if (!tempFacets.length) {
					tempFacets += `(${ splitRes[0] }:"${ decodeURIComponent( splitRes[1].trim() ) }")`
				} else {
					tempFacets += ` OR (${ splitRes[0] }:"${ decodeURIComponent( splitRes[1].trim() ) }")`
				}
			}
		} )
	}
	return tempFacets
}

const buildRouteQueries = ( query ) => {
	let tempQueries = ''
	const queryKeys = Object.keys( query )
	//object.hasOwnProperty('key')
	console.log( 'queryKeys', queryKeys )
	queryKeys.forEach( key => {
		const tempKey = {}
		const queryKey = Object.keys( queries[key] )
		console.log( 'queryKey', queryKey )
	} )
	return tempQueries
}

const buildSizeLinks = (query) => {
	let queryString = ''
	Object.keys( query )?.map( ( key ) => {
		if(query[key]) {
			const decoded = decodeURIComponent(query[key])
			const splitSize = decoded.split( ':' )
			if(splitSize.length) {
				if(queryString) {
					queryString = `${queryString}&${key}=${encodeURIComponent(splitSize[0])}:${encodeURIComponent(splitSize[1])}`
				} else {
					queryString = `?${key}=${encodeURIComponent(splitSize[0])}:${encodeURIComponent(splitSize[1])}`
				}
			}
		}
	})
	return queryString
}

const newFacetLinks = ( facets ) => {
	// console.log('facets', facets)
	const isEmpty = ( obj ) => {
		return Object.keys( obj ).length === 0
	}
	const tempFacets = []
	const sizes = []
	const facetKeys = Object.keys( facets )
	// console.log('facetKeys', facetKeys)
	facetKeys?.map( ( key ) => {
			// console.log('key', key)
			let tempObj = {}
			const splitKey = key.split( '.' )
			const topLevel = facets[key]
			// console.log('topLevel', topLevel)
			const topLevelKey = Object.keys( topLevel )
			if (splitKey.length) {
				topLevelKey?.map( ( key2 ) => {
					const splitTopLevelKey = key2.split( '>' )
					const url = `${ encodeURIComponent( key ) + ':' + encodeURIComponent( key2 ) }`
					const findTagObject = tempFacets?.find(
						res => res?.tag?.name.trim() === splitTopLevelKey[0].trim()
					)
					if (splitTopLevelKey?.length === 1 && splitKey[1] === 'lvl0' && !findTagObject) {
						tempObj = {
							tag: {
								name: splitTopLevelKey[0],
								display_name: splitTopLevelKey[0],
								short_name: splitTopLevelKey[0],
								link_type: 'Auto',
								group: key
							},
							url: `?t=${ url }`,
							children: [],
							identifier: key
						}
					}
					if (splitTopLevelKey.length === 2 && splitKey[1] === 'lvl1') {
						findTagObject?.children?.push( {
							tag: {
								name: splitTopLevelKey[1].trim(),
								display_name: splitTopLevelKey[1].trim(),
								short_name: splitTopLevelKey[1].trim(),
								link_type: 'Auto',
								group: key
							},
							url: `?t=${ url }`,
							children: [],
							identifier: key
						} )
					}
					if (!isEmpty( tempObj )) {
						tempFacets.push( tempObj )
					}
				} )
			}
			if (key === 'sizes_available_in_stock') {
				// console.log('topLevel', topLevel)
				const sizeKeys = Object.keys( topLevel )
				sizeKeys?.map( ( sizeKey ) => {
						const url = `${ key + ':' + sizeKey }`
						sizes.push( {
							tag: {
								name: sizeKey,
								display_name: sizeKey,
								short_name: sizeKey,
								group: key,
								parent_tag: key,
								identifier: key,
								link_type: 'Auto'
							},
							url
						} )
					}
				)
			}
		}
	)
	return { facets: tempFacets, sizes }
}

describe( 'testing building custom facets', () => {
	it( 'should build facets', () => {
		const navigation = buildFacetLinks( facets1 )
		console.log( 'navigation', navigation?.sizes )
		chai.expect( navigation?.facets ).to.have.lengthOf( 3 )
		chai.expect( navigation?.sizes ).to.have.lengthOf( 3 )
	} )
	it( 'should build raw facets', () => {
		const rawFacets = buildRawFacets( facets2 )
		console.log( 'rawFacets', rawFacets )
		chai.expect( rawFacets ).to.have.lengthOf( 6 )
	} )
	it( 'should build facets for lookup', () => {
		const facetLookup = buildFacetsForLookup( facets1 )
		chai.expect( facetLookup ).to.equal( '(facet-fit.lvl0:"Underwear") AND (facet-fit.lvl1:"Underwear > Toddlers\' Staple") AND (facet-division.lvl0:"Kids") AND (facet-division.lvl1:"Kids > Toddlers") AND (facet-product-line.lvl0:"Lifestyle") AND (facet-product-line.lvl0:"Premium") AND (sizes_available_in_stock:"2T") AND (sizes_available_in_stock:"3T") AND (sizes_available_in_stock:"4T")' )
	} )
	it( 'should build NEW facets for lookup', () => {
		const facetLookup = newFacetLookup( [ '"facet-fit.lvl1:Underwear%20%3E%20Men\'s%20Staple"' ] )
		console.log( 'facetLookup', facetLookup )
		chai.expect( facetLookup ).to.equal( '("facet-fit.lvl1:"Underwear > Men\'s Staple"")' )
	} )
	it( 'should test kids facets', () => {
		const navigation = buildFacetLinks( [] )
		console.log( 'navigation', navigation )
	} )
	it( 'should test facets4', () => {
		const navigation = buildFacetLinks( facets4 )
		console.log( 'navigation', navigation )
	} )
	it( 'should build route queries', () => {
		const routeQueries = buildRouteQueries( queries )
	} )
	it( 'should test buildSizeLinks', () => {
		/*
		{
	"t": "facet-fit.lvl1:Pullovers%20%26%20Hoodies%20%3E%20Pullover%20Hoodie",
	"z": "sizes_available_in_stock%3AXXL"
}
		 */
		const links = buildSizeLinks( {
			// 't': 'facet-fit.lvl1:Underwear%20%3E%20Mid',
			'z': 'sizes_available_in_stock%3AL'
		} )
		console.log( 'links', links )
	} )
	it( 'should build display name', () => {
		const arr = [ 'facet-fit.lvl1:Footwear > Slides' ]
		const tagNav = {
			tag: {
				identifier: 'facet-fit.lvl1',
				display_name: 'Footwear > Slides'
			}
		}
		const compareRouteTags = `${ tagNav?.tag?.identifier }:${ tagNav?.tag?.display_name }`
		const tagExists = arr.includes( compareRouteTags )
		console.log( 'includes', tagExists )
	} )
	it( 'should build new facets', () => {
		const navigation = newFacetLinks( mensFacets )
		console.log( 'navigation', navigation?.facets[0].children )
	} )
} )