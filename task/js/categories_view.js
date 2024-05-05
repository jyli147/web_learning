export class CategoriesView extends EventTarget {
    get #$categoriesList() {
        return document.getElementById('categories_list');
    }

    get #$modalAddTaskCategories() {
        return document.getElementById('categories-for-add-task');
    }

    init() {

        //    
    }

    render(categories) {

        while (this.#$categoriesList.firstChild) {
            this.#$categoriesList.removeChild(this.#$categoriesList.firstChild);
        }

        while (this.#$modalAddTaskCategories.firstChild) {
            this.#$modalAddTaskCategories.removeChild(this.#$modalAddTaskCategories.firstChild);
        }

        for (const category of categories) {
            this.#renderCategoryHtml(this.#createHtmlForCategory(category));
        }

    }

    #createHtmlForCategory(category) {

        let color;
        switch (category.color) {
            case 'red':
                color = "button-urgent";
                break;
            case 'yellow':
                color = "button-important";
                break;
            case 'purple':
                color = "button-later";
                break;
            case 'green':
                color = "button-completed";
                break;
        }
        return `<button data-category_id="${category.id}" id="${category.id} type="button" class="button surface-button ${color}">${category.description}</button>`
    }

    #renderCategoryHtml(categoryHtml) {
        this.#$categoriesList.insertAdjacentHTML(`beforeend`, categoryHtml);
        this.#$modalAddTaskCategories.insertAdjacentHTML(`beforeend`, categoryHtml);

    }

    findTargetCategoryId(element) {
        if (element.id == 'categories-for-add-task') {
            return null
        }

        if (element.dataset.category_id !== null && element.dataset.category_id !== undefined) {
            return element.dataset.category_id
        }

        return this.findTargetCategoryId(element.parentNode)
    }
}