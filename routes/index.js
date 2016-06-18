var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/machine', function(req, res, next) {
  var os = require("os");
  var host = os.hostname();

  res.end('Request processed by ' + host);
});

module.exports = router;
