const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const User = require('../schemas/users');
const jwt = require('jsonwebtoken');
const middleware = require('../middleware/middleware')


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

      const user = User.findOne({email}, (err, user) => {
        if(err) throw err;
        if(!user)
          return res.json({success: false, msg: "user not found"});

    User.compPass(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
          const token = jwt.sign({id: user.id}, conDB.secret, {
            expiresIn: 3600
          });

         return res.json({
              success: true,
              token: token,
              user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
              }
            });

          } else
    return res.json({success: false, msg: "Неверный пароль!"});
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


router.get('/auth', middleware, 
    async (req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'origin, Content-Type, accept', 'Authorization');
        
        try {
          const user = await User.findOne({_id: req.user.id})
          const token = jwt.sign({id: user.id}, conDB.secret, {
            expiresIn: 3600
          });
          return res.json({
            success: true,
            token: token,
            user: {
              id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }
          });
        } catch {
           res.sendStatus(403);
        }
});


module.exports = router;