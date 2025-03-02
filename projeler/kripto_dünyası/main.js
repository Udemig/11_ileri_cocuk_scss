// Html'den elemanları js'e çekme
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("#nav-menu");

// menuBtn'e tıklanınca menu kısmına class ekle
menuBtn.addEventListener("click", () => {
  // Menu'ye show-menu classı ekle
  menu.classList.add("show-menu");
});

// closeBtn'e tıklanınca menu kısmından class çıkar
closeBtn.addEventListener("click", () => {
  // Menu'den show-menu classını çıkar
  menu.classList.remove("show-menu");
});
