//Imports
var express = require('express');
var http = require('http');
var socketIo = require('socket.io');

// routes
var routes = require('./routes/index');

//Create Server
var app = express();
var server = http.Server(app);
var io = socketIo(server); // Websockets

//routes
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var port = process.env.PORT || 8000; // Get Serverport
app.listen(port, function() {
	console.log('Server started on port', port); // Start Server and print it 
});

