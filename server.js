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
  LocalStrategy = require("passport-local").Strategy,
  request = require('request');
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

app.get('/allGames', function(req, res){
 
  request('http://api.sportradar.us/ncaamb/trial/v4/en/games/e8ba508c-3a41-4cd5-bfad-5a60f2738420/boxscore.json?api_key=x4nyauywjpp2w4mpg7xwautr', function (error, response, body) {
    res.json(response.body);
    
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
})


////////////////////
//  SERVER
///////////////////
// Server is listenning on
app.listen(process.env.PORT || 3000, function () {
  console.log('www.betoncharity.org is listening at: http://localhost:3000/');
});
