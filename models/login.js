const fs=require('fs');
const path=require('path')
const rootdir=require('../util/path');

const messagess=[];
module.exports=class Chat{
    constructor(t,m){
        this.username=t;
        this.messages=m
    }

    save(){
       const p= path.join(rootdir,'data','messages');
       messagess.push(this);
       const dataToWrite = JSON.stringify(messagess);
       fs.writeFile(p, `${dataToWrite}\n`, (err) => {
         if (err) {
           console.log(err);
         } else {
           console.log("Data written to file successfully.");
         }
       });
       
    }
    static fetchAll(){
       
    }
};
