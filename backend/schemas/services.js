const mongoose = require('mongoose');
const conDB = require('../conDB');

const ServiceShema = mongoose.Schema({
    name: {
      type: String,
      required: true
      },
    price: {
      type: String,
      required: true
      },
    about: {
      type: String,
      required: true
      }});
  
  const Services = module.exports = mongoose.model('Services', ServiceShema);