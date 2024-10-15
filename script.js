var typed = new Typed('#text',{
    strings:['Data Analyst', 'German Speaker', 'Machine Learning Enthusiast'],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
});

//SHOW SKILLS

let skillBtn = document.querySelector('.skill_btn');
let skillDet = document.querySelector('.about_bottom');

skillBtn.addEventListener('click',() =>{
    skillDet.classList.toggle('show_skills');
});

//STICKY NAV

let nav = document.querySelecetor('nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY >100){
        nav.classList.add('sticky_nav');
    }
    else{
        nav.classList.remove('sticky_nav');
    }
});

//TESTIMONIAL SWIPER SLIDER

var swiper = new Swiper('tesSwiper',{
    slidePerView:1,
    loop:true,
    autoplay:true,
})

