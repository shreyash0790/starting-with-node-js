const path=require('path');
const express=require('express');

const app=express();
const adminroutes=require('./routes/admin')
const deafultroutes=require('./routes/default')

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminroutes);
app.use(deafultroutes);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000);





 