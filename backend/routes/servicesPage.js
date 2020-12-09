const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const Services = require('../schemas/services');

//Запрос услуг из базы данных

router.get('/services', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
     Services.find({}, (err, services) => {
       if(err) throw err;
       return res.send(services)
     });
});

module.exports = router;