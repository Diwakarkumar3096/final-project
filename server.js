const express=require("express");
const path = require("path");

const app=express();
const PORT=process.env.port || 8999;
const HOST= '0.0.0.0';
app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{
   res.send("Hello dear")

})
app.listen(PORT);
console.log('running on http://localhost:8999}')