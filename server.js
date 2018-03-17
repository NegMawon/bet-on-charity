/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////
//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');
// connect to db models
var db = require('./models');
// generate a new express app and call it 'app'
var app = express();
// serve static files in public
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
////////////////////
//  ROUTES
///////////////////
app.get ('/', function(req, res){
  res.sendFile('views/index.html', { root : __dirname});
});

// Getting all the charities created
app.get('/api/charities', function(req,res) {
  Charity.find({}, function(err,allCharities) {
    if(err) {
      console.log(err);
    } else {
      res.json(allCharities);
    }
  });
});

app.get('/api/users', function(req,res) {
  User.find({}, function(err,allusers) {
    if(err) {
      console.log(err);
    } else {
      res.json(allusers);
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
