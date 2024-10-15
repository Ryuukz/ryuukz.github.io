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
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetween = 2000;

    function typeEffect() {
        const element = document.getElementById("dynamic-text");
        
        if (!isDeleting && charIndex <= currentRole.length) {
            element.innerText = currentRole.slice(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        }
        else if (isDeleting && charIndex >= 0) {
            element.innerText = currentRole.slice(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        }
        else if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
            currentRole = roles[index];
            setTimeout(typeEffect, typingSpeed);
        }
        else {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
        }
    }
    setTimeout(typeEffect, delayBetween);
</script>
