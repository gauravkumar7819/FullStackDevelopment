// Promise
let p=new Promise((resolve,reject)=>{
    let a=20;
    let b=30;
    if((a+b)>55){
        return resolve(a+b);
    }
    else{
        return reject("sum of a & b is less than 55")
    }
})
p.then((res)=>{
    console.log(res);
    

}).catch((err)=>{
    console.log(err);
    

})