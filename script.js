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

const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
     navList.classList.toggle('active');
});

var typed1 = new Typed('#text', {
    strings: ['Data Analyst.', 'German Speaker.', 'Machine Learning Enthusiast.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

var typed2 = new Typed('#text2', {
    strings: ['1 Month', '2 Months', '3 Months'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

var typed3 = new Typed('#text3', {
    strings: ['Data Science', 'Applied Life Sciences'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

var typed4 = new Typed('#text4', {
    strings: ['1', '2', '3', '4', '5'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

var typed5 = new Typed('#text5', {
    strings: ['Indonesia', 'Germany', 'Singapore'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});

