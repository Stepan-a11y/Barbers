const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const Orders = require('../schemas/orders');

router.get('/getorders', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        Orders.find({}, (err, orders) => {
         if(err) throw err;
         return res.send(orders)
       });
  });


  router.delete('/delorders/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        Orders.findByIdAndRemove(req.params.id, function(err,orders)
        {
            if(err) return console.log(err); 
        });

  });
  
  
  module.exports = router;