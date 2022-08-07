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

searchIcon.addEventListener('click' , function () {
    searchIcon.classList.toggle('active');
    searchBar.classList.toggle('active');
    e.preventDefault();
})

closeIcon.addEventListener('click', function() {
    closeIcon.classList.toggle('closed');
    searchBar.classList.toggle('closed');
})

