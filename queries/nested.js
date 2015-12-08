module.exports = {
    get: function(Query, opts) {

        if (!opts.path || !opts.query)
            throw new Error('Missing path|query param in nested query');

        if (typeof Query.body.query.bool == 'undefined') {
            Query.body.query.bool = {
                must: []
            };
        }

        var nested = {
            "nested": opts
        };

        Query.body.query.bool.must.push(nested);
    }
};
