const express = require('express')
const { createService, getService, updateService, deleteService } = require('../controllers/serviceController')
const router = express.Router();
const validateToken = require('../middlewares/validateToken');



router.get('/', validateToken, getService);
router.route('/:id', validateToken).get(getService).put(updateService).delete(deleteService);

router.post('/create', validateToken, createService);
module.exports = router;