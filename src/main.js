'use strict';
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    }
    else {
        header.classList.remove('header-dark');
    }
});

const home = document.querySelector('.home-container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

const arrow = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight) {
        arrow.style.opacity = 1;
    }
    else {
        arrow.style.opacity = 0;
    }
});

const navbarmenu = document.querySelector('.header-menu');
const navbartoggle = document.querySelector('.header-toggle');

navbartoggle.addEventListener('click', () => {
    navbarmenu.classList.toggle('open');
});

navbarmenu.addEventListener('click', () => {
    navbarmenu.classList.remove('open');
})

