export {}; // Needed otherwise transpiler will complain about 'cannot redeclare variable'
const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authentication');

router.post('/login', authenticationController.login);
router.post('/register', authenticationController.register);
router.post('/refresh', authenticationController.refresh);
router.get('/checkusername', authenticationController.checkUsernameExists);

module.exports = router;
