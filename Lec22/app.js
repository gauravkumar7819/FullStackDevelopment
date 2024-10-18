// function fun1(){
// let a=10;
// let b=20;
// function fun2() {
//     return a+b;
// }
// return fun2;
// }
// fun1();

// let person={
//     name:"Gaurav",
//     age:"20"
// }
// for (let key in person) {
//     console.log(key);
    
// }

let arr=[15,19,20,22,18,13,16,11];
// function fun1(item){
//     return item*3;

// }
// let newarr=arr.map(fun1);
// let newarr=arr.map(item=>item*4); //ES6
// console.log(newarr);

// let newarr=arr.filter(item=>item%2);//oddelement


// console.log(newarr);

// let newarr=arr.reduce((acc,cava)=>{
    //     acc=acc+cava;
    //     return acc;
    // },100)
    // console.log(newarr);
    
    // let newarr=arr.forEach((item)=>item*2);
    // console.log(arr);
    

    //
    // let newarr=arr.filter(item=>item%2==0);//oddelement
    // let p=newarr.map((item=>item*2));

    // let k=arr.reduce((acc,cava)=>{
    //         acc=acc+cava;
    //         return acc;
    //     },0)
    //     console.log(k);
    // console.log(p);

    let ans=arr.filter((item)=>{
        return item*2==0;
    }).map((item)=>{
        return item*2;

    }).reduce((acc,calval)=>{
        acc=acc+calval;
        return acc;
    })
    console.log(ans);
    
    