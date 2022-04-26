const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.querySelector("body");
const logo = document.querySelector(".logo-link");
const backgroundNav = document.querySelector(".nav-background");
const hamburgerLine = document.querySelector(".hamburger__line");


if (hamburger){
    hamburger.addEventListener("click",function (e){
        body.classList.toggle("active_nav");
        hamburger.classList.toggle("active_nav");
        nav.classList.toggle("active_nav");
        logo.classList.toggle("active_nav");
        backgroundNav.classList.toggle("active_nav");
    })
}

if (nav){
    nav.addEventListener("click",function (e){
        document.body.classList.remove("active_nav");
        hamburger.classList.remove("active_nav");
        nav.classList.remove("active_nav");
        logo.classList.remove("active_nav");
        backgroundNav.classList.remove("active_nav");
    })
}
if(backgroundNav){
    backgroundNav.addEventListener("click", function (e){
        document.body.classList.remove("active_nav");
        hamburger.classList.remove("active_nav");
        nav.classList.remove("active_nav");
        logo.classList.remove("active_nav");
        backgroundNav.classList.remove("active_nav");  
    })
}
