var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/betoncharity");
module.exports.User = require("./user");
module.exports.Charity = require("./charity");
module.exports.Game = require("./game");
