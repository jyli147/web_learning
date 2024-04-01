export class UpdateTasksClearCompletedViewEvent extends CustomEvent {
    static type = 'update_tasks_clear_completed_view_event'

    constructor() {
        super(UpdateTasksClearCompletedViewEvent.type)
    }
}

export class TasksClearCompletedView extends EventTarget {
    init() {
        this.#$clearCompleted.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateTasksClearCompletedViewEvent(e));
        });
    }

    get #$clearCompleted() {
        return document.getElementById('clearCompleted');
    }

    render() { }
}