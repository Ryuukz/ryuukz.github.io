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
// Toggle visibility on click
document.querySelectorAll('.row').forEach((row) => {
    const description = row.querySelector('.project-description');
    const icon = row.querySelector('i');

    // Store the initial height of the row
    const initialHeight = row.offsetHeight;

    // Variable to keep track of toggle state
    let isOpen = false;

    row.addEventListener('click', () => {
        if (!isOpen) {
            // Show the description
            description.style.display = 'block';
            const descriptionHeight = description.scrollHeight;

            row.style.height = initialHeight + descriptionHeight + 'px';
            description.style.maxHeight = descriptionHeight + 'px';
            description.style.opacity = 1;
            icon.style.opacity = 0;
            icon.style.visibility = 'hidden';

            isOpen = true;  // Mark as open
        } else {
            // Hide the description
            description.style.maxHeight = '0';
            description.style.opacity = 0;
            row.style.height = initialHeight + 'px';
            icon.style.opacity = 1;
            icon.style.visibility = 'visible';

            setTimeout(() => {
                description.style.display = 'none';
            }, 400);  // Matches the CSS transition duration (0.4s)

            isOpen = false;  // Mark as closed
        }
    });
});
// Aria-label //
const ariaElements = document.querySelectorAll('[aria-label]');

ariaElements.forEach(el => {

    const labelSpan = document.createElement('span');
    labelSpan.textContent = el.getAttribute('aria-label');
    labelSpan.classList.add('aria-label-span');

    labelSpan.style.color = 'var(--text-color)';
    labelSpan.style.backgroundColor = 'transparent';
    labelSpan.style.fontSize = '12px';
    labelSpan.style.padding = '5px';
    labelSpan.style.borderRadius = '4px';
    labelSpan.style.position = 'absolute';
    labelSpan.style.marginTop = '5px';
    labelSpan.style.zIndex = '9999';
    labelSpan.style.whiteSpace = 'nowrap';
    labelSpan.style.visibility = 'hidden';
    labelSpan.style.opacity = '0';
    labelSpan.style.transition = 'visibility 0s, opacity 0.2s ease-in-out';

    el.style.position = 'relative';
    el.appendChild(labelSpan);

    el.addEventListener('mouseenter', () => {
        labelSpan.style.visibility = 'visible';
        labelSpan.style.opacity = '1';
    });

    el.addEventListener('mouseleave', () => {
        labelSpan.style.visibility = 'hidden';
        labelSpan.style.opacity = '0';
    });
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
