var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
var charitySchema = new Schema({
    Name: String,
    ein: String,
    Category: String
});
var Charity = mongoose.model("Charity", charitySchema);
module.exports = Charity;
