const express = require('express');
const router = express.Router();
const {createAdmin, login} = require('../controllers/user.controller')

createAdmin();

router.post('/api/signin', async (req, res) => {
     console.log(req.headers)
     const token = await login({email:req.body.email, password: req.body.password})
     if(token){
        res.status(200).send({token})
     }else{
        res.status(401).end();
     }
})

module.exports = router