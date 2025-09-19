// DOM elementleri
const menuToggle = document.getElementById("menuToggle");
const menuToggleXmark = document.getElementById("menuToggle-xmark");
const slideoutMenu = document.getElementById("slideoutMenu");
const overlay = document.getElementById("overlay");
const mainContent = document.querySelector(".main-content");
document.getElementById("xmark").classList.add("hide");
// Menü durumu
let isMenuOpen = false;
menuToggle.classList.add("active");
menuToggleXmark.classList.add("hide");
// Menüyü aç/kapat
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    openMenu();
    if (document.getElementById("xmark").classList.contains("hide")) {
      document.getElementById("xmark").classList.remove("hide");
      document.getElementById("burger").classList.add("hide");
    }
  } else {
    closeMenu();
    if (document.getElementById("burger").classList.contains("hide")) {
      document.getElementById("xmark").classList.add("hide");
      document.getElementById("burger").classList.remove("hide");
    }
  }
}

// Menüyü aç
function openMenu() {
  slideoutMenu.classList.add("active");
  overlay.classList.add("active");
  menuToggle.classList.remove("active");
  menuToggle.classList.add("hide");
  menuToggleXmark.classList.remove("hide");
  menuToggleXmark.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Menüyü kapat
function closeMenu() {
  slideoutMenu.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("hide");
  menuToggleXmark.classList.add("hide");
  menuToggleXmark.classList.remove("active");
  menuToggle.classList.remove("hide");
  document.body.style.overflow = "";
  isMenuOpen = false;
}

// Event listeners
menuToggle.addEventListener("click", toggleMenu);
menuToggleXmark.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// Menü öğelerine tıklandığında menüyü kapat
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
    // Burada istediğiniz sayfaya yönlendirme yapabilirsiniz
    console.log("Menü öğesi tıklandı:", item.textContent.trim());
  });
});

// ESC tuşu ile menüyü kapat
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isMenuOpen) {
    closeMenu();
  }
});

// Pencere boyutu değiştiğinde menüyü kapat (responsive)
window.addEventListener("resize", () => {
  if (isMenuOpen) {
    closeMenu();
  }
});

// Touch/swipe desteği (opsiyonel)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  // Sol kenardan sağa kaydırma (menüyü aç)
  if (swipeDistance > 100 && touchStartX < 50 && !isMenuOpen) {
    openMenu();
  }

  // Sağdan sola kaydırma (menüyü kapat)
  if (swipeDistance < -100 && isMenuOpen) {
    closeMenu();
  }
}

//slider
const swiper = new Swiper(".swiper", {
  loop: true, // sonsuz döngü
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
