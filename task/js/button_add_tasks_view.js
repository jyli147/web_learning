export class UpdateButtonAddTasksViewEvent extends CustomEvent {
    static type = 'update_button_add_tasks_view_event'

    constructor() {
        super(UpdateButtonAddTasksViewEvent.type)
    }
}

export class ButtonAddTasksView extends EventTarget {
    init() {
        this.#$buttonAddTasks.addEventListener('click', (e) => {
            this.dispatchEvent(new UpdateButtonAddTasksViewEvent(e));
        });
    }

    get #$buttonAddTasks() {
        return document.getElementById('open-modal');
    }
}