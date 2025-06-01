const data=require('../model/model');

const search=(req,res)=>{
    const query=req.query.q.toLowerCase();
    if(!query){
        res.status(400).json({Error:"naime sorry"})
    }

    const result=data.filter(item=>item.name.toLowerCase().includes(query)||
    item.des.toLowerCase().includes(query))
    res.json(result)
};

module.exports=search;