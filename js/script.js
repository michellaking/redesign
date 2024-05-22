function updateImageBackground() {
  var imgElement = document.querySelector("img");
  var viewportWidth = window.innerWidth;

  if (viewportWidth < 400) {
    imgElement.style.backgroundImage = "url('')";
  } else {
    imgElement.style.backgroundImage = "url('')";
  }
}

updateImageBackground();
window.addEventListener("resize", updateImageBackground);

function toggleMenu() {
  let mobileSiteMenu = document.getElementById("burger-menu-dropdown");
  mobileSiteMenu.classList.toggle("show");
}
