
module.exports = {
    get: function(Query, context, opts) {

        if (!opts.distance || !opts.lat || !opts.lon)
            throw new Error('Missing distance|lat|lon param in geo distance filtered query');

        if (typeof Query.body.query.bool == 'undefined') {
            Query.body.query.bool = {};
            Query.body.query.bool[context] = [];
        }

        Query.body.query.bool[context].push({
            "geo_distance": {
                "distance": opts.distance,
                "location":{
                    "lat": opts.lat,
                    "lon":opts.lon
                }
            }
        });
    }
};
