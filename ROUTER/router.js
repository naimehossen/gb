const express=require('express')
const router=express.Router();
const path=require('path')

const search = require('../controller/controller');


router.get('/api/search',search)

router.get('/naim',(req,res)=>{
    res.sendFile(path.join(__dirname+'/../public/img/n.jpg'))
})

router.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname+'/../public/index.html'))
})

router.get('/sabbir',(req,res)=>{
    res.sendFile(path.join(__dirname+"/../public/img/s.jpg" ))
})





module.exports=router;