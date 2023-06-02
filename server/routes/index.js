const express = require('express');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.use('/user', require('./userRoute'));
router.use('/studio', /* validateToken ,*/  require('./studioRoute'));
router.use('/service', /* validateToken ,*/  require('./serviceRoute'));


module.exports = router;