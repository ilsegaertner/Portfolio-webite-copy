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
  var contactGrid = document.querySelector(".contact-grid");
  var descriptionElement = document.querySelector(".workpage-description");
  var projectListElement = document.querySelector(".project-list");

  // Toggle the 'expanded' class on the contact grid
  contactGrid.classList.toggle("expanded");
  projectListElement.classList.toggle("project-list-expanded");

  // Toggle the text content based on the contact grid's width
  if (contactGrid.classList.contains("expanded")) {
    descriptionElement.textContent = "> contact";
  } else {
    descriptionElement.textContent =
      "> portfolio projects__programming and design";
  }

  // Toggle other classes or perform other actions as needed
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
  document.querySelector(".project-list").classList.toggle("opacity-2");
});

document.getElementById("expandButton").addEventListener("click", function () {
  var contactGrid = document.querySelector(".contact-grid");
  var descriptionElement = document.querySelector(".workpage-description");
  var projectListElement = document.querySelector(".project-list");

  // Toggle the 'expanded' class on the contact grid
  contactGrid.classList.toggle("expanded");
  projectListElement.classList.toggle("project-list-expanded");

  // Toggle the text content based on the contact grid's width
  if (contactGrid.classList.contains("expanded")) {
    descriptionElement.textContent = "> contact";
  } else {
    descriptionElement.textContent =
      "> portfolio projects__programming and design";
  }

  // Toggle other classes or perform other actions as needed
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
  document.querySelector(".project-list").classList.toggle("opacity-2");
});
