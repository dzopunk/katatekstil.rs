const carousel = document.querySelector(".header__hero_carousel");
const nav = document.querySelector(".header__nav");
const carousely = document.querySelector(".carousely");
window.addEventListener("resize", () => {
  const height = window.innerHeight;
  const navHeight = nav.getBoundingClientRect().height;
  const carouselHeight = height - navHeight;
  carousely.style.height = `${carouselHeight}px`;
});
const height = window.innerHeight;
const navHeight = nav.getBoundingClientRect().height;
const carouselHeight = height - navHeight;
const sniper = document.querySelector(".swiper");
sniper.style.height = `${carouselHeight}px`;
carousely.style.height = `${carouselHeight}px`;
