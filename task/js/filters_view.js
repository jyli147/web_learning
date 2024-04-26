export class UpdateFiltersViewEvent extends CustomEvent {
    static type = 'update_filters_view_event'

    constructor(nextFilter) {
        super(UpdateFiltersViewEvent.type, { detail: { nextFilter } })
    }

    get nextFilter() {
        return this.detail.nextFilter;
    }
}

export class FiltersView extends EventTarget {
    init() {

        this.#$filters.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateFiltersViewEvent(e.target.dataset.filters));
        });
    }

    render(currentFilter) {
        this.#removeOldFilters();
        this.#renderHtml(this.#createHtmlForFilters(currentFilter))
    }

    get #$filters() {
        return document.getElementById('filters');
    }

    #createHtmlForFilters(currentFilter) {
        let classesForActive = `button-filters ${currentFilter.current == 'active' ? 'button-filters-active' : 'button-filters-not-active'}`;
        let classesForAll = `button-filters ${currentFilter.current == 'all' ? 'button-filters-active' : 'button-filters-not-active'}`;
        let classesForCompleted = `button-filters ${currentFilter.current == 'completed' ? 'button-filters-active' : 'button-filters-not-active'}`;

        return `
        <button data-filters="active" type="button" class="${classesForActive}">Active</button>
        <button data-filters="all" type="button" class="${classesForAll}">All</button>
        <button data-filters="completed" type="button" class="${classesForCompleted}">Сompleted</button>
        `;
    }

    #renderHtml(html) {
        this.#$filters.insertAdjacentHTML(`beforeend`, html);
    }

    #removeOldFilters() {
        while (this.#$filters.firstChild) {
            this.#$filters.removeChild(this.#$filters.firstChild);
        }
    }
}