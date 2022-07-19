const express = require('express');
const router = express.Router();

router.use(require('./mentor'));
router.use(require('./room'));
router.use(require('./course'));
router.use(require('./lesson_in_week'));
router.use(require('./busy_in_week'));
router.use(require('./group'));
router.use(require('./search'))


module.exports = router