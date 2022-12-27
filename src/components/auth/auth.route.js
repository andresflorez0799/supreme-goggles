const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const middleware = require('../../network/middleware');

//.. invoke login request, return data for future request.
router.post('/login', middleware.checkOrigin, controller.login);

router.post('/validate', middleware.checkOrigin, controller.validate);

//... Export module login
module.exports = router;
