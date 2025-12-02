const burgerIcon = document.getElementById("burgerIcon");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeIcon = document.getElementById("closeIcon");

function toggleMenu() {
  burgerIcon.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

burgerIcon.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

// Menü linklerine tıklandığında menüyü kapat
const menuLinks = document.querySelectorAll(".menu-list a");
menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
