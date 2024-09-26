let person= {
name:"Gaurav",
age:"20",
job:function () {
    console.log("Bilkul lagegi");
    
}

}
person.greeting=function(){
    console.log("hi");
}
Object.freeze(person);
console.log(person.job())
console.log(person.greeting())