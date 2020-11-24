const mongoose = require('mongoose');
const conDB = require('../conDB');

const MasterShema = mongoose.Schema({
    avatar: {
        type: String,
        required: true
      },
    firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  masterOf: {
    type: String,
    required: true
  }});
  
  const Masters = module.exports = mongoose.model('Masters', MasterShema);



