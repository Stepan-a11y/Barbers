const express = require('express');
const router = express.Router();
const conDB = require('../conDB');
const Orders = require('../schemas/orders');


router.post( '/neworder', (req, res) => {
        let newOrder = new Orders({
            userName: req.body.userName,
            email: req.body.email,
            masterName: req.body.masterName,
            serviceName: req.body.serviceName,
            date: req.body.orderDate
        });
        
        try {
            newOrder.save();
            res.json({success: true, msg: "add successful"});
            
        }
        catch (err) {
        res.json({success: false, msg: "not add"});
        }

    
});


module.exports = router;