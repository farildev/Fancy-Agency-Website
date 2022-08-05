AOS.init();

window.addEventListener('scroll' , function(){
    let header = document.querySelector('.header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active' , windowPosition);
})

const navMenu = document.querySelector('.toggle__menu');
navMenu.addEventListener('click', function(e){
    navMenu.classList.toggle('active')
});
