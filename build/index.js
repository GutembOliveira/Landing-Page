
var slideIndex = 1;
showSlides(slideIndex);


//Chama a imagem atual
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Chama a imagem de acordo com o dot clicado
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pacote");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function explorar(){
    alert("Essa função ainda não foi finalizada. Sentimos muito pelo incômodo");
}


