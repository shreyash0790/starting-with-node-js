const path=require('path');
const express = require('express');
const fs=require('fs');
const router = express.Router();
const rootdir=require('../util/path')

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','admin.html'))
});



router.post('/mess', (req, res, next) => {
    console.log(req.body);
    if(req.body.messages){
    fs.appendFile("user.txt",`${req.body.username}:${req.body.messages}\n`,(err)=>err?console.log(err):res.redirect('/'))
    }
    else{
    res.redirect('/');
    }
});



module.exports=router;