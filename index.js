//Imports
var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

//Create Server
var app = express();
var server = http.Server(app);
var io = socketIo(server); // Websockets


var port = process.env.PORT || 8000; // Get Serverport
app.listen(port, function() {
	console.log('Server started on port', port); // Start Server and print it 
});

