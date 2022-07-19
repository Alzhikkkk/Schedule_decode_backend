const express = require('express');
const router = express.Router();
const {getCourses} = require('../controllers/course.controller')

router.get('/api/courses', async (req, res) => {
    try {
        const courses = await getCourses();
        res.status(200).send(courses)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router