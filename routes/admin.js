const express = require('express');
const router = express.Router();
const logincontroller=require('../controllers/login')

router.get('/login',logincontroller.login);

router.post('/mess',logincontroller.loginpost);

module.exports=router;