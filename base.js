//Component Query
var Query = function() {
    this.body = {
        query: {}
    };
    this.queriesToApply = [];
    this.filtersToApply = [];
    this.aggsToApply = [];
    this.sort = [];
};

Query.queries = {};
Query.filters = {};
Query.aggs = {};

Query.prototype.get = function() {
    var i,
       max,
       query,
       name,
       opts,
       context;

    max = this.queriesToApply.length;
    if (max) {
        if (typeof this.body.query.bool == 'undefined') {
            this.body.query.bool = {};
        }
        for (i = 0; i < max; i++) {
            query = this.queriesToApply[i];

            context = query.context == 'query'? 'must':'filter';
            if (typeof this.body.query.bool[context] == 'undefined') {
                this.body.query.bool[context] = [];
            }

            Query.queries[query.name].get.call(this, this, context, query.opts);
        };
    } else {
        delete this.body.query;
    }

    max = this.filtersToApply.length;
    if (max) {
        for (i = 0; i < max; i++) {
           temp = this.filtersToApply[i];
           Query.filters[temp.name].get.call(this, this, temp.opts);
        };
    }

    max = this.aggsToApply.length;
    if (max) {
        for (i = 0; i < max; i++) {
           temp = this.aggsToApply[i];
           Query.aggs[temp.name].get.call(this, this, temp.opts);
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
        context: 'query',
        opts: opts
    });

    return this;
};

Query.prototype.addFilteredQuery = function(queryName, opts) {
    this.queriesToApply.push({
        name: queryName,
        context: 'filter',
        opts: opts
    });

    return this;
};

Query.prototype.addFilter = function(filterName, opts) {
    this.filtersToApply.push({
        name: filterName,
        opts: opts
    });

    return this;
};

Query.prototype.addAggregation = function(aggregationName, opts) {
    this.aggsToApply.push({
        name: aggregationName,
        opts: opts
    });

    return this;
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
