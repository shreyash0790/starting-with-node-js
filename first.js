
const express=require('express');

const app=express();
const adminroutes=require('./routes/admin')
const deafultroutes=require('./routes/default')

app.use(express.urlencoded({extended:false}));

app.use(adminroutes);
app.use(deafultroutes);


app.use((req,res,next)=>{
  res.status(404).send('<h1>page not found </h1>')
})

app.listen(4000);





 