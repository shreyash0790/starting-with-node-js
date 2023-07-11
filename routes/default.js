const express = require('express');
const router = express.Router();
const messagecontroller=require('../controllers/login');

router.get('/', messagecontroller.mess);

router.get('/contact',messagecontroller.contact)

router.get('/fpage',messagecontroller.fpage)

module.exports=router;