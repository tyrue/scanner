var express = require('express');
var router = express.Router();
var scanner = require('../public/javascripts/scanner');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("gd");
  res.render('index', { title: 'Express!', time: Date() });
});
router.get('/result', function(req, res, next) {
  scanner.result(req, res);
});
router.post('/scanner/sendAlive', function(req, res, next) {
  scanner.sendAlive(req, res);
});
router.post('/scanner/sendSignal', function(req, res, next) {
  scanner.sendSignal(req, res);
});

module.exports = router;
