const express = require('express');
const path=require('path');
const fs=require('fs');
const router = express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('user.txt',(err,data)=>{
if(err){
    console.log(err);
    data="No chat exists"
}
fs.readFile(path.join(__dirname, '../views/default.html'), 'utf-8', (err, htmlContent) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error reading HTML file');
    }
    const combinedContent = `${data}\n\n${htmlContent}`;
    res.send(combinedContent);
  });
})
})




router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'))
})

router.get('/fpage',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','fpage.html'))
})






module.exports=router;