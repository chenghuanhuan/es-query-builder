# Query Builder for the search method in Elastic Search API

### Example:

```javascript
var EsQueryBuilder = require('es-query-builder');

var q = new EsQueryBuilder();
q.addQuery('nested', {});
console.log(q.get());
```
