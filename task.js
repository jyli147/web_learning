let _lastId = 0;
function Task(title, description, dueDate, duration, isCompleted = false) {
    this.id = _lastId += 1;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.duration = duration;
    this._isCompleted = isCompleted;

    this.complete = function () {
        this._isCompleted = true;
    }

    this.toggle = function () {
        if (this._isCompleted === false) {
            this._isCompleted = true;
        } else {
            this._isCompleted = false;
        }

        // this._isCompleted = !this._isCompleted;
    }
}

function TaskList() {
    this._tasks = [];

    this.addTask = function (task) {
        this._tasks.push(task);
    }

    this.removeTask = function (task) {
        let index = this._tasks.indexOf(task);
        if (index !== -1) {
            this._tasks.splice(index, 1);
        }
    }


    this.toggleTaskCompleter = function (task) {
        let index = this._tasks.indexOf(task);
        if (index !== -1) {
            this._tasks[index].toggle();
        }
    }

    this.getAmountOfCompleted = function () {
        return this._tasks.reduce((acc, item) => item._isCompleted ? acc + 1 : acc, 0);
    }

    this.getAmountOfNotCompleted = function () {
        let amount = 0;
        for (let i = 0; i < this._tasks.length - 1; i++) {
            let task = this._tasks[i];
            if (task != null && !task._isCompleted) {
                amount += 1;
            }
        }

        return amount;
    }
}

let taskList = new TaskList();


let buyBread = new Task('Купить хлеба', 'Черный и белый', Date.now(), 20);
taskList.addTask(buyBread);
taskList.addTask(new Task('Купить хлеба', 'Черный и белый', Date.now(), 20));
taskList.addTask(new Task('Купить хлеба', 'Черный и белый', Date.now(), 20));
taskList.addTask(new Task('Купить хлеба', 'Черный и белый', Date.now(), 20));
taskList.addTask(new Task('Купить хлеба', 'Черный и белый', Date.now(), 20));

console.log(taskList.getAmountOfCompleted());
console.log(taskList.getAmountOfNotCompleted());
taskList.toggleTaskCompleter(buyBread);
console.log(taskList.getAmountOfCompleted());
console.log(taskList.getAmountOfNotCompleted());