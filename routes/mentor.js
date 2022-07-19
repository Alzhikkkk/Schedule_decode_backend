const express = require('express');
const router = express.Router();

const {getMentors , createMentor , updateMentor , deleteMentor} = require('../controllers/mentor.controller');

router.get('/api/mentors' , getMentors)

router.post('/api/mentors' , async(req , res) => {
    try{
        const mentor = await createMentor(req.body)
        res.status(200).send(mentor)
    }catch(error){
        res.status(400).send(error)
    }
})
router.put('/api/mentors' , async(req , res) => {
    try{
        const mentor = await updateMentor(req.body)
        res.status(200).send(mentor)
    }catch(error){
        res.status(400).send(error)
    }
})
router.delete('/api/mentors/:id' , async(req , res) => {
    try{
        await deleteMentor(req.params.id)
        res.status(200).end()
    }catch(error){
        res.status(400).send(error)
    }
})
module.exports = router
