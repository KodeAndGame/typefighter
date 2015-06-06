/// <reference path="../typings/node/node.d.ts"/>
var words = require('./lib/words'),
	passage = require('./lib/passage'),
	path = require('path'),
	express = require('express'),
	exphbs = require('express-handlebars'),
	app = express();


//View Engine
app.engine('handlebars', exphbs({
	defaultLayout : 'main',
	extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Static
app.use(express.static(path.join( __dirname, 'public')));

//Test "API" Calls
app.get('/randomWord', function(req, res) {
	res.send(words.get()); 
});

app.get('/allWords', function(req, res) {
	res.send(words.showAll());
});

app.get('/passage', function (req, res) {
	res.send(passage.get());
});


// Go
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});