
module.exports = {
    get: function(Query, context, opts) {

        Query.body.query.bool[context].push({
            "term": opts
        });
    }
};
