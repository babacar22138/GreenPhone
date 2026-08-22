const burgerBtn = document.getElementById('burger');
const menu_nav = document.querySelector('.menu-nav');
const overlay = document.querySelector('.overlay');

console.log(burgerBtn, menu_nav, overlay);

burgerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu_nav.classList.toggle('visible');
    burgerBtn.classList.toggle('burger-deplace');
    overlay.classList.toggle('overlay-visible');
});

overlay.addEventListener('click', function(e) {
    e.preventDefault();
    menu_nav.classList.remove('visible');
    burgerBtn.classList.remove('burger-deplace');
    overlay.classList.remove('overlay-visible');
})