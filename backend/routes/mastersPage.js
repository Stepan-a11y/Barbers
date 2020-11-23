  
const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const Masters = require('../schemas/masters');

//Попытка отобразить список студентов из базы на странице


router.get('/masters', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
     Masters.find({}, (err, masters) => {
       if(err) throw err;
       return res.send(masters)/*status(200).json({
         status:'success',
         masters: masters
       })*/
     });
});



module.exports = router;