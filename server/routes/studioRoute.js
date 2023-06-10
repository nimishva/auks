const express = require('express');
const { createStudio, getStudio, updateStudio, deleteStudio } = require('../controllers/studioController');
const validateToken = require('../middlewares/validateToken');


const router = express.Router();



router.post('/create', (req, res, next) => {
    if (!['admin', 'employee'].includes(req.user.roleName)) {
        res.status(403);
        throw new Error("user is not authorised");
    }
    next()
}, createStudio);
router.get('/', validateToken, getStudio);
router.route('/:id').get(getStudio).put(updateStudio).delete(deleteStudio);


module.exports = router;        