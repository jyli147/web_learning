export class UpdateTaskDeleteViewEvent extends CustomEvent {
    static type = 'update_task_delete_view_event'

    constructor(id) {
        super(UpdateTaskDeleteViewEvent.type, { detail: { id } })
    }

    get id() {
        return this.detail.id;
    }

}
export class UpdateTaskIsCompletedViewEvent extends CustomEvent {
    static type = 'update_task_is_completed_view_event'

    constructor(id) {
        super(UpdateTaskIsCompletedViewEvent.type, { detail: { id } })
    }

    get id() {
        return this.detail.id;
    }

}

export class TasksView extends EventTarget {
    get #$taskList() {
        return document.getElementById('taskList');
    }

    init() {
        this.#$taskList.addEventListener('click', (e) => {
            const actionType = this.#findTargetActionType(e.target);
            const taskId = this.#findTargetTaskId(e.target);
            const dispatch = this.#taskElementActionToDispatchMap[actionType]

            if (dispatch !== null && dispatch !== undefined) {
                return dispatch(taskId)
            }
        });
    }

    #taskElementActionToDispatchMap = {
        "delete": (taskId) => this.dispatchEvent(new UpdateTaskDeleteViewEvent(taskId)),
        "toggle-id-completed": (taskId) => this.dispatchEvent(new UpdateTaskIsCompletedViewEvent(taskId)),
    }

    #findTargetActionType(element) {
        if (element.id == 'taskList') {
            return null
        }

        if (element.dataset.action_type !== null && element.dataset.action_type !== undefined) {
            return element.dataset.action_type
        }

        return this.#findTargetActionType(element.parentNode)
    }

    #findTargetTaskId(element) {
        if (element.id == 'taskList') {
            return null
        }

        if (element.dataset.task_id !== null && element.dataset.task_id !== undefined) {
            return element.dataset.task_id
        }

        return this.#findTargetTaskId(element.parentNode)
    }

    render(tasks, filter) {

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

    #createHtmlForTask(task) {
        let category = task.categories;
        let categoryHtml = '';
        if (category !== null && category !== undefined) {
            categoryHtml = `
            <button data-category_id="${category.id}" id="${category.id} type="button" class="button-right-panel surface-button" style="background-color: ${category.color}">
                    ${category.description ?? 'unknown'}
                </button>
            `
        }

        return `<div id="${task.id}" class="task" data-task_id="${task.id}">
            <label class="form" data-action_type="toggle-id-completed" >
                <input id="input" data-input="input" type="checkbox" ${task.isCompleted ? "checked=checked" : ""} class="real-checkbox">
                <span class="custom-checkbox"></span>
                <p class="subtitle ${task.isCompleted ? 'subtitle-through' : ''}" >${task.description}</p>
            </label>
            <div class="button-delete-category">
                <button id="delete" class="delete surface-button" type="button"  data-action_type="delete">х</button>
                ${categoryHtml}
            </div>
            
        </div>`
    }

    #renderTaskHtml(taskHtml) {
        this.#$taskList.insertAdjacentHTML(`beforeend`, taskHtml);
    }
}




