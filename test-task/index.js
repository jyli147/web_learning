const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 32,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      autoHeight: true,
    },
    375: {
      slidesPerView: 1,
      autoHeight: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
      autoHeight: false,
      navigation: {
        nextEl: null,
        prevEl: null,
      },
    },
    1247: {
      slidesPerView: 3,
      spaceBetween: 32,
      autoHeight: false,
    },
  },
});

window.addEventListener("resize", function () {
  swiper.update();
});

const form = document.querySelector(".data__form");
const inputList = Array.from(form.querySelectorAll(".data__form-input"));
const checkboxElement = form.querySelector(".data__type-checkbox");
const buttonElement = form.querySelector(".data__form-button");
startValidation();

function startValidation() {
  toggleButton();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (hasInvalidInput()) {
      inputList.forEach((inputElement) => {
        checkInputValidity(inputElement);
        toggleInputError(inputElement);
      });
      toggleInputError(checkboxElement);
    }
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(inputElement);
      toggleButton();
    });
    inputElement.addEventListener("blur", () => {
      toggleInputError(inputElement);
    });
    inputElement.addEventListener("focus", () => {
      toggleErrorSpan(inputElement);
    });
    checkboxElement.addEventListener("change", () => {
      toggleInputError(checkboxElement);
      toggleButton();
    });
  });
}

function checkInputValidity(inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity(checkLengthMismatch(inputElement));
  }
}

function toggleInputError(inputElement) {
  if (!inputElement.validity.valid) {
    toggleErrorSpan(inputElement, inputElement.validationMessage);
  } else {
    toggleErrorSpan(inputElement);
  }
}

function checkLengthMismatch(inputElement) {
  if (inputElement.type !== "text") {
    return "";
  }
  const valueLength = inputElement.value.trim().length;
  if (valueLength < inputElement.minLength) {
    return `Минимальное количество символов: ${inputElement.minLength}`;
  }
  return "";
}

function hasInvalidInput() {
  return (
    inputList.some((inputElement) => !inputElement.validity.valid) ||
    !checkboxElement.validity.valid
  );
}

function toggleErrorSpan(inputElement, errorMessage) {
  const errorElement = document.querySelector(`.${inputElement.id}-error`);

  if (errorMessage) {
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__error-active");
  } else {
    errorElement.textContent = "";
    errorElement.classList.remove("form__error-active");
  }
}

function toggleButton() {
  if (hasInvalidInput()) {
    buttonElement.classList.add("button-inactive");
    buttonElement.setAttribute("aria-disabled", "true");
  } else {
    buttonElement.classList.remove("button-inactive");
    buttonElement.setAttribute("aria-disabled", "false");
    formErrorElement.textContent = "";
  }
}
