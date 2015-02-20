var express = require('express');
var router = express.Router();
var plim = require('../plim.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  devices = plim.loadDevices();
  res.render('index', { title: 'Plim', devices: devices });
});

/* POST Device Toggle */
router.post('/device/:did/toggle', function(req, res, next) {
  device = plim.toggleOn(req.params.did);
  res.json(device);
});

module.exports = router;
