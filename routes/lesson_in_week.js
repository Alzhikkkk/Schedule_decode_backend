const express = require('express');
const router = express.Router();
const {isEmpty} = require('../utils/is-empty');
const {createLessonInWeekValidtor} = require('../validations/lesson_in_week.validations')
const {createLessonInWeek , updateLessonInWeek , deleteLessonInWeek} = require('../controllers/lesson_in_week.controller');
const e = require('express');
router.post('/api/lesson-in-week' , async (req , res) => {
    const errors = 
    createLessonInWeekValidtor(req.body)
    if(isEmpty(errors)){
        try{
            let lessonsInWeek = []
            await req.body.lessonInputs.forEach(async item => {
                const lesson = await createLessonInWeek({
                    room_id: req.body.room_id,
                    course_id: req.body.course_id,
                    mentor_id: req.body.mentor_id,
                    group_id: req.body.group_id,
                    weekday: item.weekday,
                    time: item.time
                })
                await lessonsInWeek.push(lesson)
            }) 

            res.status(200).send(lessonsInWeek)

            
        }catch(e){
            console.log(e)
            res.status(500).send(e)
        }
    }else{
        res.status(400).send(errors)
    }
})


router.put('/api/lesson_in_week' , async(req , res) => {
    // const errors = createLessonInWeekValidtor(req.body)
    // if(isEmpty(errors)){
        try{
            const lesson_in_week = []
                // console.log(req.body)
                const lesson = await updateLessonInWeek({
                    id:req.body.id,
                    room_id: req.body.room_id,
                    course_id: req.body.course_id,
                    mentor_id: req.body.mentor_id,
                    group_id: req.body.group_id,
                    weekday: req.body.weekday,
                    time: req.body.time
                })
            console.log(lesson)
            res.status(200).send(lesson)
        }catch(e){
            console.log(e)
            res.status(500).send(e)
        }
    // }else{
    //     res.status(400).send(errors)
    // }
})


router.delete('/api/lesson_in_week/:id' , async(req , res) => {
    try{
        await deleteLessonInWeek(req.params.id)
        
        res.status(200).end()
    }catch(error){
        res.status(400).send(error)
    }
})



module.exports = router