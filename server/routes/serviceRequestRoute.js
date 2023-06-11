const express = require('express');
const { createServiceRequest, updateServiceRequest } = require('../controllers/serviceRequestController');
const router = express.Router();


router.post('/create', createServiceRequest)
router.put('/:id', updateServiceRequest);


module.exports = router;



