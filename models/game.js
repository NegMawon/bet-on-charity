var mongoose = require('mongoose'),
Schema = mongoose.Schema;
Charity = require('./charity');
User = require('./user');
var GameSchema = new Schema({
  date: Date,
  wager: Number,
  charity: {type: Schema.Types.ObjectId, ref: 'Charity'},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
});
var Game = mongoose.model("Game", GameSchema);
module.exports = Game;
