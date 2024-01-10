// Модальное окно

document.getElementById("open-modal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open")
});
window.addEventListener(`keydown`, (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
});

// Кнопка очистки всех задач

const clearButton = document.getElementById('clearCompleted');
const taskList = document.getElementById('taskList');

// Функция для обработки клика по кнопке очистки
function clearTasks() {
    // Удаляем все дочерние элементы списка задач
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}
// Добавляем обработчик события клика по кнопке очистки
clearButton.addEventListener('click', clearTasks);



// Добавляем задачи
const form = document.querySelector(`#form`)
const add = document.getElementById('add');
const input = document.getElementById(`#input`);
const tasksList = document.getElementById(`#taskList`);

form.addEventListener(`submit`, function (event) {
    // Отменяем отправку формы
    event.preventDefault();
    //    Достаем текст из поля ввода задачи
    const taskText = input.value;
    console.log(taskText);
    // Разметка для задачи
    const taskHtml = `<div class="task">
    <label class="form">
        <input type="checkbox" class="real-checkbox">
        <span class="custom-checkbox"></span>
        <p class="subtitle">${taskText}</p>
    </label>
    <button type="button"
        class="button-right-panel surface-button button-urgent">Urgent</button>
</div>`
    // Добавить на страницу
    tasksList.insertAdjacentHTML(`beforeend`, taskHtml);

})



















// class Task {
//     constructor(id, description, categories, isCompleted = false) {
//         this.id = id;
//         this.description = description;
//         this.categories = categories;
//         this.isCompleted = isCompleted;
//     }

//     toggleCompleted() {
//         this.isCompleted = !this.isCompleted;
//     };

//     toString() {
//         return `id=${this.id}, title=${this.title}, description=${this.description}, isCompleted=${this.isCompleted}`;
//     }
// };


// class TaskList {
//     #tasks = [];

//     addTask(description, categories,) {
//         let task = new Task(this.#tasks.length + 1, description, categories,);
//         this.#tasks.push(task);
//         return task;
//     }
//     // addTask(taskDescription) {
//     //     let task = new Task(taskDescription);
//     //     this.#tasks.push(task);
//     //     return task;
//     // }
// }


// let myTasksList = new TaskList();

// add.onclick = () => {
//     let task = input.value;
//     if (task) {
//         console.log(myTasksList.addTask());
//     }
// }