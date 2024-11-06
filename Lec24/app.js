// Promise
// let p=new Promise((resolve,reject)=>{
//     let a=20;
//     let b=30;
//     if((a+b)>55){
//         return resolve(a+b);
//     }
//     else{
//         return reject("sum of a & b is less than 55")
//     }
// })
// p.then((res)=>{
//     console.log(res);
    

// }).catch((err)=>{
//     console.log(err);
    

// // })
// // let sum=(a,b)=>{
// //     return new Promise((resolve,reject)=>{
// //         // let a=20;
// //         // let b=30;
// //         if((a+b)>5){
// //             return resolve(a+b);
// //         }
// //         else{
// //             return reject("sum of a & b is less than 55")
// //         }
// //     })
// // }
// // sum(56,56).then((res)=>{
// //     console.log(res);
    

// // }).catch((err)=>{
// //     console.log(err);
    


// // })
// // Fetch
// // fetch("https://google.com").then((res)=>{
// //     return res.json();
// // }).then((data)=>{
// //     console.log(data);
    
// // }).catch((err)=>{
// // console.log(err);
// // })
// // fetch('https://jsonplaceholder.typicode.com/posts')
// //       .then((res) =>{ return res.json()})
// //       .then((data) =>{ console.log(data)})

// let myPromise = new Promise((resolve, reject) => {
//       let success = true; // This can be any condition
//       if (success) {
//           resolve("The operation was successful!");
//       } else {
//           reject("The operation failed.");
//       }
//   });
//   myPromise.then("hi");
// let myPromise = new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve("Error loading data");
// }, 2000);
// });

// myPromise.then((message) => {
// console.log(message);
// }).catch((error) => {
// console.error(error); // Output: "Error loading data"
// });
// let p=new Promise((resolve,reject)=>{
//     let a=20;
//     let b=30;
//     if((a+b)>55){
//         return resolve(a+b);
//     }
//     else{
//         return reject("sum of a & b is less than 55")
//     }
// })
// p.then((res)=>{
//     console.log(res);
    

// }).catch((err)=>{
//     console.log(err);})
// function savetoDb(pra,success,failure) {
//     let data=Math.random()*10+1;
//     if(data>6){

//         success()
//     }
//     else{

//         failure();
//     }}
// savetoDb("this",()=>{
//     console.log("success");
//     savetoDb("hi",()=>{
//         console.log("success");
        
//     },()=>{
//         console.log("connection weak 2");
        
//     })
// },()=>{
//     console.log("connection weak");
    
// });
function savetoDb(pra) {
    return new Promise((resolve,reject)=>{

        let data=Math.random()*10+1;
        if(data>6){
            resolve("hi") }
        else{
            reject("bye");
        }})};
        savetoDb("hello").then(()=>{
            console.log("resolved");
            return savetoDb("ng").then(()=>{
                console.log("2 resolved");
                return savetoDb("hi").then(()=>{
                    console.log("has 3");
                    
                })
                
            })
            
        }).catch(()=>{
            console.log("error");
            
        })