// Hamburger

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuContainer = document.querySelector(".page-header");

  menuToggle.addEventListener("click", function () {
    // console.log("Menu toggle clicked"); // Debugging statement
    // menuToggle.classList.toggle("menu-open");

    menuContainer.classList.toggle("menu-open");
  });
});

// fade in project-list__items

function fadeInProjects() {
  const projectItems = document.querySelectorAll(".project-list__item");
  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
    }, 10 * index); // Adjust the delay as needed
  });
}
window.addEventListener("load", fadeInProjects);
