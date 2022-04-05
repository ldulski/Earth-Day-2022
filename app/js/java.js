let containerIndex = 1;
showContainer(containerIndex);

// Next/previous controls
function plusContainer(n) {
  showContainer(containerIndex += n);
}

// Thumbnail image controls
function currentContainer(n) {
  showContainer(containerIndex = n);
}

function showContainer(n) {
  let i;
  let container = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > container.length) {slideIndex = 1}
  if (n < 1) {containerIndex = container.length}
  for (i = 0; i < container.length; i++) {
    container[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  container[containerIndex-1].style.display = "block";
  dots[containerIndex-1].className += " active";
  captionText.innerHTML = dots[containerIndex-1].alt;
}