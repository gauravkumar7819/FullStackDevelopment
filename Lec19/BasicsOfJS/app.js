let c="hbh";
console.log(typeof(c))
let b=29;
console.log(typeof(b));
console.log(typeof(true));
let salary;
console.log(typeof(salary));
var id=null;
console.log(typeof(id));
// BigInt-> 128bit 

let value=BigInt("7686858578347583789576857658975389768735789567589675896757");

console.log(typeof(value),value);

// primitive-> const,let,var
// but non-primotive-> const

const arr=[];
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);
const arr1=[1,"abcd",true.null,arr];
// const nums=[];
// nums=arr1;
// console.log(nums);
// five method of Array
// push(),pop(),shift,unshift(),slice(),splice();

// console.log(slice((arr.length/2)-1,arr.length/2))
const f =[1,2,3,4,5];
f.splice(3,1);
//splice(start,delete,add element)
console.log(f);
console.log(f.indexOf(4));
console.log(f.findIndexOf(3));
// console.log(f.firstIndexOf(5));
console.log(f.lastIndexOf(3));

