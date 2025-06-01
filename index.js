require('dotenv').config();
const app=require('./app');
const port=process.env.PORT||4300;
app.listen(port,()=>{
    console.log(`server is running http://:localhost:${port}`)
})