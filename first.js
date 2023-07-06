const http = require('http');
const express=require('express');
const app=express();


app.use((req,res,next)=>{
console.log('in the middleware')
next();
});

app.use((req,res,next)=>{
  const nm={name:'ll' }
  console.log('in the next middleware');
  res.send(nm);
});

app.listen(3000);


 