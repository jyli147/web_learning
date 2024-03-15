export class Filters {

    constructor(activeFilter, allFilter, completedFilter) {
        this.activeFilter = activeFilter;
        this.allFilter = allFilter;
        this.completedFilter = completedFilter;
    }

}

export class TasksStore {
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


export class UpdateFiltersStoreEvent extends CustomEvent {
    static type = 'current_filter_store_event'

    constructor(filters) {
        super(UpdateFiltersStoreEvent.type, { detail: { filters } })
    }

    get filters() {
        return this.detail.filters;
    }
}

// Проблемы реализации
// 1) не сохраняется текущее значение фильтра
// 2) в хранилище фильтров попают Tasks. Зависимость еще от одной модели

export class FiltersStore extends EventTarget {
    #localStorageKey;
    #filteredTasks = [];
    #internalData;

    constructor() {
        super();
        this.#localStorageKey = 'filters_store';
    }

    init() {
        this.#readFromLocalStorage();
    }

    getCurrentFilter() {
        // all | completed | active
        let returnedCurrentFilter = null;
        // [Task, Task, Task, Task, Task, Task] -- {length: 6}

        // true, true, true, true, true, true -- completed
        // false, false, false, false, false, false -- active
        // true, false, true, false, true, false -- all

        for (let i = 0; i < this.#filteredTasks.length; i++) {
            const filtedTask = this.#filteredTasks[i];

            if (returnedCurrentFilter == null) {
                returnedCurrentFilter = filtedTask.isCompleted ? "completed" : "active";
                continue;
            }

            if (filtedTask.isCompleted && returnedCurrentFilter == "completed") {
                continue;
            }

            if (!filtedTask.isCompleted && returnedCurrentFilter == "active") {
                continue;
            }

            returnedCurrentFilter = "all";
            break;
        }

        return returnedCurrentFilter ?? 'all';
    }

    activeFilter(tasks) {
        this.#filteredTasks = tasks.filter((task) => !task.isCompleted);
        this.#saveToLocalStorage();

        return this.#filteredTasks;
    }

    allFilter(tasks) {
        this.#filteredTasks = tasks;
        this.#saveToLocalStorage();

        return this.#filteredTasks;
    }

    completedFilter(tasks) {
        this.#filteredTasks = tasks.filter((task) => task.isCompleted);
        this.#saveToLocalStorage();

        return this.#filteredTasks;
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
        this.dispatchEvent(new UpdateFiltersStoreEvent(this.#filteredTasks));
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
