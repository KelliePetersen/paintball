class Slideshow {
  constructor() {
    this.slides = document.getElementsByClassName("slideshow__slide");
    this.slideIndex = 0;
    this.slideImage = document.getElementsByClassName("slideshow__image");
    this.prevArrow = document.getElementsByClassName("slideshow__prev");
    this.nextArrow = document.getElementsByClassName("slideshow__next");
    this.autoSlideTimer = setInterval(this.autoSlide.bind(this), 6000);
  }

  events() {
    document.addEventListener("scroll", this.parallaxImages.bind(this));
    this.prevArrow[0].addEventListener("click", this.prevSlide.bind(this));
    this.nextArrow[0].addEventListener("click", this.nextSlide.bind(this)); 
  }

  autoSlide() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].className = this.slides[i].className.replace(" slideshow__slide--visible", "");
    }
    this.slideIndex++;
    if (this.slideIndex > this.slides.length) { this.slideIndex = 1; }
    this.slides[this.slideIndex - 1].className += " slideshow__slide--visible";
  }

  prevSlide() {
    this.manualSlides(this.slideIndex-=1);
  }

  nextSlide() {
    this.manualSlides(this.slideIndex+=1);
  }

  manualSlides(n) {
    this.intervalManager(false);
    this.intervalManager(true, this.autoSlide.bind(this), 6000);
    if (n > this.slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = this.slides.length; }
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].className = this.slides[i].className.replace(" slideshow__slide--visible", "");
    }
    this.slides[this.slideIndex - 1].className += " slideshow__slide--visible";
  } 

  intervalManager(flag, animate, time) {
    if (flag) {
      this.autoSlideTimer = setInterval(animate, time);
    } else {
      clearInterval(this.autoSlideTimer);
    }
  }

  parallaxImages() {
    for (let i = 0; i < this.slideImage.length; i++) {
      if (scrollY < 15) {
        this.slideImage[i].style.top = "0px";
      } else {
        this.slideImage[i].style.top = ("0" + (window.scrollY / 1.8 - 15) + "px");
      }
    }
  }
}

module.exports = Slideshow;


// const dots = document.getElementsByClassName("slideshow__dot");
// const dotContainer = document.getElementsByClassName("slideshow__dot-container");
// dotContainer[0].addEventListener("click", function(event) {
//   manualSlides(slideIndex = event.target.id);
// });

// function manualSlides(n) {
// ...
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" slideshow__dot--selected", "");
//   }
//   dots[slideIndex - 1].className += " slideshow__dot--selected";
// } 