/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////
//require express in our app
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  cookieParser = require("cookie-parser"),
  session = require("express-session"),
  passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
// connect to db models
var db = require('./models'),
  Game = db.Game,
  User = db.User;
// generate a new express app and call it 'app'
var app = express();
// serve static files in public
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine to ejs (like ERB in rails)
app.set("view engine", "ejs");

////////////////////
//  ROUTES
///////////////////
app.get ('/', function(req, res){
  // res.sendFile('views/index', { root : __dirname});
  // res.render("index", { games: allGames});
  Game.find(function(err, allGames) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      //show games of logged in user
      res.render("index", { games: allGames, user: req.user });
    }
  });
  console.log("index");
  });

  app.get("/games", function(req, res) {
    Game.findById(req.params.id, function(err, foundGame) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.render("games/show", { game: foundGame });
      }
    });
  });
  
app.get("/games/:id", function(req, res) {
  Game.findById(req.params.id, function(err, foundGame) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.render("games/show", { game: foundGame });
    }
  });
});




////////////////////
//  SERVER
///////////////////
// Server is listenning on
app.listen(process.env.PORT || 3000, function () {
  console.log('www.betoncharity.org is listening at: http://localhost:3000/');
});
