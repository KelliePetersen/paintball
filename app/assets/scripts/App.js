const FixedMenu = require('./modules/FixedMenu'),
      Slideshow = require('./modules/Slideshow');

const fixedMenu = new FixedMenu();
fixedMenu.events();

const slideshow = new Slideshow();
slideshow.autoSlide();




const img = document.getElementsByClassName("slideshow__image");

document.addEventListener("scroll", function() {
  for (let i = 0; i < img.length; i++) {
    img[i].style.top = ("0" + (window.scrollY / 1.8) + "px");
  }
});