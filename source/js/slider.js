var slides = document.getElementsByClassName('reviews__item');
var prevSlide = document.querySelector('.reviews__prev');
var nextSlide = document.querySelector('.reviews__next');
var slideIndex = 1;

function showSlides(n) {
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i=0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

prevSlide.addEventListener ('click', function () {
  showSlides(slideIndex -=1);
});

nextSlide.addEventListener ('click', function () {
  showSlides(slideIndex +=1);
});

function currentSlide(n) {
  showSlides(slideIndex = n);
}

