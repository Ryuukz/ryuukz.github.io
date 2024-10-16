// Sticky header on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// Mobile menu toggle
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
});

// Close menu on scroll
window.addEventListener("scroll", () => {
    if (menu.classList.contains("bx-x")) {
        menu.classList.remove("bx-x");
        navlist.classList.remove("active");
    }
});

// Typed.js configuration for text animation
new Typed("#text", {
    strings: ['Data Analyst.', 'German Speaker.', 'Machine Learning Enthusiast.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

// Expand and collapse project descriptions on hover or click
document.querySelectorAll(".row").forEach(row => {
    const description = row.querySelector(".project-description");
    const icon = row.querySelector(".old-icon");
    const initialHeight = row.offsetHeight;

    // Function to show the description
    const showDescription = () => {
        description.style.display = "block";
        const descriptionHeight = description.scrollHeight;
        row.style.height = `${initialHeight + descriptionHeight}px`;
        description.style.maxHeight = `${descriptionHeight}px`;
        description.style.opacity = 1;
        icon.style.opacity = 0;
        icon.style.visibility = "hidden";
    };

    // Function to hide the description
    const hideDescription = () => {
        description.style.maxHeight = "0";
        description.style.opacity = 0;
        row.style.height = `${initialHeight}px`;
        icon.style.opacity = 1;
        icon.style.visibility = "visible";

        setTimeout(() => {
            description.style.display = "none";
        }, 400); // Matches the CSS transition duration (0.4s)
    };

    // Event listeners for hover (desktop)
    row.addEventListener("mouseenter", showDescription);
    row.addEventListener("mouseleave", hideDescription);

    // Event listener for click (mobile)
    row.addEventListener("click", () => {
        // Check if the description is currently visible
        const isDescriptionVisible = description.style.maxHeight !== "0" && description.style.maxHeight !== "";
        if (isDescriptionVisible) {
            hideDescription();
        } else {
            showDescription();
        }
    });
});
