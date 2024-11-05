function random() {
    let a=Math.floor((Math.random()*255)+1);
let b=Math.floor((Math.random()*255)+1);
let c=Math.floor((Math.random()*255)+1);

return `rgb(${a},${b},${c})`;
    
}
let btn=document.querySelector(".btn");
// let main=document.querySelector(".container");
btn.addEventListener('click',()=>{
    let a=Math.floor((Math.random()*255)+1);
    let b=Math.floor((Math.random()*255)+1);
    let c=Math.floor((Math.random()*255)+1);
    
     document.querySelector(".container").style.backgroundColor= `rgb(${a},${b},${c})`;
});
