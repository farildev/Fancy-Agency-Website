AOS.init();

window.addEventListener('scroll' , function(){
    let header = document.querySelector('.header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active' , windowPosition);
})

const menuBtn = document.querySelector('.menu__btn');
const mobileNav = document.querySelector('.nav__mobile');

menuBtn.addEventListener('click' , function () {
    menuBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
    
})

const searchBar = document.querySelector('.searchbar');
const searchIcon = document.querySelector('#search-icon');
const closeIcon = document.querySelector('#close-icon')
const navSearch = document.querySelector('#nav-search');

searchIcon.addEventListener('click' , function () {
    searchBar.style.display = "block";
    e.preventDefault();
})

closeIcon.addEventListener('click', function() {
    searchBar.style.display = "none";
})

