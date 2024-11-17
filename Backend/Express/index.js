const express = require('express')
const app = express()
 let port=2000;
 app.listen(port,()=>{
    console.log("server is ON ");
    
 })
//  app.use((req,res)=>{
//    let code ="<h1>hello</h1> <ul><li>apple</li><li>apple</li><li>apple</li></ul>"
//    res.send(code);
//    console.log("request received");
   
//  })
app.get("/",(req,res)=>{
  res.send("you are contacted root path")

})
app.get("/help",(req,res)=>{
  res.send("you are contacted help path")

})
app.get("/apple",(req,res)=>{
  res.send("you are contacted app path")

})
app.get("/apple",(req,res)=>{
  res.send("you are contacted orange path")

})

