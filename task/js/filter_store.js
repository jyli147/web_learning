export class UpdateFiltersStoreEvent extends CustomEvent {
    static type = 'current_filter_store_event'

    constructor(filters) {
        super(UpdateFiltersStoreEvent.type, { detail: { filters } })
    }

    get filters() {
        return this.detail.filters;
    }
}


export class FiltersStore extends EventTarget {
    #localStorageKey;
    #filteredTasks = [];

    constructor() {
        super();
        this.#localStorageKey = 'filters_store';
    }

    init() {
        this.#readFromLocalStorage();
    }

    activeFilter(tasks) {
        this.#filteredTasks = tasks.filter((task) => !task.isCompleted);
        this.dispatchEvent(new UpdateFiltersStoreEvent(this.#filteredTasks));
        this.#saveToLocalStorage();

        return this.#filteredTasks;
    }

    allFilter(tasks) {
        this.#filteredTasks = tasks;
        this.dispatchEvent(new UpdateFiltersStoreEvent(this.#filteredTasks));
        this.#saveToLocalStorage();

        return this.#filteredTasks;
    }

    completedFilter(tasks) {
        this.#filteredTasks = tasks.filter((task) => task.isCompleted);
        this.dispatchEvent(new UpdateFiltersStoreEvent(this.#filteredTasks));
        this.#saveToLocalStorage();

        return this.#filteredTasks;
    }

    #readFromLocalStorage() {
        const filterDataSource = window.localStorage.getItem(this.#localStorageKey);
        const filterDataJson = JSON.parse(filterDataSource);
        this.#filteredTasks.fromJson(filterDataJson);
    }

    #saveToLocalStorage() {
        const filterDataJson = this.#filteredTasks.toJson();
        const filterDataSource = JSON.stringify(filterDataJson);
        window.localStorage.setItem(this.#localStorageKey, filterDataSource);
    }
}
