export class TasksCounterStore {
    #localStorageKey;
    #internalData;

    constructor() {
        this.#localStorageKey = 'tasks_counter_store';
    }

    init() {

        this.#readFromLocalStorage();
    }


    findAmountOfTasksByFilter(tasks, filter) {

        switch (filter) {
            case 'active':
                this.#internalData.filteredCounterTasks = tasks.filter((task) => !task.isCompleted);
                break;
            case 'all':
                this.#internalData.filteredCounterTasks = tasks;
                break;
            case 'completed':
                this.#internalData.filteredCounterTasks = tasks.filter((task) => task.isCompleted);
                break;

        }

        this.#saveToLocalStorage();
        return this.#internalData.filteredCounterTasks.length;
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
        const filteredCounterTasks = json?.filteredCounterTasks ?? [];
        const schemaVersion = json?.schemaVersion ?? 1;

        return new InternalData(filteredCounterTasks, schemaVersion)
    }

    constructor(filteredCounterTasks, schemaVersion) {
        this.filteredCounterTasks = filteredCounterTasks;
        this.schemaVersion = schemaVersion;

    }

    toJson() {
        return {
            filteredCounterTasks: this.filteredCounterTasks,
            schemaVersion: this.schemaVersion
        }
    }
}
