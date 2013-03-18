var http = require('http');
var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server('./public');

http.createServer(function (request, response) {
	
	request.on('end', function () {
		fileServer.serve(request, response);
	});

	request.resume();

}).listen(8080);