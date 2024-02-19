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
  // var descriptionElement = document.querySelector(".workpage-description");
  var projectListElement = document.querySelector(".project-list");
  var headingClassText = document.querySelector(".headingclass_work");

  // Toggle the 'expanded' class on the contact grid
  contactGrid.classList.toggle("expanded");
  projectListElement.classList.toggle("project-list-expanded");

  // Toggle the text content based on the contact grid's width
  if (contactGrid.classList.contains("expanded")) {
    // descriptionElement.textContent = "> contact";
    headingClassText.textContent = "> contact";
  } else {
    // descriptionElement.textContent =
    //   "> portfolio projects__programming and design";
    headingClassText.textContent = "> work";
  }

  // Toggle other classes or perform other actions as needed
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
  document.querySelector(".project-list").classList.toggle("opacity-2");
  document
    .getElementById("toggleAsideButton")
    .classList.toggle("toggleAsideButton-invisible");
  document.getElementById("aside").classList.toggle("aside-invisible");
});

document.getElementById("expandButton").addEventListener("click", function () {
  var contactGrid = document.querySelector(".contact-grid");
  var projectListElement = document.querySelector(".project-list");
  var projectListItems = document.querySelectorAll(".project-list__item");
  var headingClassText = document.querySelector(".headingclass_work");

  // Toggle the 'expanded' class on the contact grid
  contactGrid.classList.toggle("expanded");
  projectListElement.classList.toggle("project-list-expanded");

  // Toggle the text content based on the contact grid's width
  if (contactGrid.classList.contains("expanded")) {
    headingClassText.textContent = "> contact";
    projectListItems.forEach((item) => {
      item.classList.add("thin");
    });
  } else {
    // descriptionElement.textContent =
    headingClassText.textContent = "> work";
    projectListItems.forEach((item) => {
      item.classList.remove("thin");
    });
  }

  // Toggle other classes or perform other actions as needed
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
  document.querySelector(".project-list").classList.toggle("opacity-2");
  document
    .getElementById("toggleAsideButton")
    .classList.toggle("toggleAsideButton-invisible");
  document.getElementById("aside").classList.toggle("aside-invisible");
});

// smooth-scrolling

document.addEventListener("DOMContentLoaded", function () {
  const workList = document.querySelector(".work-list");

  workList.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        scrollToTarget(targetElement, -200);
      }
    }
  });

  function scrollToTarget(targetElement, offset) {
    const startPosition = window.scrollY;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY + offset;
    const distance = targetPosition - startPosition;
    const duration = 300; // Adjust the duration of the animation

    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = ease(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    }

    function ease(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
  }
});

// toggle aside button and adjust width of project-list__item

document.addEventListener("DOMContentLoaded", function () {
  const toggleAsideButton = document.getElementById("toggleAsideButton");
  const aside = document.getElementById("aside");
  const projectListItems = document.querySelectorAll(".project-list__item");

  toggleAsideButton.addEventListener("click", function () {
    console.log("Button clicked!");
    aside.classList.toggle("open");

    // Toggle button content
    if (toggleAsideButton.innerHTML === "⇁") {
      toggleAsideButton.innerHTML = "⇂";
      projectListItems.forEach((item) => {
        item.classList.add("broad");
      });
    } else {
      toggleAsideButton.innerHTML = "⇁";
      projectListItems.forEach((item) => {
        item.classList.remove("broad");
      });
    }
  });
});

// Swiper
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

window.addEventListener("scroll", function () {
  var projectListHeader = document.querySelector(".project-list__heading");
  var firstDiv = document.getElementById("Angular-App");

  var projectListHeaderHeight = projectListHeader.offsetHeight;
  var firstDivTop = firstDiv.getBoundingClientRect().top;

  if (firstDivTop <= projectListHeaderHeight) {
    var opacity =
      1 - (projectListHeaderHeight - firstDivTop) / projectListHeaderHeight;
    projectListHeader.style.opacity = opacity;
  } else {
    projectListHeader.style.opacity = 1;
  }
});
