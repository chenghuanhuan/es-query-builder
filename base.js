//Component Query
var Query = function() {
    this.body = {
        query: {}
    };
    this.queriesToApply = [];
    this.filtersToApply = [];
    this.sort = [];
};

Query.queries = {};
Query.filters = {};

Query.prototype.get = function() {
    var i,
       max,
       temp,
       name,
       opts;

    max = this.queriesToApply.length;
    if (max) {
        for (i = 0; i < max; i++) {
           temp = this.queriesToApply[i];
           name = temp.name;
           opts  = temp.opts;
           Query.queries[name].get.call(this, this, opts);
        };
    } else {
        delete this.body.query;
    }

    max = this.filtersToApply.length;
    if (max) {
        for (i = 0; i < max; i++) {
           temp = this.filtersToApply[i];
           name = temp.name;
           opts  = temp.opts;
           Query.filters[name].get.call(this, this, opts);
        };
    }

    if (this.sort.length) {
        this.body.sort = this.sort;
    }

    return this.body;
};

Query.prototype.addQuery = function(queryName, opts) {
    this.queriesToApply.push({
        name: queryName,
        opts: opts
    });
};

Query.prototype.addFilter = function(filterName, opts) {
    this.filtersToApply.push({
        name: filterName,
        opts: opts
    });
};

Query.prototype.addSort = function(sortType, opts) {
    switch (sortType) {
        case 'geo_distance':
            this.sort.push({
                "_geo_distance": opts
            });
            break;
        default:
            this.sort.push(opts);
    }
};

module.exports = Query;
