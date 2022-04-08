let slideIndex = 1;
showSlides(slideIndex);

// Next & Previous Controls
function plusSlides(n){
   showSlides(slideIndex+= n);
}

// Image Controls
function currentslide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){ 
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
}
// Hamburger Menu
function menuOnClick(){
  document.getElementsById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
