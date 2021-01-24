const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const User = require('../schemas/users');
const jwt = require('jsonwebtoken');
const passport = require('passport');


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByLogin(email, (err, user) => {
      if(err) throw err;
      if(!user)
         return res.json({success: false, msg: "user not found"});

    User.compPass(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
          const token = jwt.sign(user.toJSON(), conDB.secret, {
            expiresIn: 3600 * 24
          });

          res.json({
              success: true,
              token: 'JWT' + token,
              user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              }
            });

          } else
    return res.json({success: false, msg: "password not match"});
  });
});
});




router.post('/registration', (req, res) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

  User.AddUser(newUser, (err, user) => {
       if(err)
        res.json({success: false, msg: "not add"});
      else
        res.json({success: true, msg: "add successful"});
     });
});


module.exports = router;