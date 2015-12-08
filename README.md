# ES Query Builder
A basic query builder for elastic search DSL

### Example:

```javascript
var EsQueryBuilder = require('es-query-builder');

var q = new EsQueryBuilder();

q.addQuery('nested', {
    path: 'categories',
    query: {
        match: {
            "categories.id": 'restaurantes'
        }
    }
});
q.addFilter('geo_distance', {
    distance: '1km',
    lat: 19.465313,
    lon: -99.143719
});
q.addSort('geo_distance', {
    "location": {
        "lat":  19.465313,
        "lon": -99.173719
    },
    "order": "asc",
    "unit": "km",
    "distance_type": "plane"
});
console.log(JSON.stringify(q.get(), null, 2));
```
