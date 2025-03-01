const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller');
const validate = require('../middlewares/validate-middleware');
const {signUpSchema, loginSchema} = require('../validators/auth-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.route('/').get(authcontrollers.home);
router.route('/register').post(validate(signUpSchema), authcontrollers.register);
router.route('/login').post(validate(loginSchema), authcontrollers.login);
router.route('/user').get(authMiddleware, authcontrollers.user);

module.exports = router;