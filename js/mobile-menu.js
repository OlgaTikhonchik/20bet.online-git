

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header__btn-menu");
  const headerMenu = document.querySelector(".header__menu");

  function toggleMenu() {
    menuButton.classList.toggle("active");
    if (headerMenu.classList.contains("active")) {
      headerMenu.classList.remove("active");
       document.body.classList.remove("no-scroll");
    } else {
      headerMenu.classList.add("active");
      document.body.classList.add("no-scroll"); 
    }
  }

  menuButton.addEventListener("click", toggleMenu);

  window.addEventListener("load", function () {
    if (window.innerWidth < 1108) {
      document.addEventListener("mouseup", function (event) {
        if (
          !headerMenu.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          menuButton.classList.remove("active");
          headerMenu.classList.remove("active");
           document.body.classList.remove("no-scroll");
        }
      });
    }
  });
});
