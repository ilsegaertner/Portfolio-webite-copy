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

// expanding the work page with contact-grid

document.getElementById("contactbutton").addEventListener("click", function () {
  document.querySelector(".contact-grid").classList.toggle("expanded");
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
  document.querySelector(".project-list").classList.toggle("opacity-2");
});

document.getElementById("expandButton").addEventListener("click", function () {
  document.querySelector(".contact-grid").classList.toggle("expanded");
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
  document.querySelector(".project-list").classList.toggle("opacity-2");
});

// change h1 when clicking on contact

// document
//   .querySelector(".work-navigation-link")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default link behavior

//     // Update the content of the h1 and h2 elements
//     document.querySelector(".sub-heading-class").textContent = "> works";
//     document.querySelector(".project-list__item").textContent =
//       "portfolio projects__programming and design";
//   });

// document
//   .querySelector(".contact-navigation-link")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default link behavior

//     // Update the content of the h1 and h2 elements
//     document.querySelector(".sub-heading-class").textContent = "> contact";
//     document.querySelector(".project-list__item").textContent =
//       "give me a shout";
//   });
