var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	// load our public/index.html file
	res.sendFile('/index.html', { root: path.join(__dirname, '../public') }); 
});

module.exports = router;

