//Map->collection of key value pair
let person= {
fullname:"shiv",
project:{name:'automatic'},
  age:24,
  id:578765
}
console.log(person.project.name)//chaining
console.log(person["age"])
for (let key in person) {
    console.log(key);
    console.log(person[key]);
    console.log(person);
   
}

