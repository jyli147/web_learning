export class CategoriesView extends EventTarget {
    get #$categoriesList() {
        return document.getElementById('categories_list');
    }

    init() {

        //    
    }

    render(categories) {

        while (this.#$categoriesList.firstChild) {
            this.#$categoriesList.removeChild(this.#$categoriesList.firstChild);
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
    }


}