// ==========================dark theme ======================//
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//previously selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  document.body.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);


  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

console.log("THEME SETTING IS WORKING");


/*========================menu show and hidden=========================================*/
const navMenu = document.getElementById('nav-menu')
const  navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
}

console.log('menu y setting working');


// ======================REMOVE MENU PROFILE=========================
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')

}
navLink.forEach(n=>n.addEventListener('click',linkAction))
console.log('remove menu profile is working');



// typewriter effect
// import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Bharat Panwar', 'Web-developer','MERN-developer'],
  autoStart: true,
  loop:true,
  cursor:"|"
});
console.log(`typewriter effect is working`);