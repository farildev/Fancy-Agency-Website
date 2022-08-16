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
    console.log("clicked button");
    searchBar.style.display = "block";
})

closeIcon.addEventListener('click', function() {
    
})

