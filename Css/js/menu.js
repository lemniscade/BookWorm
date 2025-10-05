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
var closeFlag=false;

var menuElement = document.getElementById("slideoutMenu");
 var overlayElement = document.getElementById("overlay");
const width = menuElement.offsetWidth-40;
document.documentElement.style.setProperty("--menu-width", width + "px");
// Menüyü aç/kapat
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    openMenu();
    if (document.getElementById("xmark").classList.contains("hide")) {
      document.getElementById("xmark").classList.remove("hide");
      document.getElementById("burger").classList.add("hide");
      menuToggleXmark.classList.remove("hide");
      menuToggleXmark.classList.add("active");
    }
  } else {
    closeMenu();
    if (document.getElementById("burger").classList.contains("hide")) {
      document.getElementById("xmark").classList.add("hide");
      document.getElementById("burger").classList.remove("hide");
      menuToggleXmark.classList.add("hide");
      menuToggleXmark.classList.remove("active");
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
  menuToggle.style.setProperty("display", "none", "important");
  menuToggleXmark.style.setProperty("display", "flex", "important");
}

// Menüyü kapat
function closeMenu() {
  slideoutMenu.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("hide");
  menuToggleXmark.classList.add("hide");
  menuToggleXmark.classList.remove("active");
  menuToggle.classList.add("active");
  document.body.style.overflow = "";
  isMenuOpen = false;
  menuToggle.style.setProperty("display", "flex", "important");
  menuToggleXmark.style.setProperty("display", "none", "important");
  closeFlag=true;
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

 

document.addEventListener("click", function(event) {
  if (!menuElement.contains(event.target) && overlayElement.contains(event.target) && !isMenuOpen && closeFlag) {
    closeMenu();
    closeFlag=false;
    document.getElementById("burger").classList.remove("hide");
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
    menuToggle.style.display = "none";
  }

  // Sağdan sola kaydırma (menüyü kapat)
  if (swipeDistance < -100 && isMenuOpen) {
    closeMenu();
    menuToggle.style.display = "flex";
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
