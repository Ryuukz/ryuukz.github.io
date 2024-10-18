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
// Find all elements with an aria-label attribute
const ariaElements = document.querySelectorAll('[aria-label]');

// Loop through each element and create a hidden span for the aria-label
ariaElements.forEach(el => {
    // Create a span element specifically for aria-label
    const labelSpan = document.createElement('span');
    labelSpan.textContent = el.getAttribute('aria-label');
    labelSpan.classList.add('aria-label-span');  // Add a specific class for styling

    // Apply the default hidden styles
    labelSpan.style.color = 'var(--text-color)';
    labelSpan.style.backgroundColor = 'transparent';  // Transparent background
    labelSpan.style.fontSize = '12px';  // Smaller font size
    labelSpan.style.padding = '5px';
    labelSpan.style.borderRadius = '4px';
    labelSpan.style.position = 'absolute';
    labelSpan.style.marginTop = '5px';
    labelSpan.style.zIndex = '9999';  // Ensure the tooltip stays on top
    labelSpan.style.whiteSpace = 'nowrap'; // Prevent label from wrapping
    labelSpan.style.visibility = 'hidden'; // Initially hidden
    labelSpan.style.opacity = '0'; // Fully transparent
    labelSpan.style.transition = 'visibility 0s, opacity 0.2s ease-in-out'; // Smooth transition

    // Append the label span to the element
    el.style.position = 'relative';  // Ensure the element has positioning
    el.appendChild(labelSpan);  // Add the aria-label to the DOM

    // Show the label when the icon is hovered
    el.addEventListener('mouseenter', () => {
        labelSpan.style.visibility = 'visible';
        labelSpan.style.opacity = '1';
    });

    // Hide the label when the hover ends
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
