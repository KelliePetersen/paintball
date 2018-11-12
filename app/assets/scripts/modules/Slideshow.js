class Slideshow {
  constructor() {
    this.slides = document.getElementsByClassName("slideshow__slide");
    this.slideIndex = 0;
  }

  autoSlide() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].className = this.slides[i].className.replace(" slideshow__slide--visible", "");
    }
    this.slideIndex++;
    if (this.slideIndex > this.slides.length) { this.slideIndex = 1; }
    this.slides[this.slideIndex - 1].className += " slideshow__slide--visible";
    setTimeout(this.autoSlide.bind(this), 6000);
  }
}

module.exports = Slideshow;





// let timer = setInterval(autoSlides, 5000);
// function intervalManager(flag, animate, time) {
//   if (flag)
//     timer = setInterval(animate, time);
//   else
//     clearInterval(timer);
// }

// const prev = document.getElementsByClassName("slideshow__prev");
// const next = document.getElementsByClassName("slideshow__next");
// prev[0].addEventListener("click", prevSlide);
// next[0].addEventListener("click", nextSlide);

// function prevSlide() {
//   manualSlides(slideIndex-=1);
// }

// function nextSlide() {
//   manualSlides(slideIndex+=1);
// }

// const dots = document.getElementsByClassName("slideshow__dot");
// const dotContainer = document.getElementsByClassName("slideshow__dot-container");
// dotContainer[0].addEventListener("click", function(event) {
//   manualSlides(slideIndex = event.target.id);
// });

// function manualSlides(n) {
//   intervalManager(false);
//   setTimeout(intervalManager(true, autoSlides, 5000), 15000);
//   var i;
//   if (n > slides.length) { slideIndex = 1; }
//   if (n < 1) { slideIndex = slides.length; }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" slideshow__dot--selected", "");
//   }
//   dots[slideIndex - 1].className += " slideshow__dot--selected";
// } 
