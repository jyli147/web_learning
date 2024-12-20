const swiperTop = new Swiper(".swiper-top", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: false,
    disableOnInteraction: false,
  },
  speed: 10000,
});
const swiperBottom = new Swiper(".swiper-bootom", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: false,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  speed: 10000,
});
