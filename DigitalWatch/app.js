const clock=document.getElementById('clock');
setInterval(function () {
    let date = new Date();


  clock.innerHTML = date.toLocaleTimeString();
  clock.style.color='yellow';
  clock.style.position='relative';
  clock.style.top='50vh';
  clock.style.fontSize='1.5rem';
  
}, 1000);

