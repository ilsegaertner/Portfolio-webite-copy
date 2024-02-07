function fadeInProjects() {
  const projectItems = document.querySelectorAll(".project-list__item");
  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
    }, 10 * index); // Adjust the delay as needed
  });
}
window.addEventListener("load", fadeInProjects);

// document
//   .getElementById("collapseButton")
//   .addEventListener("click", function () {
//     document.querySelector(".project-section").classList.toggle("expanded");
//     document.querySelector(".contact-grid").classList.toggle("collapsed");
//   });

document.getElementById("expandButton").addEventListener("click", function () {
  document.querySelector(".contact-grid").classList.toggle("expanded");
  document.querySelector(".project-section").classList.toggle("collapsed");
  document.querySelector(".addressbutton2").classList.toggle("button-expanded");
});

// // Function to handle the fading effect for elements in viewport
// function handleFadeIn() {
//   const elements = document.querySelectorAll(".project-list__item");

//   elements.forEach((element) => {
//     const positionFromTop = element.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     // Calculate the threshold for element visibility
//     const fadeInThreshold = windowHeight * 0.9; // Adjust this value as needed

//     if (positionFromTop < fadeInThreshold && positionFromTop > -windowHeight) {
//       const opacity = 1 - (fadeInThreshold - positionFromTop) / fadeInThreshold;
//       element.style.opacity = opacity > 0 ? opacity : 0;
//     } else if (positionFromTop >= windowHeight) {
//       element.style.opacity = 0;
//     } else {
//       element.style.opacity = 1;
//     }
//   });
// }

// // Event listener for scrolling
// window.addEventListener("scroll", handleFadeIn);

// // Trigger handleFadeIn initially to check for elements already in the viewport
// handleFadeIn();
