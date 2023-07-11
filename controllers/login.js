const rootdir=require('../util/path')
const path=require('path');
const fs=require('fs');
const mod=require('../models/login');

exports.login=(req, res, next) => {
    res.sendFile(path.join(rootdir,'views','admin.html'))
}


exports.loginpost=(req, res, next) => {
    const model=new mod(req.body.username,req.body.messages)
    model.save();
    if(req.body.messages){
    fs.appendFile("user.txt",`${req.body.username}:${req.body.messages}\n`,(err)=>err?console.log(err):res.redirect('/'))
    }
    else{
    res.redirect('/');
    }
}

exports.mess=(req, res, next) => {
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
  }

  exports.contact=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contact.html'))
}

  exports.fpage=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','fpage.html'))
}