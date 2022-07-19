const express = require('express');
const router = express.Router();
const {getRooms} = require('../controllers/room.controller')

router.get('/api/rooms', async (req, res) => {
    try {
        const rooms = await getRooms();
        res.status(200).send(rooms)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router