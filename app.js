var http = require('http');
var nodeStatic = require('node-static');
var randomWord = require('./random-word-chooser');
var fileServer = new nodeStatic.Server('./public');


var app = http.createServer(function (req, res) {

	switch(req.url) {
		case '/test?action=randomWord':
			write(res, randomWord.get());
			break;
		case '/test?action=allWords':
			write(res, randomWord.showAll());
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



app.listen(8080);