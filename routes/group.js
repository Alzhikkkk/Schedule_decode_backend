const express = require('express');
const router = express.Router();
const {isEmpty} = require('../utils/is-empty');
const {createGroup , deleteGroup , updateGroup, getActiveGroups, getGroups} = require('../controllers/group.controller');
const {createGroupValidtor} = require('../validations/groupValidations');


router.post('/api/groups' , async (req , res) => {
    const errors = createGroupValidtor(req.body)
    if(isEmpty(errors)){
        try{
            const group = await createGroup(req.body)
            res.status(200).send(group)
        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }
})

router.get('/api/groups', getGroups)


router.delete('/api/groups/:id' , async (req , res) => {
    try{
        await deleteGroup(req.params.id)
        res.status(200).end()
    }catch(error){
        res.status(400).send(error)
    }
})

router.put('/api/groups' , async(req , res) => {
    try{
        const group = await updateGroup(req.body)
        res.status(200).send(group)
    }catch(error){
        res.status(400).send(error)
    }
})


router.get('/api/groups/filter/active' , async (req , res) => {
    try{
        const groups = await getActiveGroups()
        res.status(200).send(groups)
    }catch(e){
        res.status(500).send(e)
    }
})


module.exports = router