var BaseQuery = require('./base.js');
var queriesDir = 'queries';
var filtersDir = 'filters';
var aggregationsDir = 'aggs';

//Loading all queries available
var normalizedPath = require("path").join(__dirname, queriesDir);
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    var queryName = file.replace('.js','');
    BaseQuery.queries[queryName] = require("./" + queriesDir + '/' + file);
});

//Loading all available filters
var normalizedPath = require("path").join(__dirname, filtersDir);
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    var filterName = file.replace('.js','');
    BaseQuery.filters[filterName] = require("./" + filtersDir + '/' + file);
});

//Loading all available aggregations
var normalizedPath = require("path").join(__dirname, aggregationsDir);
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    var aggregationName = file.replace('.js','');
    BaseQuery.aggs[aggregationName] = require("./" + aggregationsDir + '/' + file);
});

module.exports = BaseQuery;

//test
var q = new BaseQuery();
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
