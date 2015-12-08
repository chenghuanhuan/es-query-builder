var BaseQuery = require('./base.js');

//Loading all queries available
require("fs").readdirSync('./lib').forEach(function(file) {
    var queryName = file.replace('.js','');
    BaseQuery.queries[queryName] = require("./lib/" + file);
});

var queryBuilder = {};

module.exports = BaseQuery;
