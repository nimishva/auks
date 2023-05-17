const express = require('express');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.use('/user', require('./userRoute'))
router.use('/studio', /* validateToken ,*/  require('./studioRoute'))


module.exports = router;