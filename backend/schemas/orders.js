const mongoose = require('mongoose');
const conDB = require('../conDB');

const OrderShema = mongoose.Schema({
    userName: {
        type: String,
        required: false
    },

    email: {
        type: String,
        requred: false
    },

    masterName: {
        type: String,
        required: false
    },

    serviceName: {
        type: String,
        requred: true
    },
    
    date: {
        type: String,
        requred: true
    },

    time: {
        type: String,
        required: true
    }
})


const Orders = module.exports = mongoose.model('Orders', OrderShema);