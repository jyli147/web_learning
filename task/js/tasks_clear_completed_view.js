export class UpdateTasksClearCompletedViewEvent extends CustomEvent {
    static type = 'update_tasks_clear_completed_view_event'

    constructor(clearCompleted) {
        super(UpdateTasksClearCompletedViewEvent.type, { detail: { clearCompleted } })
    }

    get clearCompleted() {
        return this.detail.clearCompleted;
    }

}

export class TasksClearCompletedView {
    init() {
        this.#$clearCompleted.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateTasksClearCompletedViewEvent(e.target));
        });
    }

    get #$clearCompleted() {
        return document.getElementById('clearCompleted');
    }

    render() {
        while (this.#$taskList.firstChild) {
            this.#$taskList.removeChild(this.#$taskList.firstChild);
        }
    }

    get #$taskList() {
        return document.getElementById('taskList');
    }
}