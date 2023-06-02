const express = require('express')
const { createService, getService, updateService, deleteService } = require('../controllers/serviceController')
const router = express.Router()


router.get('/', getService);
router.route('/:id').get(getService).put(updateService).delete(deleteService);
router.post('/create', createService)

module.exports = router;

