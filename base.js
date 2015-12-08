var lib = './lib/';

//Component Query
var Query = function() {
    this.query = {
        body: null
    };
    this.queriesToApply = [];
};

Query.queries = {};

Query.prototype.get = function() {
    var i,
       max,
       temp,
       name,
       opts;

    var query = this.query;

    max = this.queriesToApply.length;
    for (i = 0; i < max; i++) {
       temp = this.queriesToApply[i];
       name = temp.name;
       opts  = temp.opts;
       Query.queries[name].get.call(this, this, opts);
    };
    return this.query;
};

Query.prototype.addQuery = function(queryName, opts) {
    this.queriesToApply.push({
        name: queryName,
        opts: opts
    });
};

Query.prototype.addFilter = function(filterName, opts) {
    //WIp
};

module.exports = Query;
