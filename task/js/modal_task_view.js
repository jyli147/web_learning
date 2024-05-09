export class UpdateCloseModalTasksViewEvent extends CustomEvent {
    static type = 'update_close_modal_view_event'

    constructor() {
        super(UpdateCloseModalTasksViewEvent.type)
    }
}

export class AddTaskRequestModalViewEvent extends CustomEvent {
    static type = 'add_task_request_modal_view_event'

    constructor(taskDescription, categoryId) {
        if (typeof categoryId !== 'number') {
            throw TypeError('CategoryId is not number');
        }

        super(AddTaskRequestModalViewEvent.type, { detail: { taskDescription, categoryId } })
    }

    get taskDescription() {
        return this.detail.taskDescription;
    }

    get categoryId() {
        return this.detail.categoryId;
    }

}

export class ModalTasksView extends EventTarget {
    init() { }

    openModal(categories) {
        this.#render(this.#createHtml(categories))

        window.addEventListener(`keydown`, this.#closeAfterTapOnEsc.bind(this))

        document.querySelector("#modal_add_task .modal").addEventListener("click", this.#clickOnModalAddTaskModal.bind(this));

        document.getElementById("modal_add_task").addEventListener("click", this.#clickOnModalAddTask.bind(this));

        this.#$modal.addEventListener("submit", this.#submit.bind(this));

        this.#$modalCategoriesList.addEventListener('click', this.#onClickModalCategoriesListListenner.bind(this))


        this.#$modal.classList.add("open");
    }


    #render(html) {
        this.#$modal.insertAdjacentHTML(`beforeend`, html);
    }

    #createHtml(categories) {
        return `<div class="modal">
            <h1 class="modal-title">CREATE TASK</h1>
            <form class="form-modal" id="form">
                <input class="input" type="text" id="modal_add_task__input" placeholder="Task description...">
                <div class="modal-categories">
                    <img class="img-modal" src="./img/category-left-line.png" alt="left line">
                    <h2 class="title-categories">Categories</h2>
                    <img class="img-modal" src="./img/category-right-line.png" alt="right line">
                </div>
                <div id="categories-for-add-task" class="modal-button scroll">
                    ${categories.map(this.#createHtmlForCategory).join('')}
                </div>
                <button class="submit_add-task" type="submit" id="submit">SUBMIT TASK</button>
            </form>
        </div>`
    }

    #createHtmlForCategory(category) {
        let color;
        switch (category.color) {
            case 'red':
                color = "button-urgent";
                break;
            case 'yellow':
                color = "button-important";
                break;
            case 'purple':
                color = "button-later";
                break;
            case 'green':
                color = "button-completed";
                break;
        }

        return `<a data-category_id="${category.id}" id="${category.id}" type="button" class="button surface-button ${color}">${category.description}</a>`;
    }

    #submit(e) {
        e.preventDefault();
        const taskDescription = this.#getTaskDescription();
        const isValidTaskDescription = this.#validateTaskDescription(taskDescription)

        if (!isValidTaskDescription) {
            this.#$modalAddTaskInput.classList.toggle('input-border');

            setTimeout(() => {
                this.#$modalAddTaskInput.classList.toggle('input-border');
            }, 10000);

            return;
        }

        if (this.#targetCategoryId == null) {
            alert('Категория не выбрана');
        }

        this.dispatchEvent(new AddTaskRequestModalViewEvent(taskDescription, this.#targetCategoryId));
    }


    closeModal() {
        window.removeEventListener(`keydown`, this.#closeAfterTapOnEsc)

        document.querySelector("#modal_add_task .modal")?.removeEventListener("click", this.#clickOnModalAddTaskModal);

        document.getElementById("modal_add_task").removeEventListener("click", this.#clickOnModalAddTask);

        this.#$modal.removeEventListener("submit", this.#submit);

        this.#$modal.classList.remove("open");

        this.#$modalCategoriesList?.removeEventListener('click', this.#onClickModalCategoriesListListenner)
        this.#targetCategoryId = null

        this.#dispose()
    }

    #closeAfterTapOnEsc(e) {
        if (e.key === "Escape") {
            this.dispatchEvent(new UpdateCloseModalTasksViewEvent(e));
        }
    }

    #clickOnModalAddTaskModal(e) {
        e._isClickWithInModal = true;
    }

    #clickOnModalAddTask(e) {
        if (e._isClickWithInModal) return;
        this.dispatchEvent(new UpdateCloseModalTasksViewEvent(e));
    }

    #dispose(html) {
        while (this.#$modal.firstChild) {
            this.#$modal.removeChild(this.#$modal.firstChild);
        }
    }

    get #$modalAddTaskInput() {
        return document.getElementById('modal_add_task__input');
    }

    get #$modalCategoriesList() {
        return document.getElementById('categories-for-add-task');
    }

    #targetCategoryId = null;
    #onClickModalCategoriesListListenner(e) {
        let targetCategoryId = e.target.dataset?.category_id
        if (targetCategoryId !== null && targetCategoryId !== undefined) {
            this.#targetCategoryId = Number(targetCategoryId);
        }
    }

    #getTaskDescription() {
        this.#$modalAddTaskInput?.focus();
        let taskDescription;
        if (this.#$modalAddTaskInput.value !== null && this.#$modalAddTaskInput.value !== undefined) {
            taskDescription = this.#$modalAddTaskInput.value
        }
        this.#$modalAddTaskInput.value = "";
        return taskDescription;
    }

    #validateTaskDescription(taskDescription) {
        return taskDescription.length > 0
    }

    get #$modal() {
        return document.getElementById('modal_add_task');
    }

    get #$submit() {
        return document.getElementById('submit');
    }
    get #$formAddTask() {
        return document.getElementById(`form`);
    }

}


