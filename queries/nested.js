module.exports = {
    get: function(Query, opts) {

        if (!opts.path || !opts.query)
            throw new Error('Missing path|query param in nested query');

        var context = opts.context == 'query'? 'must':'filter';

        if (typeof Query.body.query.bool == 'undefined') {
            Query.body.query.bool = {};
            Query.body.query.bool[context] = [];
        }

        var nested = {
            "nested": opts
        };

        Query.body.query.bool[context].push(nested);
    }
};
