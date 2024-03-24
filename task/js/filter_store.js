export class Filters {
    constructor(current) {
        this.current = current;
    }
}

export class UpdateFiltersStoreEvent extends CustomEvent {
    static type = 'update_filters_store_event';

    constructor(filter) {
        super(UpdateFiltersStoreEvent.type, { detail: { filter } })
    }
    get filter() {
        return this.detail.filter;
    }
}

export class FiltersStore extends EventTarget {
    #localStorageKey;
    #internalData;

    constructor() {
        super();
        this.#localStorageKey = 'filters_store'
    }

    init() {
        this.#readFromLocalStorage();
    }

    get activeFilter() {
        return Filters(this.#internalData.activeFilter);
    }

    set activeFilter(filter) {
        this.#internalData.activeFilter = filter;
        this.#saveToLocalStorage();
    }

    #readFromLocalStorage() {
        const internalDataSource = window.localStorage.getItem(this.#localStorageKey);
        const internalDataJson = JSON.parse(internalDataSource);
        this.#internalData = InternalData.fromJson(internalDataJson);
    }

    #saveToLocalStorage() {
        const internalDataJson = this.#internalData.toJson();
        const internalDataSource = JSON.stringify(internalDataJson);
        window.localStorage.setItem(this.#localStorageKey, internalDataSource);
        this.dispatchEvent(new UpdateTasksStoreEvent(this.#internalData.activeFilter));
    }

}

class InternalData {
    static fromJson(json) {
        const schemaVersion = json?.schemaVersion ?? 1;
        const activeFilter = json?.activeFilter ?? 'all';

        return new InternalData(schemaVersion, activeFilter)
    }

    constructor(schemaVersion, activeFilter) {
        this.schemaVersion = schemaVersion;
        this.activeFilter = activeFilter;
    }

    toJson() {
        return {
            schemaVersion: this.schemaVersion,
            activeFilter: this.activeFilter,
        }
    }
}
