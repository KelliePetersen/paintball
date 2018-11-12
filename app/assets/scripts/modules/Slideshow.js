class Slideshow {
  constructor() {
    this.images = document.getElementsByClassName("slideshow__image");
    this.hidden = "slideshow__image";
    this.visible = "slideshow__image-visible";
  }

  autoSlide() {
    this.images[0].className = this.visible;
  }
}

module.exports = Slideshow;