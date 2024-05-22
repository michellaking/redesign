function updateImageBackground() {
  var imgElement = document.querySelector("img");
  var viewportWidth = window.innerWidth;

  if (viewportWidth < 450) {
    imgElement.style.backgroundImage = "url('')";
  } else {
    imgElement.style.backgroundImage = "url('img/Katedral_necklaces_900px.png')";
  }
}

updateImageBackground();
window.addEventListener("resize", updateImageBackground);

function toggleMenu() {
  let mobileSiteMenu = document.getElementById("burger-menu-dropdown");
  mobileSiteMenu.classList.toggle("show");
}
