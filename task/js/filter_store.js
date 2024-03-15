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
        this.activeFilter = activeFilter;
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

        return new InternalData(filteredTasks, schemaVersion)
    }

    constructor(filteredTasks, schemaVersion) {
        this.filteredTasks = filteredTasks;
        this.schemaVersion = schemaVersion;
    }

    toJson() {
        return {
            filteredTasks: this.filteredTasks,
            schemaVersion: this.schemaVersion
        }
    }
}
