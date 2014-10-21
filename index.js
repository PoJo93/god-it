var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIo(server);

var port = process.env.PORT || 8000;
app.listen(port, function() {
	console.log('Server started on port', port);
});

