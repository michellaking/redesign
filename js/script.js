function updateImageBackground() {
  var imgElement = document.querySelector("img");
  var viewportWidth = window.innerWidth;

  if (viewportWidth < 400) {
    imgElement.style.backgroundImage = "url('path-to-small-image.jpg')";
  } else {
    imgElement.style.backgroundImage = "url('path-to-large-image.jpg')";
  }
}

updateImageBackground();
window.addEventListener("resize", updateImageBackground);
