import { TasksStore, UpdateTasksStoreEvent } from './tasks_store.js'
import { CategoriesStore } from './categories_store.js'
import { FiltersStore, UpdateFiltersStoreEvent } from './filters_store.js'
import { TasksView, UpdateTaskDeleteViewEvent, UpdateTaskIsCompletedViewEvent } from './tasks_view.js';
import { FiltersView, UpdateFiltersViewEvent } from './filters_view.js';
import { TasksCounterView } from './tasks_counter_view.js';
import { TasksClearCompletedView, UpdateTasksClearCompletedViewEvent } from './tasks_clear_completed_view.js'


class App {
    #tasksStore;
    #tasksView
    #categoriesStore;
    #filtersStore;
    #filtersView;
    #tasksCounterView;
    #tasksClearCompletedView;


    constructor() {
        this.#tasksStore = new TasksStore();
        this.#tasksView = new TasksView();

        this.#categoriesStore = new CategoriesStore();

        this.#filtersStore = new FiltersStore();
        this.#filtersView = new FiltersView();

        this.#tasksCounterView = new TasksCounterView();

        this.#tasksClearCompletedView = new TasksClearCompletedView();
    }

    init() {

        this.#tasksStore.init()
        this.#filtersStore.init()
        this.#categoriesStore.init()
        this.#tasksView.init()
        this.#filtersView.init()
        this.#tasksClearCompletedView.init()

        // FIRST RENDER
        this.#tasksView.render(this.#tasksStore.findAll(), this.#filtersStore.activeFilter?.current)
        this.#filtersView.render(this.#filtersStore.activeFilter);
        this.#tasksCounterView.render(this.#tasksStore.findAll().length);

        // RUNTIME RENDER

        // STORE EVENTS
        this.#tasksStore.addEventListener(UpdateTasksStoreEvent.type, (e) => {
            this.#tasksView.render(e.tasks, this.#filtersStore.activeFilter?.current)
            this.#tasksCounterView.render(e.tasks.length);
            this.#tasksClearCompletedView.render(e.tasks > 0)

        });

        this.#filtersStore.addEventListener(UpdateFiltersStoreEvent.type, (e) => {
            this.#tasksView.render(this.#tasksStore.findAll(), e.activeFilter.current)
            this.#filtersView.render(e.activeFilter);

        });

        // VIEW EVENTS
        this.#filtersView.addEventListener(UpdateFiltersViewEvent.type, (e) => {
            this.#filtersStore.activeFilter = e.nextFilter;
        })

        this.#tasksView.addEventListener(UpdateTaskDeleteViewEvent.type, (e) => {
            this.#tasksStore.deleteTaskById(e.id);

        })

        this.#tasksView.addEventListener(UpdateTaskIsCompletedViewEvent.type, (e) => {
            this.#tasksStore.toggleTaskById(e.id);
        })

        this.#tasksClearCompletedView.addEventListener(UpdateTasksClearCompletedViewEvent.type, (e) => {
            this.#tasksStore.deleteAll();

        })

        // for (let i = 0; i < 100; i++) {
        //     let isCompleted = i % 2 == 0;

        //     this.#tasksStore.addTask('desciption: 1', [], isCompleted)
        // }
    }
}

const app = new App();
app.init();
