const express = require('express');
const { createStudio, getStudio, updateStudio, deleteStudio } = require('../controllers/studioController');
const accessAuthorisation = require('../middlewares/authorisation/adminaccess');



const router = express.Router();



router.post('/create', (req,res,next)=>{
    if(!['admin','employee'].includes(req.user.roleName)){
       res.status(403);
       throw new Error("user is not authorised");
    }
    next()
}, createStudio);
router.get('/', getStudio);
router.route('/:id').get(getStudio).put(updateStudio).delete(deleteStudio);


module.exports = router;

