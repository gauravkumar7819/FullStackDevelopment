const express=require("express");
const app=express(); 
const productRouter=require("./routes/product.js");
const userRouter=require("./routes/user.js");
app.set("view engine","ejs");
app.set("views","./views");   
//next mathod is used to pass the control to the next middleware
function cb1(req,res,next){ 
    console.log("cb1 is called");
    next();
    
}
let person={
    name:"John",
    age:25
}   
app.get('/home',(req,res,next)=>{
    res.render('home',person);
    
})
app.use("/c1",cb1);

//Application level middleware


app.use(productRouter);
app.use(userRouter);
app.get("/",(req,res)=>{
//root level middleware
// app.use("/p1",productRouter);
// app.use("/u1",userRouter);
res.send("App is listening on port 3000");
})  
app.listen(3000,()=>{
console.log("Server is listening");
})                                 