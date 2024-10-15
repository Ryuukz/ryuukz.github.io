// Typed.js Initialization: Typing effect on the homepage
const typed = new Typed('#text', {
    strings: ['Data Analyst!', 'German Speaker!', 'Machine Learning Enthusiast!'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1500,
    startDelay: 500,
});

// Show Skills Toggle: Toggles the display of the skills section
const skillBtn = document.querySelector('.skill_btn');
const skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click', () => {
    skillDet.classList.toggle('show_skills');

    // Toggle the button text based on the skills display
    skillBtn.textContent = skillDet.classList.contains('show_skills') ? 'Hide My Skills' : 'Check My Skills';
});

// Sticky Navigation: Adds a sticky effect to the navigation bar when scrolling
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('sticky_nav');
    } else {
        nav.classList.remove('sticky_nav');
    }
});

// Swiper Slider for Testimonials
const swiper = new Swiper('.testSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Mobile Menu Toggle
const bars = document.querySelector('.bars i');
const menu = document.querySelector('nav ul');

bars.addEventListener('click', () => {
    menu.classList.toggle('show');
});
