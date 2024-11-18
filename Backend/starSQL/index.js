const { faker, ar } = require('@faker-js/faker');
const mysql = require('mysql2');
let createRandomUserfunction =()=> {
    return [
      userId=faker.string.uuid(),
      username=faker.internet.username(), // before version 9.1.0, use userName()
    //   email: faker.internet.email(),
    //   avatar: faker.image.avatar(),
      password= faker.internet.password(),
    //   birthdate: faker.date.birthdate(),
    //   registeredAt: faker.date.past(),
    ];
  }
  let arr=[];

  for (let i = 0; i <100; i++) {
   arr.push(createRandomUserfunction());
    
  }
//   for (const i of arr) {
//     console.log(i);
    
//   }
console.log(arr);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hari',
    password:"gaurav@82"
  });

  let qu="insert into krishna (id ,name,password) values ?";
  let user=[[23,"hari","@123"],[24,"hari","@123"],[26,"hari","@123"]
];
  try{
  connection.query(
  qu,[arr], (err, results) =>{
        if(err){ throw err;}
      console.log(results);
    }
  );}
  catch(err){
    console.log(err);
    
  }
  connection.end();




  