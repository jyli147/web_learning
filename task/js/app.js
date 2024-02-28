import { TasksStore, Task } from './store.js'

class App {
    #tasksStore;

    constructor() {
        this.#tasksStore = new TasksStore()
    }

    init() {
        this.#tasksStore.init()
    }

    test() {
        console.log('INIT: ')
        console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)

        // this.#tasksStore.deleteAll()
        // console.log('AFTER DELETE: ')
        // console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)

        const task = this.#tasksStore.addTask('some desc', [], false)
        console.log('AFTER ADD: ')
        console.log(`this.#tasksStore.length: ${this.#tasksStore.length}`)
        console.log(this.#tasksStore.findAll())

        console.log('AFTER TOGGLE: ')
        this.#tasksStore.toggleTaskById(task.id);
        console.log(this.#tasksStore.findAll())

        // console.log('AFTER DELETE BY ID: ')
        // this.#tasksStore.deleteTaskById(task.id);
        // console.log(this.#tasksStore.findAll())
    }
}

const app = new App();
app.init();

app.test();
