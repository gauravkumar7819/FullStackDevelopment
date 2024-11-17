const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hari',
    password:"gaurav@82"
  });
  try{
  connection.query(
    'select * from shyam', (err, results) =>{
        if(err){ throw err;}
      console.log(results);
    }
  );}
  catch(err){
    console.log(err);
    
  }
  connection.end();
// let createRandomUserfunction =()=> {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }
// console.log(createRandomUserfunction());
