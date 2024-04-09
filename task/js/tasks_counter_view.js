export class TasksCounterView {
    init() {
        // 
    }

    render(tasksAmount) {
        this.#removeOldHTML();
        this.#renderHtml(this.#createHTML(tasksAmount))
    }

    get #$tasksCounter() {
        return document.getElementById('counter');
    }

    #createHTML(tasksAmount) {
        return tasksAmount;
    }

    #renderHtml(html) {
        this.#$tasksCounter.insertAdjacentHTML(`beforeend`, html);
    }

    #removeOldHTML() {
        while (this.#$tasksCounter.firstChild) {
            this.#$tasksCounter.removeChild(this.#$tasksCounter.firstChild);
        }
    }

}

