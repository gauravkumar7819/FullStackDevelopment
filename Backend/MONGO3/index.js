const express =require("express");
const app=express();
app.get("/",(req,res)=>{

     res.send("App is listening")
    
})
app.listen(()=>{
    console.log("server is listening");
    
})