import { TasksStore, UpdateTasksStoreEvent } from './tasks_store.js'
import { Category, CategoriesStore, UpdateCategoriesStoreEvent } from './categories_store.js'
import { CategoriesView } from './categories_view.js'
import { FiltersStore, UpdateFiltersStoreEvent } from './filters_store.js'
import { TasksView, UpdateTaskDeleteViewEvent, UpdateTaskIsCompletedViewEvent } from './tasks_view.js';
import { FiltersView, UpdateFiltersViewEvent } from './filters_view.js';
import { TasksCounterView } from './tasks_counter_view.js';
import { TasksClearCompletedView, UpdateTasksClearCompletedViewEvent } from './tasks_clear_completed_view.js';
import { TasksCounterStore } from './tasks_counter_store.js';
import { ButtonAddTasksView, UpdateButtonAddTasksViewEvent } from './button_add_tasks_view.js';
import { ButtonAddCategoryView, UpdateButtonAddCategoryViewEvent } from './button_add_category_view.js'
import { ModalTasksView, UpdateCloseModalTasksViewEvent, AddTaskRequestModalViewEvent } from './modal_task_view.js'
import { ModalCategoriesView, UpdateCloseModalCategoriesViewEvent, AddCategoryRequestModalViewEvent, UpdateColorCategoriesViewEvent } from './modal_categories_view.js'



class App {
    #tasksStore;
    #tasksView
    #categoriesStore;
    #categoriesView;
    #filtersStore;
    #filtersView;
    #tasksCounterView;
    #tasksClearCompletedView;
    #tasksCounterStore
    #buttonAddTasksView
    #buttonAddCategoryView
    #modalTasksView
    #modalCategoriesView


    constructor() {
        this.#tasksStore = new TasksStore();
        this.#tasksView = new TasksView();

        this.#categoriesStore = new CategoriesStore();
        this.#categoriesView = new CategoriesView();

        this.#filtersStore = new FiltersStore();
        this.#filtersView = new FiltersView();

        this.#tasksCounterView = new TasksCounterView();
        this.#tasksCounterStore = new TasksCounterStore();

        this.#tasksClearCompletedView = new TasksClearCompletedView();

        this.#buttonAddTasksView = new ButtonAddTasksView();
        this.#buttonAddCategoryView = new ButtonAddCategoryView();

        this.#modalTasksView = new ModalTasksView();
        this.#modalCategoriesView = new ModalCategoriesView()




    }

    init() {

        this.#tasksStore.init()
        this.#filtersStore.init()
        this.#categoriesStore.init()
        this.#categoriesView.init()
        this.#tasksView.init()
        this.#filtersView.init()
        this.#tasksClearCompletedView.init()
        this.#tasksCounterStore.init()
        this.#buttonAddTasksView.init()
        this.#buttonAddCategoryView.init()
        this.#modalTasksView.init()
        this.#modalCategoriesView.init()

        // FIRST RENDER
        this.#tasksView.render(this.#tasksStore.findAll(), this.#filtersStore.activeFilter?.current)
        this.#filtersView.render(this.#filtersStore.activeFilter);
        this.#categoriesView.render(this.#categoriesStore.findAll());
        this.#tasksCounterView.render(this.#tasksCounterStore.findAmountOfTasksByFilter(this.#tasksStore.findAll(), this.#filtersStore.activeFilter.current));
        this.#tasksClearCompletedView.render(this.#tasksStore.findAll().length > 0);
        // RUNTIME RENDER

        // STORE EVENTS
        this.#tasksStore.addEventListener(UpdateTasksStoreEvent.type, (e) => {
            this.#tasksView.render(e.tasks, this.#filtersStore.activeFilter?.current)
            this.#tasksClearCompletedView.render(e.tasks.length > 0)
            this.#tasksCounterView.render(this.#tasksCounterStore.findAmountOfTasksByFilter(e.tasks, this.#filtersStore.activeFilter.current));

        });

        this.#filtersStore.addEventListener(UpdateFiltersStoreEvent.type, (e) => {
            this.#filtersView.render(e.activeFilter);
            this.#tasksView.render(this.#tasksStore.findAll(), e.activeFilter.current)
            this.#tasksCounterView.render(this.#tasksCounterStore.findAmountOfTasksByFilter(this.#tasksStore.findAll(), e.activeFilter.current));
        });

        this.#categoriesStore.addEventListener(UpdateCategoriesStoreEvent.type, (e) => {
            this.#categoriesView.render(e.categories);

        })

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

        this.#buttonAddTasksView.addEventListener(UpdateButtonAddTasksViewEvent.type, (e) => {
            this.#modalTasksView.openModal(this.#categoriesStore.findAll());
        })

        this.#buttonAddCategoryView.addEventListener(UpdateButtonAddCategoryViewEvent.type, (e) => {
            this.#modalCategoriesView.openModal();
        })

        this.#modalTasksView.addEventListener(UpdateCloseModalTasksViewEvent.type, (e) => {
            this.#modalTasksView.closeModal(e);
        })

        this.#modalCategoriesView.addEventListener(UpdateCloseModalCategoriesViewEvent.type, (e) => {
            this.#modalCategoriesView.closeModal(e);
        })

        this.#modalTasksView.addEventListener(AddTaskRequestModalViewEvent.type, (e) => {
            this.#tasksStore.addTask(
                e.taskDescription,
                this.#categoriesStore.findTargetCategoryId(e.categoryId),
                false,
            );

            this.#modalTasksView.closeModal();
        })

        this.#modalCategoriesView.addEventListener(AddCategoryRequestModalViewEvent.type, (e) => {
            this.#categoriesStore.addCategory(e.categoryDescription, e.color);
            this.#modalCategoriesView.closeModal(e);
        })







        //     for (let i = 0; i < 10; i++) {
        //         let isCompleted = i % 2 == 0;

        //         this.#tasksStore.addTask('desciption: 1', [], isCompleted)
        //     }
    }
}

const app = new App();
app.init();
