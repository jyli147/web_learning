import { TasksStore, UpdateTasksStoreEvent } from './tasks_store.js'
import { CategoriesStore } from './categories_store.js'
import { UpdateFiltersStoreEvent, FiltersStore } from './filter_store.js'


class App {
    #tasksStore;
    #categoriesStore;
    #filtersStore;

    constructor() {
        this.#tasksStore = new TasksStore()
        this.#categoriesStore = new CategoriesStore()
        this.#filtersStore = new FiltersStore()
    }

    init() {
        this.#tasksStore.init()
        this.#categoriesStore.init()

        this.#tasksStore.addEventListener(UpdateTasksStoreEvent.type, (e) => {
            this.#renderTasks(e.tasks);
        })
    }

    test() {
        // console.log('INIT: ')
        // console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)

        // this.#tasksStore.deleteAll()
        // console.log('AFTER DELETE: ')
        // console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)

        const task = this.#tasksStore.addTask('some desc', [], false)
        // console.log('AFTER ADD: ')
        // console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)
        // console.log(this.#tasksStore.findAll())

        // console.log('AFTER TOGGLE: ')
        // this.#tasksStore.toggleTaskById(task.id);
        // console.log(this.#tasksStore.findAll())

        // console.log('AFTER DELETE BY ID: ')
        // this.#tasksStore.deleteTaskById(task.id);
        // console.log(this.#tasksStore.findAll())
    }

    get #taskList() {
        return document.getElementById('taskList');
    }

    #renderTasks(tasks, filter = 'all') {
        if (!Array.isArray(tasks) || typeof filter !== 'string') {
            throw 'tasks and filter are required'
        }
        while (this.#taskList.firstChild) {
            this.#taskList.removeChild(this.#taskList.firstChild);
        }

        const filteredTasks = tasks.filter(function (task) {
            return filter === 'all' || (filter === 'active' && !task.completed) || (filter === 'completed' && task.completed);
        });

        for (const task of filteredTasks) {
            this.#renderTaskHtml(this.#createHtmlForTask(task));
        }
    }


    #createHtmlForTask(task) {
        return `<div id="${task.id}" class="task">
        <label class="form">
        <input data-input="input" type="checkbox" ${task.isCompleted ? "checked=checked" : ""} class="real-checkbox">
            <span class="custom-checkbox"></span>
            <p class="subtitle ${task.isCompleted ? 'subtitle-through' : ''}">${task.description}</p>
        </label>
            <div class="button-delete-category">
                <button class="delete surface-button" type="button" data-action="delete">х</button>
                <button type="button" class="button-right-panel surface-button button-urgent">${task.categories}</button>
            </div>
        </div>`
    }

    #renderTaskHtml(taskHtml) {
        this.#taskList.insertAdjacentHTML(`beforeend`, taskHtml);
    }
}

const app = new App();
app.init();

app.test();
