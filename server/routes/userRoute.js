const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
// router.delete('/remove',removeUser);
// router.get('/get', getUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;


