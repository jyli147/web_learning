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
        return document.getElementById('clear-completed');
    }

    render(clearCompleted) {
        this.#removeOld();
        this.#renderHtml(this.#createHtmlForClearCompleted(clearCompleted));
    }

    #createHtmlForClearCompleted(clearCompleted) {
        let classesForClearCompleted = `button-clear-completed ${clearCompleted ? "button-clear-completed-active" : "button-clear-completed-not-active"}`;
        let disabled = clearCompleted ? "" : 'disabled="disabled"';
        return `
        <button  id="clear-completed" class="${classesForClearCompleted}" ${disabled}>Clear completed</button>
         `;
    }

    #renderHtml(html) {
        this.#$clearCompleted.insertAdjacentHTML(`beforeend`, html);
    }

    #removeOld() {
        while (this.#$clearCompleted.firstChild) {
            this.#$clearCompleted.removeChild(this.#$clearCompleted.firstChild);
        }
    }
}

