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
    init() { }

    openModal() {
        this.#render(this.#createHtml());

        window.addEventListener(`keydown`, this.#closeAfterTapOnEsc.bind(this))

        document.querySelector("#modal_add_category .modal").addEventListener("click", this.#clickOnModalAddCategoryModal.bind(this));

        document.getElementById("modal_add_category").addEventListener("click", this.#clickOnModalAddCategory.bind(this));

        this.#$modalCategories.addEventListener("submit", this.#submit.bind(this));

        this.#$colorList.addEventListener('click', this.#onClickModalColorListListenner.bind(this))


        this.#$modalCategories.classList.add("open");
    }

    #render(html) {
        this.#$modalCategories.insertAdjacentHTML(`beforeend`, html);
    }

    #createHtml() {
        return ` <div class="modal">
                <h1 class="modal-title">CREATE CATEGORY</h1>
                <form class="form-modal" id="form-categories">
                    <input class="input" type="text" id="modal-add-category__input"
                        placeholder="Category description...">
                    <div class="modal-categories">
                        <img src="./img/category-left-line.png" alt="left line">
                        <h2 class="title-categories">Colors</h2>
                        <img src="./img/category-right-line.png" alt="right line">
                    </div>
                    <div class="modal-button-category" id="color-select">
                        <button type="button" data-color="red" class="button surface-button button-urgent"
                            data-color="#FF0000">Red</button>
                        <button type="button" data-color="yellow" class="button surface-button button-important"
                            data-color="#FFFF00">Yellow</button>
                        <button type="button" data-color="purple" class="button surface-button button-later"
                            data-color="#FF00FF">Purple</button>
                        <button type="button" data-color="green" class="button surface-button button-completed"
                            data-color="#00FF00">Green</button>
                    </div>
                    <button class="submit__add-category" type="submit" id="submit__add-category">CREATE
                        CATEGORY</button>
                </form>
            </div>`
    }

    #color = null;
    #onClickModalColorListListenner(e) {
        this.dispatchEvent(new UpdateColorCategoriesViewEvent(e.target.dataset.color));
        let color = e.target.dataset.color;
        if (color !== null && color !== undefined) {
            this.#color = color;
        }
    }



    #submit(e) {
        e.preventDefault();
        const categoryDescription = this.#getCategoryDescription();
        const isValidateCategoryDescription = this.#validateCategoryDescription(categoryDescription);

        if (!isValidateCategoryDescription) {
            this.#$modalAddCategoryInput.classList.toggle('input-border');

            setTimeout(() => {
                this.#$modalAddCategoryInput.classList.toggle('input-border');
            }, 10000);

            return;
        }

        this.dispatchEvent(new AddCategoryRequestModalViewEvent(categoryDescription, this.#color));
    }

    #getCategoryDescription() {
        this.#$modalAddCategoryInput?.focus();
        let categoryDescription = this.#$modalAddCategoryInput.value;
        this.#$modalAddCategoryInput.value = "";
        return categoryDescription;
    }

    #validateCategoryDescription(categoryDescription) {
        return categoryDescription.length > 0;
    }

    get #$modalAddCategoryInput() {
        return document.getElementById('modal-add-category__input');
    }

    closeModal() {
        window.removeEventListener(`keydown`, this.#closeAfterTapOnEsc)

        document.querySelector("#modal_add_category .modal")?.removeEventListener("click", this.#clickOnModalAddCategoryModal);

        document.getElementById("modal_add_task").removeEventListener("click", this.#clickOnModalAddCategory);

        this.#$modalCategories.removeEventListener("submit", this.#submit);

        this.#$modalCategories.classList.remove("open");

        this.#$colorList?.removeEventListener('click', this.#onClickModalColorListListenner)


        this.#dispose()
    }

    #closeAfterTapOnEsc(e) {
        if (e.key === "Escape") {
            this.dispatchEvent(new UpdateCloseModalCategoriesViewEvent(e));
        }
    }
    #clickOnModalAddCategoryModal(e) {
        e._isClickWithInModal = true;
    }
    #clickOnModalAddCategory(e) {
        if (e._isClickWithInModal) return;
        this.dispatchEvent(new UpdateCloseModalCategoriesViewEvent(e));
    }

    #dispose(html) {
        while (this.#$modalCategories.firstChild) {
            this.#$modalCategories.removeChild(this.#$modalCategories.firstChild);
        }
    }


    get #$modalCategories() {
        return document.getElementById('modal_add_category');
    }

    get #$submit() {
        return document.getElementById('submit__add-category');
    }

    get #$colorList() {
        return document.getElementById('color-select');
    }

}
