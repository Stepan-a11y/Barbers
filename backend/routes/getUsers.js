const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const User = require('../schemas/users');

router.get('/getusers', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        User.find({}, (err, users) => {
         if(err) throw err;
         return res.send(users)
       });
  });


  module.exports = router;