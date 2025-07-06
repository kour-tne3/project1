
document.addEventListener('DOMContentLoaded', () => {
const burgerMenu = document.getElementById('burger');
const toogleMenu = document.getElementById('toogle');

burgerMenu.addEventListener('click', () => {
    toogleMenu.classList.toggle('active');
}); 
}); 