module.exports = {
    get: function(Query, context, opts) {

        if (!opts.query)
            throw new Error('Query string missing in query string query');

        var qS = {
            query_string : {
                query: opts.query
            }
        };

        if (opts.default_field) {
            qS.query_string.default_field = opts.default_field;
        }

        Query.body.query.bool[context].push(qS);
    }
};
