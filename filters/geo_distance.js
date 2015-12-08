
module.exports = {
    get: function(Query, opts) {

        if (!opts.distance || !opts.lat || !opts.lon)
            throw new Error('Missing distance|lat|lon param in geo distance filter');

        Query.body.filter = {
            "geo_distance": {
                "distance": opts.distance,
                "location":{
                    "lat": opts.lat,
                    "lon":opts.lon
                }
            }
        }
    }
};
