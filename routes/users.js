var express = require('express');
var redis = require('redis');
var client = redis.createClient(4000);
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  client.on('connect', function() {
    res.send("Conectado");
  });

});

module.exports = router;
