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
                this.#internalData.filteredTasks = tasks.filter((task) => !task.isCompleted);
                break;
            case 'all':
                this.#internalData.filteredTasks = tasks;
                break;
            case 'completed':
                this.#internalData.filteredTasks = tasks.filter((task) => task.isCompleted);
                break;

        }
        this.#saveToLocalStorage();
        return this.#internalData.filteredTasks.length;
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
