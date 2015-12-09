module.exports = {
    get: function(Query, context, opts) {

        if (!opts.path || !opts.query)
            throw new Error('Missing path|query param in nested query');

        Query.body.query.bool[context].push({
            "nested": opts
        });
    }
};
