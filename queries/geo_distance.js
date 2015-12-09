
module.exports = {
    get: function(Query, context, opts) {

        if (!opts.distance || !opts.lat || !opts.lon)
            throw new Error('Missing distance|lat|lon param in geo distance filtered query');

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
