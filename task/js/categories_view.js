{/* <button type="button" class="button surface-button button-completed">Completed</button>
                    <button type="button" class="button surface-button button-urgent">Urgent</button>
                    <button type="button" class="button surface-button button-important">Important</button>
                    <button type="button" class="button surface-button button-later">Later</button>
                    <button type="button" class="button surface-button button-to-study">To study</button> */}

export class UpdateColorCategoriesViewEvent extends CustomEvent {
    static type = 'update_color_categories_view_event'

    constructor(color) {
        super(UpdateColorCategoriesViewEvent.type, { detail: { color } })
    }

    get color() {
        return this.detail.color;
    }
}

export class CategoriesView extends EventTarget {
    get #$categoriesList() {
        return document.getElementById('categories_list');
    }
    get #$colorList() {
        return document.getElementById('color-select');
    }


    init() {

        this.#$colorList.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateColorCategoriesViewEvent(e.target.dataset.color));
        });
    }

    render(category) {

        while (this.#$categoriesList.firstChild) {
            this.#$categoriesList.removeChild(this.#$categoriesList.firstChild);
        }

        this.#renderCategoryHtml(this.#createHtmlForCategory(category));
    }

    //     selectcolor() {
    //     let classescolor = `${currentFilter.current == 'active' ? 'button-filters-active' : 'button-filters-not-active'}`;
    // }


    #createHtmlForCategory(category) {
        return `<button id="${category.id} type="button" class="button surface-button ${category.color}">${category.description}</button>`
    }

    #renderCategoryHtml(categoryHtml) {
        this.#$categoriesList.insertAdjacentHTML(`beforeend`, categoryHtml);
    }
}