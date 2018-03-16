var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var GameSchema = new Schema({
  title: String,
  description: String,
  // user: {type: Schema.Types.ObjectId, ref:'User'}
});

var Game = mongoose.model("Game", GameSchema);

module.exports = Game;