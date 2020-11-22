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


  /*let master = new Masters({avatar:"PHOTO", firstName:"Vladimyr", lastName:"Davidovich", masterOf:"Barber, 5 years"});

  master.save(function(err){
    mongoose.disconnect();
     
    if(err) return console.log(err);
     
    console.log("Сохранен объект user", master);
});*/
