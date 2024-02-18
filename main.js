const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const second = document.getElementById('second');
const hero = document.getElementsByClassName('hero')

setInterval(()=>{
  let currentTime = new Date();
  hours.innerHTML = (currentTime.getHours() < 10? "0" : "") + currentTime.getHours();
  minutes.innerHTML = (currentTime.getMinutes() < 10? "0" : "") + currentTime.getMinutes();
  second.innerHTML = (currentTime.getSeconds() < 10? "0" : "") + currentTime.getSeconds();
  if(second.innerHTML >= 30){
    document.body.style.background =  'linear-gradient(45deg, #08001f, #19697d )';
;
  }else{
    document.body.style.background = '  linear-gradient(45deg, #c8b6ff, #ffcef4 )';


  }
},1000);
