export class UpdateCloseEscapeModalViewEvent extends CustomEvent {
    static type = 'update_close_escape_modal_view_event'

    constructor() {
        super(UpdateCloseEscapeModalViewEvent.type)
    }
}

export class UpdateCloseOutsideModalViewEvent extends CustomEvent {
    static type = 'update_close_outside_modal_view_event'

    constructor() {
        super(UpdateCloseOutsideModalViewEvent.type)
    }
}

export class UpdateCloseSubmitModalViewEvent extends CustomEvent {
    static type = 'update_close_submit_modal_view_event'

    constructor() {
        super(UpdateCloseSubmitModalViewEvent.type)
    }
}



export class ModalView extends EventTarget {
    init() {
        window.addEventListener(`keydown`, (e) => {
            if (e.key === "Escape") {
                this.dispatchEvent(new UpdateCloseEscapeModalViewEvent(e));
            }
        })

        document.querySelector("#modal .modal").addEventListener("click", (e) => {
            e._isClickWithInModal = true;
        });
        document.getElementById("modal").addEventListener("click", (e) => {
            if (e._isClickWithInModal) return;
            this.dispatchEvent(new UpdateCloseOutsideModalViewEvent(e));
        });

        this.#$submit.addEventListener("click", (e) => {
            this.dispatchEvent(new UpdateCloseSubmitModalViewEvent(e));
        });

    }

    openModal() {
        this.#$modal.classList.add("open");
    }

    get #$modal() {
        return document.getElementById('modal');
    }

    get #$submit() {
        return document.getElementById('submit');
    }

    closeModal() {
        this.#$modal.classList.remove("open");
    }

}
