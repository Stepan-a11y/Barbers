const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const Masters = require('../schemas/masters');

//Запрос мастеров из базы данных

router.get('/masters', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
     Masters.find({}, (err, masters) => {
       if(err) throw err;
       return res.send(masters)
     });
});





module.exports = router;