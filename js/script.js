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
  var burgerMenu = document.getElementById("burger-menu")
  mobileSiteMenu.classList.toggle("show");
  burgerMenu.style.zIndex = "2000"; // fungerer kun på forsiden men ikke på alle de andre sider ??? Lidt hjælp? / massimo
}

// Jeg forsøgte at style det i css men det var ikke som jeg ville have, derfor prøver jeg også her med js. / Massimo
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

document.getElementById('burger-menu-button').addEventListener('click', function() {
  var menu = document.getElementById('burger-menu-dropdown');
  menu.classList.toggle('show');
});



// TEST BG MENU
// document.getElementById('burger-menu').addEventListener('click', function() {
//   this.classList.toggle('open');
// });