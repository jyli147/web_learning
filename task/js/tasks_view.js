export class UpdateTaskDeleteViewEvent extends CustomEvent {
    static type = 'update_task_delete_view_event'

    constructor(taskDelete) {
        super(UpdateTaskDeleteViewEvent.type, { detail: { taskDelete } })
    }

    get taskDelete() {
        return this.detail.taskDelete;
    }

}
export class UpdateTaskIsCompletedViewEvent extends CustomEvent {
    static type = 'update_task_is_completed_view_event'

    constructor(isCompleted) {
        super(UpdateTaskIsCompletedViewEvent.type, { detail: { isCompleted } })
    }

    get isCompleted() {
        return this.detail.isCompleted;
    }

}

export class TasksView extends EventTarget {

    get #$taskDelete() {
        return document.getElementById('delete');
    }

    get #$isCompleted() {
        return document.getElementById('input');
    }

    init() {
        this.#$taskDelete.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateTaskDeleteViewEvent(e.target));
        });
        this.#$isCompleted.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateTaskIsCompletedViewEvent(e.target));
        });
    }

    render(tasks, filter = 'all') {
        if (!Array.isArray(tasks) || typeof filter !== 'string') {
            throw 'tasks and filter are required'
        }

        while (this.#$taskList.firstChild) {
            this.#$taskList.removeChild(this.#$taskList.firstChild);
        }

        let filteredTasks = [];
        switch (filter) {
            case 'active':
                filteredTasks = tasks.filter((task) => !task.isCompleted);
                break;
            case 'all':
                filteredTasks = tasks;
                break;
            case 'completed':
                filteredTasks = tasks.filter((task) => task.isCompleted);
                break;
            default:
                throw Error(`unknown filter type: ${currentFilter}`);

        }

        for (const task of filteredTasks) {
            this.#renderTaskHtml(this.#createHtmlForTask(task));
        }
    }

    get #$taskList() {
        return document.getElementById('taskList');
    }

    #createHtmlForTask(task) {
        return `<div id="${task.id}" class="task">
        <label class="form">
        <input id="input" data-input="input" type="checkbox" ${task.isCompleted ? "checked=checked" : ""} class="real-checkbox">
            <span class="custom-checkbox"></span>
            <p class="subtitle ${task.isCompleted ? 'subtitle-through' : ''}">${task.description}</p>
        </label>
            <div class="button-delete-category">
                <button id="delete" class="delete surface-button" type="button" data-action="delete">х</button>
                <button type="button" class="button-right-panel surface-button button-urgent">${task.categories}</button>
            </div>
        </div>`
    }

    #renderTaskHtml(taskHtml) {
        this.#$taskList.insertAdjacentHTML(`beforeend`, taskHtml);
    }
}