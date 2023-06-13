let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

fotoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".content .active").classList.remove("active");
    btn.classList.remove("active");
  });
});
