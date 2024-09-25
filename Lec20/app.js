const arr=[];
arr.push(2)
arr.push(2)
arr.push(2)
arr.push(2)
arr.push(2)
arr.push(2)
let arr1=[2,3,4,5,6];
// let arr2=arr.slice(0)
// arr.push(7);
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
let arr2=[...arr,...arr1]//sprade operator 
console.log(arr2)
arr.push("hello")
 arr2=[...arr,...arr1]//sprade operator 
console.log(arr2);
let arr3=arr.concat(arr1);
console.log(arr3);
