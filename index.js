//Imports
var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

// routes
var routes = require('./routes/index');

// Create Server
var app = express();
var server = http.Server(app);
var io = socketIo(server); // Websockets

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8000; // Get server port
app.listen(port, function() {
	// Start Server and print it 
	console.log('Server started on port', port);
});

