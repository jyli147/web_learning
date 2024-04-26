export class UpdateCloseModalTasksViewEvent extends CustomEvent {
    static type = 'update_close_modal_view_event'

    constructor() {
        super(UpdateCloseModalTasksViewEvent.type)
    }
}


export class AddTaskRequestModalViewEvent extends CustomEvent {
    static type = 'add_task_request_modal_view_event'

    constructor(taskDescription) {
        super(AddTaskRequestModalViewEvent.type, { detail: { taskDescription } })
    }

    get taskDescription() {
        return this.detail.taskDescription;
    }

    get categoryId() {
        return null;
    }
}

export class ModalTasksView extends EventTarget {
    init() {
        window.addEventListener(`keydown`, (e) => {
            if (e.key === "Escape") {
                this.dispatchEvent(new UpdateCloseModalTasksViewEvent(e));
            }
        })

        document.querySelector("#modal_add_task .modal").addEventListener("click", (e) => {
            e._isClickWithInModal = true;
        });
        document.getElementById("modal_add_task").addEventListener("click", (e) => {
            if (e._isClickWithInModal) return;
            this.dispatchEvent(new UpdateCloseModalTasksViewEvent(e));
        });

        // event - AddNewTaskRequestEvent (1. Данные 2. app можно закрыть окно)
        // AddNewTaskRequestEvent.taskDescription
        // AddNewTaskRequestEvent.taskCategory
        // AddNewTaskRequestEvent
        // To grab all dependencies fields and
        this.#$submit.addEventListener("click", (e) => {
            e.preventDefault();
            const taskDescription = this.#getTaskDescription();
            const isValidTaskDescription = this.#validateTaskDescription(taskDescription)

            if (!isValidTaskDescription) {
                alert('Неверное значение поля "TaskDescription"')
                return;
            }

            this.dispatchEvent(new AddTaskRequestModalViewEvent(taskDescription));
        });

    }

    get #$modalAddTaskInput() {
        return document.getElementById('modal_add_task__input');
    }

    #getTaskDescription() {
        this.#$modalAddTaskInput.focus();
        let taskDescription = this.#$modalAddTaskInput.value;
        this.#$modalAddTaskInput.value = "";
        return taskDescription;
    }

    #validateTaskDescription(taskDescription) {
        return taskDescription.length > 0
    }

    openModal() {
        this.#$modal.classList.add("open");
    }

    get #$modal() {
        return document.getElementById('modal_add_task');
    }

    get #$submit() {
        return document.getElementById('submit');
    }

    closeModal() {
        this.#$modal.classList.remove("open");
    }

}
