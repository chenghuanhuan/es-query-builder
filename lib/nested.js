module.exports = {
    get: function(Query, opts) {
        Query.query = {
            body: {
                match: '123'
            }
        };
    }
};
