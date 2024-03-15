class Filters {

    constructor(active, all, completed) {
        this.active = active;
        this.all = all;
        this.completed = completed;
    }

}

export class FiltersStore extends Filters {
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
        return this.#internalData.activeFilter;
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
    }

}

class InternalData {
    static fromJson(json) {
        const filteredTasks = json?.tasks ?? [];
        const schemaVersion = json?.schemaVersion ?? 1;
        const activeFilter = json?.activeFilter ?? 'all';

        return new InternalData(filteredTasks, schemaVersion, activeFilter)
    }

    constructor(filteredTasks, schemaVersion, activeFilter) {
        this.filteredTasks = filteredTasks;
        this.schemaVersion = schemaVersion;
        this.actiсveFilter = activeFilter;
    }

    toJson() {
        return {
            filteredTasks: this.filteredTasks,
            schemaVersion: this.schemaVersion,
            activeFilter: this.activeFilter,
        }
    }
}
