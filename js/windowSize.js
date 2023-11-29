function updateSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  document.getElementById("widthAndHeight").innerHTML =
    width + "px" + height + "px";
  // document.getElementById("height").innerHTML = height + "px";
}

window.addEventListener("resize", updateSize);

window.onload = updateSize;
