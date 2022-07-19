const express = require('express');
const router = express.Router();
const {getLessons} = require('../controllers/lesson_in_week.controller')
const {getBusyInWeek} = require('../controllers/busy_in_week.controller')
const {getMentorsByName} = require('../controllers/mentor.controller')
const {getGroupsByName} = require('../controllers/group.controller')
const {getRoomsByName} = require('../controllers/room.controller')
router.get('/api/search' , async(req , res) => {
    const key = Object.keys(req.query)[0];
    const value = req.query[key];

    if(value && value.length > 0 &&  (key === 'group_id' || key === 'mentor_id' || key === 'room_id')){
        let list = await getLessons(key , value, req.query.start, req.query.end)
        if(key === 'mentor_id' ){
           const busyInWeek = await getBusyInWeek(value)
           list = list.concat(busyInWeek)
        }
        res.status(200).send(list)
    }else{
        res.status(200).send([])
    }
})

router.get('/api/search/:key' , async(req , res) => {
    const mentors = await getMentorsByName(req.params.key)
    const groups = await getGroupsByName(req.params.key)
    const rooms = await getRoomsByName(req.params.key)
    res.status(200).send({
        mentors,
        groups,
        rooms
    })
})

module.exports = router
