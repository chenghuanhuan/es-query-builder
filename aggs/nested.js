module.exports = {
    get: function(Query, opts) {

        if (!opts.path || !opts.aggs)
            throw new Error('Missing path|aggs param in nested aggregate');

        if (typeof Query.body.aggs == 'undefined') {
            Query.body.aggs = {};
        }

        Query.body.aggs[opts.path] = {
            "nested": {
                "path": opts.path
            },
            "aggs": opts.aggs
        };
    }
};
