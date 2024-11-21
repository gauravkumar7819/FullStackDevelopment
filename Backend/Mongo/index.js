const mongoose = require('mongoose');
 
main().then((res)=>{
    console.log("connection successful");
    
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
} )
const User=mongoose.model("User",userSchema);
const use1=new User({
name:"Ram",
email:"gauravkumar@gmail.com",
age:20, 
})
const use2=new User({
name:"aman",
email:"gauravkumar@gmail.com",
age:20, 
})
use1.save(); 
use2.save().then((res)=>{
    console.log(res,"sloved");
    
}).catch((err)=>{
    console.log(err);
    
})