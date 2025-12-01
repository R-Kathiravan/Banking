const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".btn-close");
const mobileActionBtn = document.querySelector(".mobile-nav-actions");

hamburger.addEventListener("click", () => {
    navLinks.classList.add("nav-open");
    closeBtn.classList.add("nav-open");
    mobileActionBtn.classList.add("nav-open");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("nav-open");
    closeBtn.classList.remove("nav-open");
    mobileActionBtn.classList.remove("nav-open");
});
