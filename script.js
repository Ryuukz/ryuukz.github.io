const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY
        >120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}
window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

<script>
    const roles = ["Data Analyst", "German Speaker", "Machine Learning Enthusiast"];
    let index = 0;
    let charIndex = 0;
    let currentRole = roles[0];
    let isDeleting = false;
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const delayBetween = 2000; // Delay between roles

    function typeEffect() {
        const element = document.getElementById("dynamic-text");
        
        // Typing out the characters
        if (!isDeleting && charIndex <= currentRole.length) {
            element.innerText = currentRole.slice(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        }
        // Deleting the characters
        else if (isDeleting && charIndex >= 0) {
            element.innerText = currentRole.slice(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        }
        // Move to next role
        else if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % roles.length; // Loop through the roles
            currentRole = roles[index];
            setTimeout(typeEffect, typingSpeed);
        }
        // Start deleting after delay
        else {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
        }
    }

    // Start the typing effect
    setTimeout(typeEffect, delayBetween);
</script>

