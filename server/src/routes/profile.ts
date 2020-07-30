export {}; // Needed otherwise transpiler will complain about 'cannot redeclare variable'
const express = require('express');
const router = express.Router();
const { checkAuthenticated } = require('../middleware/authentication');
const profileController = require('../controllers/profile');

router.get('/get', checkAuthenticated, profileController.get);

module.exports = router;
