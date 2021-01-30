const jwt = require('jsonwebtoken');
const conDB = require('../conDB');


module.exports = (req, res, next) => {

    try {
    const bearerHeader = req.headers['authorization'];
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        
       if(!bearerToken) {
           return res.status(401)
       }
        const decoded = jwt.verify(bearerToken, conDB.secret);
        req.user = decoded;
        next()
    } catch(e) {
        return res.sendStatus(403);
    }
}