const corpHamburger = document.querySelector(".corp-hamburger");
const corpMobileMenu = document.querySelector(".corp-mobile-menu");
const corpCloseBtn = document.querySelector(".corp-close-btn");

corpHamburger.addEventListener("click", () => {
    corpMobileMenu.classList.add("open");
});

corpCloseBtn.addEventListener("click", () => {
    corpMobileMenu.classList.remove("open");
});
