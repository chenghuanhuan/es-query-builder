# ES Query Builder
A basic query builder for elastic search DSL

### Example:

```javascript
var EsQueryBuilder = require('es-query-builder');

var q = new EsQueryBuilder();
q.addQuery('nested', {});
console.log(q.get());
```
