const express  = require('express'),
    bodyParser = require('body-parser'),
    request = require('request'),
    hbs = require('hbs');

var {mongoose} = require('./db/mongoose');
var {pokedex} = require('./models/pokedex');

var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials');
// set the view engine to hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// set the login route
app.get('/', function(req, res) {
    res.render('login');
});

// set the home page route
app.get('/index', function(req, res) {
    res.render('index');
});

app.get('/pokedex', function(req, res) {
  pokedex.find().then((pokemon) => {
    res.send({pokemon});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);

    /*request.post(
      'https://api.mlab.com/api/1/databases/heroku_bwn9zwkk/collections/PG_evolveItems?apiKey=sY_tafZG8r3CPscy7aUqm5MtAQzCnrYS',
      { json:  
        [
 {
   "EvolveID": 1,
   "EvolveName": "Dragon Scale"
 },
 {
   "EvolveID": 2,
   "EvolveName": "King's Rock"
 },
 {
   "EvolveID": 3,
   "EvolveName": "Metal Coat"
 },
 {
   "EvolveID": 4,
   "EvolveName": "Sun Stone"
 },
 {
   "EvolveID": 5,
   "EvolveName": "Upgrade"
 }
]
      },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
          }
      }
  );*/
});