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

//Handle click on the "arrow up" button
const arrowUpBtn = document.querySelector('.arrowUp');
arrowUpBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});
//Show "arrow up" button when scrolling down
document.addEventListener('scroll',() => {
    if(home.style.opacity < 0){
        arrowUpBtn.classList.add('visible'); //엘리
        /*arrowUpBtn.style.pointerEvents = 'auto';
        arrowUpBtn.style.opacity = 1; */ //내가 한 방식
    } else {
        arrowUpBtn.classList.remove('visible'); //엘리
        /*arrowUpBtn.style.pointerEvents = 'none';
        arrowUpBtn.style.opacity = 0; */ //내가 한 방식
    }
});


//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter; //숫자가 눌렸을때는 parentNode 인 버튼을 사용
    if(filter == null) {
        return;
    }

    //Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');    
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector); 
    scrollTo.scrollIntoView({behavior: 'smooth'});
}


