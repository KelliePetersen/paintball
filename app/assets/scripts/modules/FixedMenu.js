class FixedMenu {
  constructor() {
    this.topBar = document.getElementsByClassName("top-bar");
    this.navBar = document.getElementsByClassName("header");
    this.navBarLogo = document.getElementsByClassName("header__logo");
  }

  events() {
    window.addEventListener("scroll", this.scrollMethods.bind(this));
  }

  scrollMethods() {
    this.menuOnScroll();
    this.smallerMenu();
    this.logoScroll();
  }

  menuOnScroll() {
    if (window.scrollY > 32) {
      this.topBar[0].classList.add("top-bar--fixed-menu");
      this.navBar[0].classList.add("header--fixed-menu");
    } else {
      this.topBar[0].classList.remove("top-bar--fixed-menu");
      this.navBar[0].classList.remove("header--fixed-menu");
    }
  }

  smallerMenu() {
    if (window.scrollY > 160) {
      this.navBar[0].classList.add("header--smaller-menu");
    } else {
      this.navBar[0].classList.remove("header--smaller-menu");
    }
  }

  logoScroll() {
    if (window.scrollY > 150) {
      this.navBarLogo[0].classList.add("header__logo--fixed-menu");
    } else {
      this.navBarLogo[0].classList.remove("header__logo--fixed-menu");
    }
  }
}

module.exports = FixedMenu;