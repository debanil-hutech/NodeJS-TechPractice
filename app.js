const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log(req.body);
})


module.exports=app;