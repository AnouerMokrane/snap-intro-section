let toggle = document.querySelector(".toggle");
let closeIcon = document.querySelector(".close-icon");
let nav = document.querySelector("nav");

toggle.onclick = function () {
  nav.classList.add("active");
};
closeIcon.onclick = function () {
  nav.classList.remove("active");
};
