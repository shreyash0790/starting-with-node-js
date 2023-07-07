
const express=require('express');

const app=express();


app.use(express.urlencoded({extended:false}));

app.use('/add-prod',(req,res,next)=>{
res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">add product</button></form>')
});

app.post('/product',(req,res,next)=>{
  console.log(req.body);
  res.redirect('/');
});


app.use('/',(req,res,next)=>{
  res.send('<h1>hello from express</h1>');
});

app.listen(4000);





 