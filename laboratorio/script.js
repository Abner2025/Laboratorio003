const menuBtn=
document.getElementById("menu-btn");
const navLinks=
document.getElementById("nav-links");

menuBtn, addEventListener("click",(x)=>{
    navLinks.classList.toggle("show");
});