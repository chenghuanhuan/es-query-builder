var BaseQuery = require('./base.js');

//Loading all queries available
var normalizedPath = require("path").join(__dirname, "lib");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    var queryName = file.replace('.js','');
    BaseQuery.queries[queryName] = require("./lib/" + file);
});

var queryBuilder = {};

module.exports = BaseQuery;
