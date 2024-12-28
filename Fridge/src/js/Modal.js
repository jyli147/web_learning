// export class UpdateCloseModalViewEvent extends CustomEvent {
//   static type = "update_close_modal_view_event";

//   constructor() {
//     super(UpdateCloseModalViewEvent.type);
//   }
// }

// export class ModalView extends EventTarget {
//   init() {}

//   openModal() {
//     this.#$modal.classList.add("open");
//     document.querySelectorAll("[data-js-button]").forEach((button) => {
//       button.addEventListener("click", this.#handleButtonClick.bind(this));
//     });
//   }

//   #handleButtonClick(e) {
//     const buttonType = e.currentTarget.getAttribute("data-js-button");
//     this.#$modal.classList.add("open");
//   }

//   #submit(e) {
//     e.preventDefault();
//     return;
//   }

//   closeModal() {
//     window.removeEventListener(`keydown`, this.#closeAfterTapOnEsc);

//     document
//       .querySelector("#modal .modal-box")
//       ?.removeEventListener("click", this.#clickOnModalAddModal);

//     this.#$modal.removeEventListener("submit", this.#submit);

//     this.#$modal.classList.remove("open");
//   }

//   #closeAfterTapOnEsc(e) {
//     if (e.key === "Escape") {
//       this.dispatchEvent(new UpdateCloseModalViewEvent(e));
//     }
//   }

//   #clickOnModalAddModal(e) {
//     e._isClickWithInModal = true;
//   }

//   get #$modal() {
//     return document.getElementById("modal");
//   }

//   get #$submit() {
//     return document.getElementById("submit");
//   }
// }

// new UpdateCloseModalViewEvent();

// new ModalView();
