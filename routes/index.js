var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("gd");
  res.render('index', { title: 'Express!', time: Date() });
});
router.get('/test', function(req, res, next) {
  var post = req.body;
  res.render('sendAlive', { title: 'test',scid: post.scid, time: Date() });
});
router.post('/scanner/sendAlive', function(req, res, next) {
  var post = req.body;
  res.render('sendAlive', { title: 'sendAlive', scid: post.scid, time: Date()});
});
router.post('/scanner/sendSignal', function(req, res, next) {
  var post = req.body;
  res.render('sendSignal', { title: 'sendSignal', scid: post[0].scid, time: Date()});
});
module.exports = router;
