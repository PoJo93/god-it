var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	// load our public/index.html file
	res.sendFile(__dirname + '/../public/index.html');
});

module.exports = router;
