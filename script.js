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
// Auto-height on hover //
document.querySelectorAll('.row').forEach((row) => {
    const description = row.querySelector('.project-description');
    const icon = row.querySelector('i');

    // Store the initial height of the row
    const initialHeight = row.offsetHeight;

    // Hover functionality
    row.addEventListener('mouseenter', () => {
        // Show the description and calculate its full height
        description.style.display = 'block';
        const descriptionHeight = description.scrollHeight;

        // Expand the row to fit the description
        row.style.height = initialHeight + descriptionHeight + 'px';
        description.style.maxHeight = descriptionHeight + 'px'; // Allow the description to expand
        description.style.opacity = 1; // Fade in the description
        icon.style.opacity = 0; // Hide the icon
        icon.style.visibility = 'hidden'; // Ensure the icon is not visible
    });

    row.addEventListener('mouseleave', () => {
        // Revert the row height to its initial state
        description.style.maxHeight = '0'; // Collapse the description
        description.style.opacity = 0; // Fade out the description
        row.style.height = initialHeight + 'px';
        icon.style.opacity = 1; // Show the icon
        icon.style.visibility = 'visible'; // Ensure the icon is visible again

        // Hide the description after the transition to prevent overflow
        setTimeout(() => {
            description.style.display = 'none';
        }, 400); // Matches the CSS transition duration (0.4s)
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
        delay: 8000,
    },
    speed: 800,
});
