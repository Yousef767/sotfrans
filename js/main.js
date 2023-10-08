let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("activeMenu");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    nav.classList.add("activeNav");
  } else {
    nav.classList.remove("activeNav");
  }
});
/*
let list1 = document.getElementById("list1");
let menu1 = document.getElementById("menu1");
let list2 = document.getElementById("list2");
let menu2 = document.getElementById("menu2");
let list3 = document.getElementById("list3");
let menu3 = document.getElementById("menu3");

list1.addEventListener("click", () => {
  list1.classList.add("show");
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu1.style.display = "flex";
});

list2.addEventListener("click", () => {
  list2.classList.add("show");
  menu3.style.display = "none";
  menu1.style.display = "none";
  menu2.style.display = "flex";
});

list3.addEventListener("click", () => {
  list3.classList.add("show");
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "flex";
});

*/
let closeBtns = document.querySelectorAll(".close");
closeBtns.forEach((e) => {
  e.addEventListener("click", () => {
    setTimeout(() => {
      e.parentElement.parentElement.removeAttribute("style");
    }, 100);
    setTimeout(() => {
      e.parentElement.parentElement.parentElement.classList.remove("show");
    }, 100);
  });
});
