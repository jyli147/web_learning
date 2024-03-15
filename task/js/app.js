import { TasksStore, UpdateTasksStoreEvent } from './tasks_store.js'
import { CategoriesStore } from './categories_store.js'
import { FiltersStore } from './filter_store.js'


class App {
    #tasksStore;
    #categoriesStore;
    #filtersStore;


    constructor() {
        this.#tasksStore = new TasksStore();
        this.#categoriesStore = new CategoriesStore();
        this.#filtersStore = new FiltersStore();

    }

    init() {
        this.#tasksStore.init()
        this.#categoriesStore.init()
        this.#filtersStore.init()


        this.#tasksStore.addEventListener(UpdateTasksStoreEvent.type, (e) => {
            this.#renderTasks(e.tasks);

        })

        function filtersTask(e) {
            let returnedCurrentFilter = e.target.dataset.filters;
            let tasks = this.#tasksStore.findAll();

            for (let i = 0; i < tasks.length; i++) {
                const filtedTask = tasks[i];

                if (returnedCurrentFilter == null) {
                    returnedCurrentFilter = filtedTask.isCompleted ? "completed" : "active";
                    continue;
                }

                if (filtedTask.isCompleted && returnedCurrentFilter == "completed") {
                    continue;
                }

                if (!filtedTask.isCompleted && returnedCurrentFilter == "active") {
                    continue;
                }

                returnedCurrentFilter = "all";
                break;
            }

            renderTasks(tasks, returnedCurrentFilter);
        }

        document.getElementById('filters').addEventListener('click', filtersTask);





        // if (e.tasks.length == 0) {
        //     // скрыть/заблокировать фильтры (renderFilters({isBlock:true}))
        // }

        // добавить слушатель к filtersStore на изменение текущго фильра
        // вызвать функцию рендеринга

        // this.#filtersStore.activeFilter(this.#tasksStore.findAll());

        // [TasksStore] [CategoriesStore] [FiltersStore]
        //           |       |              |
        //           ------ [App]------------
        // 
        // 1) пользователь выбрал завершенные задачи
        // 2) событие попадает App -- App получает конкретный Event и знает что с ним делать
        // -- выполнение event от 1
        // 3) App вызывает метод this.#tasksStore.findAll() -- получает все задачи
        // 4) App вызывает метод FiltersStore.completedFilter и передавет результат из 3
        // 5) App реагирует на событие UpdateFiltersStoreEvent и вызывает метод рендеринга задач
    }

    test() {
        //     console.log('INIT: ')
        //     console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)

        //     this.#tasksStore.deleteAll()
        //     console.log('AFTER DELETE: ')
        //     console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)

        const task = this.#tasksStore.addTask('some desc', [], false)
        console.log('AFTER ADD: ')
        console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)
        console.log(this.#tasksStore.findAll())


        //     console.log('AFTER TOGGLE: ')
        //     this.#tasksStore.toggleTaskById(task.id);
        //     console.log(this.#tasksStore.findAll())

        //     console.log('AFTER DELETE BY ID: ')
        //     this.#tasksStore.deleteTaskById(task.id);
        //     console.log(this.#tasksStore.findAll())
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
