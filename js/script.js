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
  var mobileSiteMenu = document.getElementById("burger-menu-dropdown");
  mobileSiteMenu.classList.toggle("show");
}

function alignTextInMain() {
  const mainDiv = document.querySelector('main');
  mainDiv.style.textAlign = 'center';
  mainDiv.style.margin = '0 auto';
  mainDiv.style.width = '400px';
  mainDiv.style.backgroundSize = 'cover';
  mainDiv.style.backgroundRepeat = 'no-repeat';
  mainDiv.style.backgroundPosition = 'center';
}

alignTextInMain();