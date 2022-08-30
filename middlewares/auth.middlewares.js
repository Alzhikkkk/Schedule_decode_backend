const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require('../config/config')
const {getUserById} = require('../controllers/user.controller')

const isAuth = (req, res, next) => {
    if(req.headers.authorization){
        let token = req.headers.authorization.split(" ");
        token = token[1];
        jwt.verify(token, SECRET_KEY, async (err, decoded) => {
            if(err) res.status(401).end();
                
            const user = await getUserById(decoded.id)
            req.user = user;
            next();
        })
    }else{
        res.status(401).end();
    }
     
     
}

module.exports = {
    isAuth
}