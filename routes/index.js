var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.sendFile(process.cwd()+'/index.html');
});

module.exports = router;
