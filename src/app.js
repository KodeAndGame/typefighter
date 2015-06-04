/// <reference path="../typings/node/node.d.ts"/>
var tfDict = require('./lib/tf-dictionary');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join( __dirname, 'public')));

app.get('/randomWord', function(req, res) {
	res.send(tfDict.get()); 
});

app.get('/allWords', function(req, res) {
	res.send(tfDict.showAll());
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});