const express = require('express');
const router = express.Router();
const {isEmpty} = require('../utils/is-empty');
const {createBusyInWeekValidtor} = require('../validations/busy_in_week.validations');
const {createBusyInWeek , updateBusyInWeek , deleteBusyInWeek} = require('../controllers/busy_in_week.controller');
router.post('/api/busy-in-week' , async (req , res) => {
    const errors = createBusyInWeekValidtor(req.body)
    if(isEmpty(errors)){
        try{
            let busyInWeeks = []
            await req.body.lessonInputs.forEach(async item => {
                const busy = await createBusyInWeek({
                    mentor_id: req.body.mentor_id,
                    text: req.body.text,
                    weekday: item.weekday,
                    time: item.time
                })
                await busyInWeeks.push(busy)
            }) 

            res.status(200).send(busyInWeeks)

        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }
})

router.put('/api/busy_in_week' , async(req , res) => {
        try{
            let busyInWeeks = []
            console.log(req.body)
                const busy = await updateBusyInWeek({
                    id:req.body.id,
                    mentor_id: req.body.mentor_id,
                    text: req.body.text,
                    weekday: req.body.weekday,
                    time: req.body.time
                })
            res.status(200).send(busy)
        }catch(error){
            res.status(400).send(error)
        }
})
router.delete('/api/busy_in_week/:id' , async(req , res) => {
    try{
        await deleteBusyInWeek(req.params.id)
        res.status(200).end()
    }catch(error){
        res.status(400).send(error)
    }
})


module.exports = router