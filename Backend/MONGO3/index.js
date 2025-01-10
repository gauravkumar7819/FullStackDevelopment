const express =require("express");
const app=express();
const mongoose=require("mongoose");
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsApp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().then(()=>{
    console.log("connection successful");
       
}).catch((err) => console.log(err));

// app.get("/",(req,res)=>{

//      res.send("App is listening")
    
// })
// app.get("/home",(req,res)=>{

//      res.send("App is listening home")
    
// })
// const port=3000;
// app.listen(port,()=>{
//     console.log("server is listening");
    
// })