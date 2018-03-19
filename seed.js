var db =  require("./models");

var userList = [
    {
      firstName: 'Manjila',
      lastName: 'Nakarmi',
      username: 'jumanji',
      password: '123'
    },

    {
      firstName: 'Stephanie',
      lastName: 'Snopek',
      username: 'steph',
      password: '123'
    },

    {
      firstName: 'Kay',
      lastName: 'Hudson',
      username: 'hudsonriver',
      password: '123'
    },

    {
      firstName: 'Dereje',
      lastName: 'Dilnesaw',
      username: 'dj',
      admin:true,
      password: '123'
    }


];

var charityList = [
  {
    Name: 'Wounded Warrior',
    ein: '11-1111111',
    Category: 'Veterans'
  },

  {
    Name: 'St Jude',
    ein: '22-2222222',
    Category: 'Medical'
  },

  {
    Name: 'Wounded Warrior',
    ein: '33-3333333',
    Category: 'Veterans'
  }
];

var gameList = [
{
  date: Date,
  wager: 10.00
}
];
var u;
var c;
db.User.remove({}, function(err, users) {
 console.log('removed all Users');
 db.User.create(userList, function(err, users){
    if (err) {
     console.log(err);
     return;
   }
 console.log('recreated all users');
   console.log('created', users.length, 'users');
 u=users[0];
 });

});


db.Charity.remove({}, function(err, charities) {
 console.log('removed all charities');
 db.Charity.create(charityList, function(err, charities){
    if (err) {
     console.log(err);
     return;
   }
 console.log('recreated all charities');
   console.log('created', charities.length, 'charities');
   c=charities[0];
 });
});

db.Game.remove({}, function(err, games) {
 console.log('removed all Games');
 var game=new db.Game(gameList);
 game.Charity=c;
 game.User=u;
 game.save(function(err, games){
    if (err) {
     console.log(err);
     return;
   }
 console.log('recreated all games');
   console.log('created', games.length, 'games');

 });
});
