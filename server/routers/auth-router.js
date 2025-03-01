const express = require('express');
const router = express.Router();
const authcontrollers = require('../controller/auth-controller');
const validate = require('../middlewares/validate-middleware');
const { signUpSchema, loginSchema, bankDetailsSchema } = require('../validators/auth-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const validateBankDetails = require('../middlewares/bankDetails-middleware');

if (!authcontrollers.addBankDetails) {
    console.error("ERROR: addBankDetails is not defined in authcontrollers.");
}

router.route('/').get(authcontrollers.home);
router.route('/register').post(validate(signUpSchema), authcontrollers.register);
router.route('/login').post(validate(loginSchema), authcontrollers.login);
router.route('/user').get(authMiddleware, authcontrollers.user);
router.route('/bankDetails').post(validateBankDetails,validate(bankDetailsSchema),authcontrollers.addBankDetails);

module.exports = router;
