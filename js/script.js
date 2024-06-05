document.addEventListener("DOMContentLoaded", function () {
   let navbar = document.querySelector('.header .navbar');
   let menuBtn = document.querySelector('#menu-btn');
   let closeBtn = document.querySelector('#close-navbar');

   menuBtn.onclick = () => {
       navbar.classList.add('active');
   };

   closeBtn.onclick = () => {
       navbar.classList.remove('active');
   };

   window.onscroll = () => {
       navbar.classList.remove('active');
   };

   const sections = document.querySelectorAll("section");
   const navItems = document.querySelectorAll(".navbar a");

   window.addEventListener("scroll", () => {
       let scrollPosition = window.scrollY;

       sections.forEach((section, i) => {
           if (scrollPosition >= section.offsetTop - 96 && scrollPosition < section.offsetTop + section.offsetHeight - 96) {
               navItems.forEach(nav => nav.classList.remove("active"));
               navItems[i].classList.add("active");
           }
       });
   });

   ScrollReveal().reveal('.home .content', {
       origin: 'left',
       duration: 2000,
       distance: '20%'
   });

   ScrollReveal().reveal('.services .box', {
       origin: 'left',
       duration: 2000,
       distance: '20%',
       interval: 200
   });

   ScrollReveal().reveal('.styles .box', {
       origin: 'bottom',
       duration: 2000,
       distance: '20%',
       interval: 200
   });

   ScrollReveal().reveal('.pricing .box', {
       origin: 'left',
       duration: 2000,
       distance: '20%',
       interval: 200
   });

});
