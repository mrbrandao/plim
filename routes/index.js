var express = require('express');
var router = express.Router();
var plim = require('../plim.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  devices = plim.loadDevices();
  res.render('index', { title: 'Plim', devices: devices });
});

module.exports = router;
