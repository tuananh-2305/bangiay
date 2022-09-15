const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.admin_nav');
const main = document.querySelector('.main');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    main.classList.toggle('active');
}