'use strict';

const header = document.querySelector('.header');
const arrow = document.querySelector('.arrow-up');
const navMenu = document.querySelector('.header-nav');
const navToggle = document.querySelector('.header-toggle');
const menuItems = document.querySelectorAll('.header-menu-item');

document.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('header-scrolled', scrolled);
    arrow.classList.toggle('visible', scrolled);
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
    }
});

const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.header-menu-item[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < bottom);
        }
    });
}

document.addEventListener('scroll', updateActiveNav);

const reveals = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .focus-card, .highlight');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});
