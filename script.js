const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY
        >120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

var typed = new Typed('#text', {
    strings: ['Data Analyst.', 'German Speaker.', 'Machine Learning Enthusiast.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

document.querySelectorAll('.row').forEach((row) => {
    const description = row.querySelector('.project-description');
    const icon = row.querySelector('i');

    // Store the initial height of the row
    const initialHeight = row.offsetHeight;

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

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust 80 to your header height
            behavior: 'smooth'
        });
    });
});
