const FixedMenu = require('./modules/FixedMenu'),
      Slideshow = require('./modules/Slideshow');

const fixedMenu = new FixedMenu();
fixedMenu.events();

const slideshow = new Slideshow();
slideshow.events();
slideshow.autoSlide();