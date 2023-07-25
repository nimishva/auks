const express = require('express');
const { registerUser, loginUser, logoutUser, updateUserName } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
// router.delete('/remove',removeUser);
// router.get('/get', getUser);
router.post('/login', loginUser);
router.post('/update/:id', updateUserName);
router.post('/logout', logoutUser);

module.exports = router;


