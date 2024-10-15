// Typed.js Initialization: Typing effect on the homepage
const typed = new Typed('#text', {
    strings: ['Data Analyst!', 'German Speaker!', 'Machine Learning Enthusiast!'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    backDelay: 1500, // Adding a slight delay before it loops back
    startDelay: 500, // Adds a slight delay before typing starts
});

// Show Skills Toggle: Toggles the display of the skills section
const skillBtn = document.querySelector('.skill_btn');
const skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click', () => {
    skillDet.classList.toggle('show_skills');
    
    // Toggle the button text based on the skills display
    if(skillDet.classList.contains('show_skills')) {
        skillBtn.textContent = 'Hide My Skills';
    } else {
        skillBtn.textContent = 'Check My Skills';
    }
});

// Sticky Navigation: Adds a sticky effect to the navigation bar when scrolling
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    // Adds the 'sticky_nav' class to the nav when scrolled beyond 100px
    if (window.scrollY > 100) {
        nav.classList.add('sticky_nav');
    } else {
        nav.classList.remove('sticky_nav');
    }
});

// Testimonial Swiper Slider Initialization
const swiper = new Swiper('.testSwiper', {
    slidesPerView: 1, // Display one slide at a time
    loop: true, // Enable infinite loop
    autoplay: {
        delay: 3000, // Autoplay delay of 3 seconds
        disableOnInteraction: false, // Keep autoplay after user interaction
    },
    // Responsive breakpoints for Swiper
    breakpoints: {
        640: {
            slidesPerView: 1, // 1 slide on small devices
        },
        768: {
            slidesPerView: 2, // 2 slides on medium devices
        },
        1024: {
            slidesPerView: 3, // 3 slides on large devices
        },
    },
    pagination: {
        el: '.swiper-pagination', // Pagination element
        clickable: true, // Allows user to click on pagination bullets
    },
    navigation: {
        nextEl: '.swiper-button-next', // Next arrow button
        prevEl: '.swiper-button-prev', // Previous arrow button
    },
});
