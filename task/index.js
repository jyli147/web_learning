// Модальное окно

document.getElementById("open-modal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open")
});
window.addEventListener(`keydown`, (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
});




let tasks = [];
let i = tasks.length;
// Поиск

const form = document.getElementById(`form`)
const add = document.getElementById('add');
const input = document.getElementById(`input`);
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearCompleted');
const counter = document.getElementById('counter');

// Кнопка очистки всех задач

// Функция для обработки клика по кнопке очистки
function clearTasks() {
    // Удаляем все дочерние элементы списка задач
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Очищаем массив
    tasks.splice(0, tasks.length);
}
// Добавляем обработчик события клика по кнопке очистки
clearButton.addEventListener('click', clearTasks);


// Добавляем задачи

form.addEventListener(`submit`, addTask);

function addTask(event) {
    // Отменяем отправку формы
    event.preventDefault();
    //    Достаем текст из поля ввода задачи

    const taskText = input.value;

    if (input.value.trim() === "") return

    // Описание задачи работа с данными
    const newTask = {
        id: Date.now(),
        description: taskText,
        // categories: categories,
        isCompleted: true,
    }

    const checkbox = newTask.isCompleted ? "custom-checkbox::before" : "custom-checkbox";

    // Добавляем в массив
    tasks.push(newTask);

    // Разметка для задачи
    const taskHtml = `<div id="${newTask.id}" class="task">
    <label class="form">
        <input type="checkbox" class="real-checkbox">
        <span class="${checkbox}"></span>
        <p class="subtitle">${newTask.description}</p>
    </label>
    <div class="button-delete-category">
    <button type="button" data-action="delete">х</button>
    <button type="button" class="button-right-panel surface-button button-completed">Completed</button>
    </div>
</div>`

    // Добавить на страницу
    taskList.insertAdjacentHTML(`beforeend`, taskHtml);

    i++;
    counter.textContent = i;

    // Очищение инпут и фокус на него
    input.value = "";
    input.focus();
}

// Удаляем задачи

taskList.addEventListener(`click`, deleteTask);

function deleteTask(event) {
    if (event.target.dataset.action !== `delete`) {
        return;
    }

    i--;
    counter.textContent = i;

    const parentNode = event.target.closest(`.task`);

    const id = Number(parentNode.id);

    // Поиск индекс и удаление
    const index = tasks.findIndex(function (task) {
        if (task.id === id)
            return true;
    })
    tasks.splice(index, 1);

    parentNode.remove();
}

// Не появляется чекбокс в состоянии true
// Не знаю как привязать категории, чтобы их можно было выбирать
// Модальное окно
// Не работает счетчик задач


console.log(tasks)



























// Добавляю в скрол из-за

// Элементы похожие.радиокнопки.При выборе кнопки
// всегда активные.Нужны ли всегда кнопки.Проверка
// на пустую задачу, чтобы она не была пуста, проверить
// value на длинну
// Функция трим.

// Проверка инпута на задачу





// // class Task {
// //     constructor(id, description, categories, isCompleted = false) {
// //         this.id = id;
// //         this.description = description;
// //         this.categories = categories;
// //         this.isCompleted = isCompleted;
// //     }

// //     toggleCompleted() {
// //         this.isCompleted = !this.isCompleted;
// //     };

// //     toString() {
// //         return `id=${this.id}, title=${this.title}, description=${this.description}, isCompleted=${this.isCompleted}`;
// //     }
// // };


// // class TaskList {
// //     #tasks = [];

// //     addTask(description, categories,) {
// //         let task = new Task(this.#tasks.length + 1, description, categories,);
// //         this.#tasks.push(task);
// //         return task;
// //     }


// // }


// // let myTasksList = new TaskList();

// // add.onclick = () => {
// //     let task = input.value;
// //     if (task) {
// //         console.log(myTasksList.addTask());
// //     }
// // }
