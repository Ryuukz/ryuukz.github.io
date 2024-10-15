// Initialize Typed.js
var typed = new Typed('#text', {
    strings: ['Data Analyst!', 'German Speaker!', 'Machine Learning Enthusiast!'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

// SHOW SKILLS
let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click', () => {
    skillDet.classList.toggle('show_skills');
});

// STICKY NAV
let nav = document.querySelector('nav'); // Fixed 'querySelecetor' to 'querySelector'

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('sticky_nav');
    } else {
        nav.classList.remove('sticky_nav');
    }
});

// TESTIMONIAL SWIPER SLIDER
var swiper = new Swiper('.testSwiper', { // Added '.' to reference the class
    slidesPerView: 1, // Fixed 'slidePerView' to 'slidesPerView'
    loop: true,
    autoplay: {
        delay: 3000, // Added delay to autoplay configuration
        disableOnInteraction: false,
    },
});
