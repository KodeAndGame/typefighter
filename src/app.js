/// <reference path="../typings/node/node.d.ts"/>
var words = require('./lib/words'),
	passage = require('./lib/passage'),
	path = require('path'),
	express = require('express'),
	exphbs = require('express-handlebars'),
	app = express();


//View Engine
app.engine('.hbs', exphbs({
	defaultLayout : 'main',
	extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
	res.render('typetest.hbs', { passage : passage.get()});
});

//Static
app.use(express.static(path.join( __dirname, 'public')));


// Go
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});