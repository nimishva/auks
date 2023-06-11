const express = require('express');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.use('/user', require('./userRoute'));
router.use('/studio', /* validateToken ,*/  require('./studioRoute'));
router.use('/service', /* validateToken ,*/  require('./serviceRoute'));
router.use('/service-request', /* validateToken ,*/  require('./serviceRequestRoute'));


module.exports = router;