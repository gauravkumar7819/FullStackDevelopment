
let img=document.querySelector(".img");
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random").then((data)=>{
        return data.json();
    
    }).then((data)=>{
        console.log(data.message);
        img.setAttribute("src",data.message)
    
    })
})

