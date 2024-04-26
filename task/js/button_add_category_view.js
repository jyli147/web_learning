export class UpdateButtonAddCategoryViewEvent extends CustomEvent {
    static type = 'update_button_add_category_view_event'

    constructor() {
        super(UpdateButtonAddCategoryViewEvent.type)
    }
}

export class ButtonAddCategoryView extends EventTarget {
    init() {
        this.#$buttonAddCategory.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateButtonAddCategoryViewEvent(e));
        });
    }

    get #$buttonAddCategory() {
        return document.getElementById('add-category');
    }
}