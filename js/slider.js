var slides = document.querySelectorAll(".slider .slider__slide");
var currentSlide = 0;
var next = document.querySelector(".slider__btn--next");
var previous = document.querySelector(".slider__btn--prev");

next.classList.remove("slider__btn--nojs");
previous.classList.remove("slider__btn--nojs");

function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slider__slide";
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = "slider__slide slider__slide--showing";
}

next.onclick = function() {
  nextSlide();
};

previous.onclick = function() {
  previousSlide();
};
