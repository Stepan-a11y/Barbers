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


router.put('/upduser', (req, res) => {
    let userId = req.body.userId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;

      User.updateOne(
          { _id: userId},
          { $set: { firstName: firstName, lastName: lastName} },
          function(err){
            if(err) 
            res.json({success: false, msg: "not upd"});
          else
            res.json({success: true, msg: "upd successful"});
          }
      )
});





  module.exports = router;


