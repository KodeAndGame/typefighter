var http = require('http');
var nodeStatic = require('node-static');
var randomWord = require('./lib/random-word-chooser');

var fileServer = new nodeStatic.Server('./public');

var app = http.createServer(function (req, res) {

	switch(req.url) {
		case '/test?action=randomWord':
			write(res, randomWord.get());
			break;
		case '/test?action=allWords':
			write(res, randomWord.showAll());
			break;
		case '/test?action=randomWordImage':
			randomWord.getAsImage('./public/fonts/Aldrich/Aldrich-Regular.ttf', 16, function(err, buf) {
				res.writeHead(200, {
				  'Content-Type': 'image/png' 
				});
				res.end(buf, 'binary');
			});
			break;
		default:
			req.on('end', function () {
				fileServer.serve(req, res);
			});

			req.resume();
			break;
	}
})

function write(res, body) {
	res.writeHead(200, {
	  'Content-Length': body.length,
	  'Content-Type': 'text/plain' 
	});
	res.write(body);
	res.end();
}

var io = require('socket.io').listen(app);
io.set('log level', 1);

io.sockets.on('connection', function(socket) {
	socket.on('typed', function (data) {

	})
});


app.listen(8080);