const express = require('express');
const router = express.Router();
const {isAuth} = require('../middlewares/auth.middlewares')

const {getMentors , createMentor , updateMentor , deleteMentor} = require('../controllers/mentor.controller');

router.get('/api/mentors' , getMentors)

router.post('/api/mentors', isAuth,  async(req , res) => {
    try{
        const mentor = await createMentor(req.body)
        res.status(200).send(mentor)
    }catch(error){
        res.status(400).send(error)
    }
})
router.put('/api/mentors', isAuth, async(req , res) => {
    try{
        const mentor = await updateMentor(req.body)
        res.status(200).send(mentor)
    }catch(error){
        res.status(400).send(error)
    }
})
router.delete('/api/mentors/:id', isAuth, async(req , res) => {
    try{
        await deleteMentor(req.params.id)
        res.status(200).end()
    }catch(error){
        res.status(400).send(error)
    }
})
module.exports = router
