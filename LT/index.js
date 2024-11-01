const swiper = new Swiper(".specialists__swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  speed: 800,
});

const reviews = new Swiper(".reviews__swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerView: "auto",

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const openButtons = document.querySelectorAll(".model-open");

openButtons.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("modal").classList.add("open");
    document.body.classList.add("no-scroll");
  });
});

window.addEventListener(`keydown`, (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
});

document.querySelector("#modal .modal-box").addEventListener("click", (e) => {
  e._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener("click", (e) => {
  if (e._isClickWithInModal) return;
  e.currentTarget.classList.remove("open");
  document.body.classList.remove("no-scroll");
});

document.getElementById("modal__cross").addEventListener("click", function () {
  document.getElementById("modal").classList.remove("open");
  document.body.classList.remove("no-scroll");
});
