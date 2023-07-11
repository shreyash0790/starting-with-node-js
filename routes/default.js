const express = require('express');
const path=require('path');
const fs=require('fs');
const { Console } = require('console');
const router = express.Router();
const rootdir=require('../util/path')

router.get('/', (req, res, next) => {
    fs.readFile('user.txt', 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
        data = "No chat exists";
      }
      fs.readFile(path.join(__dirname, '../views/default.html'), 'utf-8', (err, htmlContent) => {
        if (err) {
          console.log(err);
          return res.status(500).send('Error reading HTML file');
        }
        const lines = data.split('\n'); // Split data into lines
        let modifiedContent = htmlContent;
  
        const formClosingTag = '</form>';
        const formClosingTagIndex = modifiedContent.indexOf(formClosingTag);
  
        // Construct modified content with each line on a new line
        let appendedData = '';
        lines.forEach(line => {
          appendedData += line.trim() + '<br>';
        });
  
        modifiedContent = modifiedContent.slice(0, formClosingTagIndex) + '<br>' + appendedData + modifiedContent.slice(formClosingTagIndex);
      
      res.send(modifiedContent);
    });
    });
  });
  




router.get('/contact',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
})

router.get('/fpage',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','fpage.html'))
})






module.exports=router;