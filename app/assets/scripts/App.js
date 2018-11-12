const Slideshow = require('./modules/Slideshow');

const slideshow = new Slideshow();
// slideshow.autoSlide();



var slideIndex = 0;
var slides = document.getElementsByClassName("slideshow__image");
autoSlides();

function autoSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  // setTimeout(autoSlides, 5000);
} 

let timer = setInterval(autoSlides, 5000);

function intervalManager(flag, animate, time) {
  if (flag)
    timer = setInterval(animate, time);
  else
    clearInterval(timer);
}

const prev = document.getElementsByClassName("slideshow__prev");
const next = document.getElementsByClassName("slideshow__next");

prev[0].addEventListener("click", prevSlide);
next[0].addEventListener("click", nextSlide);

function prevSlide() {
  manualSlides(slideIndex-=1);
}

function nextSlide() {
  manualSlides(slideIndex+=1);
}

function manualSlides(n) {
  intervalManager(false);
  setTimeout(intervalManager(true, autoSlides, 5000), 15000);
  var i;
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
} 
