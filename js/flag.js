// document.addEventListener("DOMContentLoaded", function () {
//     const flagButton = document.querySelector(".header__country");
//     const flagMenu = document.querySelector(".header__flag-menu");

//     if (!flagButton || !flagMenu) {
//         console.log("Елементи не знайдені!");
//         return;
//     }

//     flagButton.addEventListener("click", function (event) {
//         event.stopPropagation();
//         flagMenu.classList.toggle("active");
//         flagButton.classList.toggle("active");
//         console.log("Меню стан: ", flagMenu.classList.contains("active"));
//     });

//     document.addEventListener("click", function (event) {
//         if (!flagButton.contains(event.target) && !flagMenu.contains(event.target)) {
//             flagMenu.classList.remove("active");
//             flagButton.classList.remove("active");
//             console.log("Меню закрито");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const flagButton = document.querySelector(".header__country");
    const flagMenu = document.querySelector(".header__flag-menu");
    let isOpen = false;
    let isAnimating = false;

    if (!flagButton || !flagMenu) {
      console.log("Элементы не найдены!");
      return;
    }

    flagButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (isAnimating) return; 
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener("click", function (e) {
      if (!flagButton.contains(e.target) && !flagMenu.contains(e.target)) {
        if (isOpen) closeMenu();
      }
    });

    function openMenu() {
      isAnimating = true;
      flagMenu.style.display = "block";
      flagMenu.style.height = "0px";

      
      flagMenu.offsetHeight; 

      const fullHeight = flagMenu.scrollHeight + "px";
      flagMenu.style.height = fullHeight;

      flagMenu.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "height") {
          flagMenu.style.height = "auto"; 
          flagMenu.removeEventListener("transitionend", handler);
          isAnimating = false;
          isOpen = true;
        }
      });
    }

    function closeMenu() {
      isAnimating = true;

     
      flagMenu.style.height = flagMenu.scrollHeight + "px";

      
      flagMenu.offsetHeight;

      
      flagMenu.style.height = "0px";

      flagMenu.addEventListener("transitionend", function handler(e) {
        if (e.propertyName === "height") {
          flagMenu.style.display = "none";
          flagMenu.removeEventListener("transitionend", handler);
          isAnimating = false;
          isOpen = false;
        }
      });
    }
  });