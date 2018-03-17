var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  //allows us to inject user info into mongoose
  //passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  admin: {type: Boolean, default:false},
  password: String
});
//UserSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User", UserSchema);
module.exports = User;
