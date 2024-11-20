// const { faker, ar } = require('@faker-js/faker');
// const mysql = require('mysql2');
// let createRandomUserfunction =()=> {
//     return [
//       userId=faker.string.uuid(),
//       username=faker.internet.username(), // before version 9.1.0, use userName()
//     //   email: faker.internet.email(),
//     //   avatar: faker.image.avatar(),
//       password= faker.internet.password(),
//     //   birthdate: faker.date.birthdate(),
//     //   registeredAt: faker.date.past(),
//     ];
//   }
//   let arr=[];

//   for (let i = 0; i <100; i++) {
//    arr.push(createRandomUserfunction());
    
//   }
// //   for (const i of arr) {
// //     console.log(i);
    
// //   }
// console.log(arr);

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'hari',
//     password:"gaurav@82"
//   });

//   let qu="insert into krishna (id ,name,password) values ?";
//   let user=[[23,"hari","@123"],[24,"hari","@123"],[26,"hari","@123"]
// ];
//   try{
//   connection.query(
//   qu,[arr], (err, results) =>{
//         if(err){ throw err;}
//       console.log(results);
//     }
//   );}
//   catch(err){
//     console.log(err);
    
//   }
//   connection.end();




const path=require("path");



const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql2');
const port=3000;
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

 app.set("view engine","ejs");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hari',
    password:"gaurav@82"
  });

app.get("/",(req,res)=>{
  let q="select count(*) from krishna";
    try{
  connection.query(
  q, (err, results) =>{
        if(err){ throw err;}    
let que=results[0]["count(*)"];
  res.render("home.ejs",{que});});}
  catch(err){
    res.send("some error"); }
  // connection.end();
  // res.send("this is home page")
})

app.get("/user",(req,res)=>{
  let q=`select * from krishna`;
    try{
  connection.query(q,(err, results) =>{
        if(err){ throw err;}    
// let que=results[0]["count(*)"];
  res.render("showuser.ejs",{results})});}
  catch(err){
    res.send("some error"); }
  // connection.end();
  // res.send("this is home page")
})
app.listen(port,(req,res)=>{
  console.log("app is listen");
  
})