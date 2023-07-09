const express = require('express');
const fs=require('fs');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/mess" method="POST">
	<input id="username" type="text" name="username"><br>
	<button type="submit">LOGIN</button></form>`);
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

router.get('/',(req,res,next)=>{
    fs.readFile('user.txt',(err,data)=>{
if(err){
    console.log(err);
    data="No chat exists"
}
res.send(`
    ${data}<form action="/mess" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type="text" id="messages" name="messages">
        <input type="hidden" id="username" name="username"><br>
        <button type="submit">SEND</button>
    </form>
`);
 
  });
})

module.exports=router;