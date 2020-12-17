const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const conDB = require('./conDB');

const serv = express();

const port = 3001;

const masters = require('./routes/mastersPage')
const services = require('./routes/servicesPage')

serv.use(bodyParser.json());
serv.use('/api', masters)
serv.use('/api', services)

serv.listen(port, ()=>{
    console.log("connected");
  });

  mongoose.connect(conDB.barber, { useNewUrlParser: true, useUnifiedTopology: true });

  mongoose.connection.on('connected', () => {
    console.log("sucsses");
  });

  mongoose.connection.on('error', (err) => {
    console.log("not sucsses" + err);
  });

  