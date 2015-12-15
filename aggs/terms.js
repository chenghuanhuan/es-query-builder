module.exports = {
    get: function(Query, opts) {

        if (!opts.field)
            throw new Error('Missing field param in terms aggregate');

        if (typeof Query.body.aggs == 'undefined') {
            Query.body.aggs = {};
        }

        Query.body.aggs[opts.field] = {
            "terms": opts
        };
    }
};
