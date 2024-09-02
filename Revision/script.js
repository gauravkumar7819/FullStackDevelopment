document.getElementById('demo').innerHTML='hello'
let a=document.getElementById('demo')
console.log(a);
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }