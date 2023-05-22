const button = document.querySelector(".container button");  
 const jokeDiv = document.querySelector(".container .joke p");  
 document.addEventListener("DOMContentLoaded", getJock);  
 button.addEventListener("click", getJock);  
 async function getJock() {  
  const jokeData = await fetch("https://icanhazdadjoke.com/", {  
   headers: {  
    Accept: "application/json"  
   }  
  });  
  const jokeObj = await jokeData.json();  
  jokeDiv.innerHTML = jokeObj.joke;  
  console.log(jokeData);  
}  
 
let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navber");
let scrollTop = document.querySelector("#scroll-top");

menu.onclick = () =>{
  menu.classList.toggle("fa-times");
  navber.classList.toggle("active")
}

window.onscroll = () =>{
  menu.classList.remove("fa-times");
  navber.classList.remove("active");


  if(window.scrollY > 60){
    scrollTop.classList.add("active");
  }else{
    scrollTop.classList.remove("active");
  }
}

function loader () {
  document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
  setInterval(loader , 3000)
}
window.onload = fadeOut ();