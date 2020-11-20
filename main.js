'use strict';

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {  
    scrollIntoView('#contact');
});

//Handle click on logo button on navbar
const navbarLogoBtn = document.querySelector('.navbar__logo button');
navbarLogoBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

//Transparent home
//home을 점점 투명하게
//solution - 홈의 y 크기와 스크롤을 비교해서 스크롤-홈y크기 가 작아질수록 
//opacity를 작게 만든다.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Transparent home Contact me button
document.addEventListener('scroll', () => {
    homeContactBtn.style.opacity = home.style.opacity;
});

homeContactBtn.addEventListener('mouseenter', () => {
    homeContactBtn.style.opacity = 1;
});

homeContactBtn.addEventListener('mouseleave', () => {
    homeContactBtn.style.opacity = home.style.opacity;
});




function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector); 
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


