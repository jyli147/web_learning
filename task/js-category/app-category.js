import { CategoriesStore, Category } from './store-category.js'

class App {
    #сategoriesStore;

    constructor() {
        this.#сategoriesStore = new CategoriesStore()
    }

    init() {
        this.#сategoriesStore.init()
    }

}

const app = new App();
app.init();

