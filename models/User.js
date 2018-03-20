var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  //allows us to inject user info into mongoose
  passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  admin: {type: Boolean, default:false},
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);
module.exports = User;
