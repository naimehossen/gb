const express=require('express');
const app=express();
const router=require('./ROUTER/router')
const bodyparser=require('body-parser');
app.use(bodyparser.json(''))
app.use(express.static('public'))
app.use(router)









module.exports=app;