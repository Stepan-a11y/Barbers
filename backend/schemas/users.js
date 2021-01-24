const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const conDB = require('../conDB');

const UserShema = mongoose.Schema({
    firstName: {
      type: String,
      required: true
      },
    lastName: {
      type: String,
      required: true
      },
    email: {
      type: String,
      required: true
      },
    password: {
        type: String,
        required: true
    }});
  
    const User = module.exports = mongoose.model('User', UserShema);


    module.exports.getUserByLogin = (email, callback) => {
        const query = {email: email};
        User.findOne(query, callback);
     };

    module.exports.getUserById = (id, callback) => {
        User.findById(id, callback);
     };

     module.exports.compPass = (inputPassword, dbPassword, callback) => {
        bcrypt.compare(inputPassword, dbPassword, (err, isMatch) => {
          if(err) throw err;
          callback(null, isMatch);
        });
     };

     module.exports.AddUser = (newUser, callback) => {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
           newUser.password = hash;
           newUser.save(callback);
        });
      });
   };
       