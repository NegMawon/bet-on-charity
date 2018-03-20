var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("http://scores.espn.com/mens-college-basketball/scoreboard/_/date/20180322", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  // $('tr.athing:has(td.votelinks)').each(function( index ) {
  //   var title = $(this).find('td.title > a').text().trim();
  //   var link = $(this).find('td.title > a').attr('href');
  //   fs.appendFileSync('hackernews.txt', title + '\n' + link + '\n');
  // });
 //  $('tbody.athing:has(td.votelinks)').each(function( index ) {
 //    var title = $(this).find('td.title > a').text().trim();
 //    var link = $(this).find('td.title > a').attr('href');
 //    fs.appendFileSync('hackernews.txt', title + '\n' + link + '\n');
 //  });
  $(`tbody#teams`).each(function( index ) {
    console.log('lool');
   var team1 = $(this).find('td.away > div.sb-meta > a > span.sb-team-short').text().trim();
   var team2 = $(this).find('td.home > div.sb-meta > a > span.sb-team-short').text().trim();
   // var score = $(this).find('div.score.unvoted').text().trim();
   // var user = $(this).find('a.author').text().trim();
   console.log("team1: " + team1);
   console.log("team2: " + team2);

   fs.appendFile('ncaa.txt', team1 + '\n' + team2 + '\n');
 });

});
//
// var request = require('request');
// var cheerio = require('cheerio');
// var fs = require('fs');
//
// request("https://news.ycombinator.com/news", function(error, response, body) {
//   if(error) {
//     console.log("Error: " + error);
//   }
//   console.log("Status code: " + response.statusCode);
//
//   var $ = cheerio.load(body);
//
//   $('tr.athing:has(td.votelinks)').each(function( index ) {
//     var title = $(this).find('td.title > a').text().trim();
//     var link = $(this).find('td.title > a').attr('href');
//     fs.appendFileSync('hackernews.txt', title + '\n' + link + '\n');
//   });
//
// });
