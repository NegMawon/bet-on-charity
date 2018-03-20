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
  request = require("request");
// connect to db models
var db = require("./models"),
  Game = db.Game,
  User = db.User,
  Bet = db.Bet;


// generate a new express app and call it 'app'
var app = express();
// serve static files in public
app.use(express.static(__dirname + "/public"));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
// set view engine to ejs (like ERB in rails)
app.set("view engine", "ejs");

/*******************
** Auth Middleware**/

app.use(cookieParser());
app.use(session(  {
  secret: 'betoncharity',
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));

////////////////////
//  ROUTES
///////////////////
app.get("/", function(req, res) {
  // res.sendFile('views/index', { root : __dirname});
  // res.render("index", { games: allGames});
  Game.find(function(err, allGames) {
    if (err) { res.status(500).json({ error: err.message });}

      //show games of logged in user
      Bet.find({}, function(err, foundBets){
      //console.log("foundBets", foundBets[0].amount);
        var totalBetsAmounts = 0;
        foundBets.forEach(function(bet){
          // console.log(bet.amount);
          if(bet.amount){
            totalBetsAmounts += bet.amount
          }

        })
        // foundBets.map(bet => totalBetsAmounts += bet.amount);
        // console.log(totalBetsAmounts);

        res.render("index", { games: allGames, user: req.user, bets: foundBets, totalBetsAmounts: totalBetsAmounts});
      })

  });;
});
//create new user bet and redirect to confirmation page
app.post("/", function(req, res) {
  // res.sendFile('views/index', { root : __dirname});
  // res.render("index", { games: allGames});
  console.log("req.body", req.body);
  // var newBet = new Bet({
  //   team: req.body.team,
  //   charity: req.body.charity,
  //   amount: req.body.amount
  //   // ,
  //   // gameId: req.params.id
  // });
  // console.log("newBet",newBet);
  return res.render("confirmBet", { bet: req.body });
  // saveBet(newBet, res);
});

app.post("/confirmBet", function(req, res) {
  // function saveBet(newBet, res){
  console.log("confirm req.body",req.body);
  var newBet = new Bet({
    email: req.body.email,
    gameId: req.body.gameId,
    team: req.body.team,
    charity: req.body.charity,
    amount: req.body.amount
  });
  // Bet.findOne(req.body.id, function(err, bet){
  //   console.log(bet);
  newBet.save(function(err, bet) {
    if (err) {
      return console.log("save error: " + err);
    }
    console.log("saved ", bet);
    // send back the bet!
    // res.json(bet);
    // res.render({bet: newBet});
    // res.render("confirmBet", { bet: bet });
    res.redirect("/");
  });
});

// app.get("/games", function(req, res) {
//   Game.findById(req.params.id, function(err, foundGame) {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.render("games/show", { game: foundGame });
//     }
//   });
// });

app.get("/games/:id", function(req, res) {
  Game.findById(req.params.id, function(err, foundGame) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.render("games/show", { game: foundGame });
    }
  });
});

app.get("/allGames", function(req, res) {
  request(
    "http://api.sportradar.us/ncaamb/trial/v4/en/games/e8ba508c-3a41-4cd5-bfad-5a60f2738420/boxscore.json?api_key=x4nyauywjpp2w4mpg7xwautr",
    function(error, response, body) {
      res.json(body);
      console.log(body);
      // console.log(response.body);

      // console.log('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    }
  );
});

//////////////////////
//// Auth Routes ////

// show signup view
app.get('/signup', function (req, res) {
 res.render('signup');
});

// Signing up new user, log them in
// hash and salts password, saves new user to db
app.post('/signup', function (req, res) {
  User.register(new User({

          firstname: req.body.firstname,

          lastname: req.body.lastname,

          email: req.body.email ,

          username: req.body.username}),
    req.body.password,
    function (err, newUser) {
      passport.authenticate('local')(req, res, function() {
        // res.send('signed up!!!');
        res.redirect("/");
      });
    }
  );
});
////////////////////
//  SERVER
///////////////////
// Server is listenning on
app.listen(process.env.PORT || 3000, function() {
  console.log("www.betoncharity.org is listening at: http://localhost:3000/");
});
