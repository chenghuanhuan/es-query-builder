var Path = require('path');
var fs = require('fs');
var BaseQuery = require('./base.js');

var normalizedPath;
var queriesDir = 'queries';
var filtersDir = 'filters';
var aggregationsDir = 'aggs';

//Loading all queries available
normalizedPath = Path.join(__dirname, queriesDir);
fs.readdirSync(normalizedPath).forEach(function(file) {
    var queryName = file.replace('.js','');
    BaseQuery.queries[queryName] = require("./" + queriesDir + '/' + file);
});

//Loading all available filters
normalizedPath = Path.join(__dirname, filtersDir);
fs.readdirSync(normalizedPath).forEach(function(file) {
    var filterName = file.replace('.js','');
    BaseQuery.filters[filterName] = require("./" + filtersDir + '/' + file);
});

//Loading all available aggregations
normalizedPath = Path.join(__dirname, aggregationsDir);
fs.readdirSync(normalizedPath).forEach(function(file) {
    var aggregationName = file.replace('.js','');
    BaseQuery.aggs[aggregationName] = require("./" + aggregationsDir + '/' + file);
});

module.exports = BaseQuery;

//test
// var q = new BaseQuery();
//
// q.addQuery('nested', {
//     path: 'categories',
//     query: {
//         match: {
//             "categories.id": 'restaurantes'
//         }
//     }
// });
// q.addFilter('geo_distance', {
//     distance: '1km',
//     lat: 19.465313,
//     lon: -99.143719
// });
// q.addFilteredQuery('geo_distance', {
//     distance: '1km',
//     lat: 19.465313,
//     lon: -99.143719
// });
// q.addSort('geo_distance', {
//     "location": {
//         "lat":  19.465313,
//         "lon": -99.173719
//     },
//     "order": "asc",
//     "unit": "km",
//     "distance_type": "plane"
// });
// q.addAggregation('nested', {
//     "path": "categories",
//     "aggs": {
//         "by_term": {
//             "terms" : {
//                 "field" : "categories.id",
//                 "size": 99
//             }
//         }
//     }
// });
// console.log(JSON.stringify(q.get(), null, 2));
