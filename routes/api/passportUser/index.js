const router = require('express').Router();
const passportUser = require('./passportuser');

//Passport routes
router.use('/user', passportUser);

module.exports = router;
