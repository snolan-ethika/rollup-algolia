# This is a test repo for running algolia within rollup

## setup
 - rename .env.example -> .env
 - update values to match your values for algolia's app & api ids

## running
 - run `npm run roll-it-up`
 - run `npm run run-bundle`
 - watch it make a request to "getObject"

## troubleshooting
 - make sure you update the "/shop" path on "getPageObject" to something you have in your records.
 - if you need to use a different _search_ method feel free to update the "getPageObject" method's logic as needed.