var db = require('./models'),
   faker = require('faker');

var games_list = [

  {
    title: "NCAAMB",
    description: faker.random.words(),
    user: faker.random.number(),
    team1: faker.address.state(),
    team2: faker.address.state()

  },{
    title: "NCAAMB",
    description: faker.random.words(),
    user: faker.random.number(),
    team1: faker.address.state(),
    team2: faker.address.state()

  },{
    title: "NCAAMB",
    description: faker.random.words(),
    user: faker.random.number(),
    team1: faker.address.state(),
    team2: faker.address.state()

  },{
    title: "NCAAMB",
    description: faker.random.words(),
    user: faker.random.number(),
    team1: faker.address.state(),
    team2: faker.address.state()

  },{
    title: "NCAAMB",
    description: faker.random.words(),
    user: faker.random.number(),
    team1: faker.address.state(),
    team2: faker.address.state()

  }
];

// for (var i= 0; i < 5; i++) {
//     db.Game.create({
//       title: faker.lorem.words(),
//       description: faker.address.state()
//       // user: Math.floor(Math.random() * 5)
//   });
// }

// remove all records that match {} -- which means remove ALL records
db.Game.remove({}, function(err){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all games');

    // create new records based on the array games_list
    db.Game.create(games_list, function(err, games){
      if (err) { return console.log('err', err); }
      console.log("created", games.length, "games");
      process.exit();
    });
  }
});

// db.Game.create({
// title: faker.lorem.words(),
// description: faker.address.state()
// // user: Math.floor(Math.random() * 5)
// });
