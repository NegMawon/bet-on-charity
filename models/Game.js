var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var GameSchema = new Schema({
  title: String,
  description: String,
  user: String,
  email: String,
  team1: String,
  team2: String
});

var Game = mongoose.model("Game", GameSchema);

module.exports = Game;
