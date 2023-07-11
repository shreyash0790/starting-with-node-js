const path=require('path');
const express=require('express');

const app=express();
const adminroutes=require('./routes/admin');
const deafultroutes=require('./routes/default');
const errorcontrol=require('./controllers/error');

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use(adminroutes);
app.use(deafultroutes);
app.use(errorcontrol.get404);

app.listen(4000);





 