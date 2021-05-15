const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const conDB = require('./conDB');


const serv = express();
const port = 3001;
const masters = require('./routes/mastersPage')
const services = require('./routes/servicesPage')
const auth = require('./routes/auth')
const newOrders = require('./routes/newOrders')
const getOrders = require('./routes/getOrders')
const delorders = require('./routes/getOrders')
const registration = require('./routes/auth')
const getUsers = require('./routes/getUsers')
const updUsers = require('./routes/getUsers')

serv.use(cors());
serv.use(bodyParser.json());
serv.use('/api', masters)
serv.use('/api', services)
serv.use('/api', auth) 
serv.use('/api', newOrders) 
serv.use('/api', getOrders)
serv.use('/api', delorders)
serv.use('/api', registration)
serv.use('/api', getUsers)
serv.use('/api', updUsers)




serv.listen(port, ()=>{
    console.log("connected");
});





mongoose.connect(conDB.barber, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
    console.log("sucsses");
});

mongoose.connection.on('error', (err) => {
    console.log("not sucsses" + err);
});

  