export class Task {
    #id;

    constructor(id, description, categories, isCompleted) {
        this.#id = id;
        this.description = description;
        this.categories = categories;
        this.isCompleted = isCompleted;
    }

    get id() {
        return this.#id;
    }
}

export class UpdateTasksStoreEvent extends CustomEvent {
    static type = 'update_tasks_store_event'

    constructor(tasks) {
        super(UpdateTasksStoreEvent.type, { detail: { tasks } })
    }

    get tasks() {
        return this.detail.tasks;
    }
}

export class TasksStore extends EventTarget {
    #localStorageKey;
    #internalData;

    constructor() {
        super();
        this.#localStorageKey = 'tasks_store'
    }

    get length() {
        return this.#internalData.tasks.length;
    }

    init() {
        this.#readFromLocalStorage();
    }

    findAll() {
        return [...this.#internalData.tasks];
    }

    addTask(description, categories, isCompleted) {
        let task = new Task(this.#internalData.lastTaskId + 1, description, categories, isCompleted);
        this.#internalData.lastTaskId = task.id;
        this.#internalData.tasks.push(task);
        this.#saveToLocalStorage()

        return task;
    }

    toggleTaskById(id) {
        let task = this.#internalData.tasks.find(item => item.id == id);
        task.isCompleted = !task.isCompleted;
        this.#saveToLocalStorage()

        return task;
    }

    deleteTaskById(id) {
        let index = this.#internalData.tasks.findIndex(item => item.id == id);
        let removed = this.#internalData.tasks.splice(index, 1);
        this.#saveToLocalStorage()

        return removed.length > 0 ? removed[0] : null;
    }

    deleteAll() {
        this.#internalData.tasks.splice(0, this.length);
        this.#saveToLocalStorage()
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
        this.#notifyUpdateTasksStoreEvent()
    }

    #notifyUpdateTasksStoreEvent() {
        this.dispatchEvent(new UpdateTasksStoreEvent(this.findAll()));
    }
}

class InternalData {
    static fromJson(json) {
        const lastTaskId = json?.lastTaskId ?? 0;
        const schemaVersion = json?.schemaVersion ?? 1;

        const tasks = (json?.tasks ?? []).map((taskJsonSource, index) => {
            return new Task(
                taskJsonSource.id ?? lastTaskId + index,
                taskJsonSource.description,
                taskJsonSource.categories,
                taskJsonSource.isCompleted
            )
        });

        return new InternalData(lastTaskId, tasks, schemaVersion)
    }

    constructor(lastTaskId, tasks, schemaVersion) {
        this.lastTaskId = lastTaskId;
        this.tasks = tasks;
        this.schemaVersion = schemaVersion;
    }

    toJson() {
        let preparedTasks = this.tasks.map((task) => {
            return {
                id: task.id,
                description: task.description,
                categories: task.categories,
                isCompleted: task.isCompleted,
            }
        });

        return {
            lastTaskId: this.lastTaskId,
            tasks: preparedTasks,
            schemaVersion: this.schemaVersion
        }
    }
}