module.exports = {
    get: function(Query, context, opts) {

        if (!opts.path || !opts.query)
            throw new Error('Missing path|query param in nested query');

        if (typeof Query.body.query.bool == 'undefined') {
            Query.body.query.bool = {};
            Query.body.query.bool[context] = [];
        }

        Query.body.query.bool[context].push({
            "nested": opts
        });
    }
};
