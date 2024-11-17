const express=require("express")
 const app=express();
 const port=2000;
// const path=require("path");
 app.set("view engine","ejs");
//  app.set("view",path.join(__dirname,"view"))
 app.get("/",(req,res)=>{
   res.render("home.ejs")
 });
 app.listen(port,()=>{
    console.log(`listening port:${port}`);
    
 }) 