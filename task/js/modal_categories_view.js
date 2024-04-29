export class UpdateCloseModalCategoriesViewEvent extends CustomEvent {
    static type = 'update_close_modal_categories_view_event'

    constructor() {
        super(UpdateCloseModalCategoriesViewEvent.type)
    }
}


export class AddCategoryRequestModalViewEvent extends CustomEvent {
    static type = 'add_category_request_modal_view_event'

    constructor(categoryDescription, color) {
        super(AddCategoryRequestModalViewEvent.type, { detail: { categoryDescription, color } })
    }

    get categoryDescription() {
        return this.detail.categoryDescription;
    }

    get color() {
        return this.detail.color;
    }

    get categoryId() {
        return null;
    }
}

export class UpdateColorCategoriesViewEvent extends CustomEvent {
    static type = 'update_color_categories_view_event'

    constructor(color) {
        super(UpdateColorCategoriesViewEvent.type, { detail: { color } })
    }

    get color() {
        return this.detail.color;
    }
}

export class ModalCategoriesView extends EventTarget {
    init() {
        window.addEventListener(`keydown`, (e) => {
            if (e.key === "Escape") {
                this.dispatchEvent(new UpdateCloseModalCategoriesViewEvent(e));
            }
        })

        document.querySelector("#modal_add_category .modal").addEventListener("click", (e) => {
            e._isClickWithInModal = true;
        });
        this.#$modalCategories.addEventListener("click", (e) => {
            if (e._isClickWithInModal) return;
            this.dispatchEvent(new UpdateCloseModalCategoriesViewEvent(e));
        });

        let color;
        this.#$colorList.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateColorCategoriesViewEvent(e.target.dataset.color));
            color = e.target.dataset.color;
        });

        this.#$submit.addEventListener("click", (e) => {
            e.preventDefault();
            const categoryDescription = this.#getCategoryDescription();
            this.dispatchEvent(new AddCategoryRequestModalViewEvent(categoryDescription, color));
        });

    }

    get #$modalAddCategoryInput() {
        return document.getElementById('modal-add-category__input');
    }

    #getCategoryDescription() {
        this.#$modalAddCategoryInput.focus();
        let categoryDescription = this.#$modalAddCategoryInput.value;
        this.#$modalAddCategoryInput.value = "";
        return categoryDescription;
    }

    openModal() {
        this.#$modalCategories.classList.add("open");
    }

    get #$modalCategories() {
        return document.getElementById('modal_add_category');
    }

    get #$submit() {
        return document.getElementById('submit__add-category');
    }

    closeModal() {
        this.#$modalCategories.classList.remove("open");
    }

    get #$colorList() {
        return document.getElementById('color-select');
    }

}
