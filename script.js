// Sticky Header //
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});
// Menu Button //
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    if (!menu.classList.contains('bx-x')) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('active');
    }
};
// Typed-text //
var typed = new Typed('#text', {
    strings: ['Data Analyst.', 'German Speaker.', 'Machine Learning Enthusiast.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
// Auto-height //
document.querySelectorAll('.row').forEach((row) => {
    const description = row.querySelector('.project-description');
    const icon = row.querySelector('i');

    const initialHeight = row.offsetHeight;

    row.addEventListener('mouseenter', () => {

        description.style.display = 'block';
        const descriptionHeight = description.scrollHeight;

        row.style.height = initialHeight + descriptionHeight + 'px';
        description.style.maxHeight = descriptionHeight + 'px';
        description.style.opacity = 1;
        icon.style.opacity = 0;
        icon.style.visibility = 'hidden';
    });

    row.addEventListener('mouseleave', () => {

        description.style.maxHeight = '0';
        description.style.opacity = 0;
        row.style.height = initialHeight + 'px';
        icon.style.opacity = 1;
        icon.style.visibility = 'visible';

        setTimeout(() => {
            description.style.display = 'none';
        }, 400);
    });
});
// Aria-label //
const ariaElements = document.querySelectorAll('[aria-label]');

ariaElements.forEach(el => {

    const labelSpan = document.createElement('span');
    labelSpan.textContent = el.getAttribute('aria-label');
    
    labelSpan.style.color = 'var(--text-color)';
    labelSpan.style.backgroundColor = 'var(--bg-color)';
    labelSpan.style.fontSize = 'var(--p-font)';
    labelSpan.style.padding = '5px';
    labelSpan.style.borderRadius = '4px';
    labelSpan.style.position = 'absolute';
    labelSpan.style.marginTop = '5px';
    labelSpan.style.zIndex = '1000';

    el.style.position = 'relative';
    el.appendChild(labelSpan);
});
// Test-swiper //
var swiper = new Swiper('.testSwiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 800,
});
