// Поиск
const form = document.getElementById(`form`)
const add = document.getElementById('add');
const input = document.getElementById(`input`);
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearCompleted');
const counter = document.getElementById('counter');

// Выбираем категорию

let linkedCategoryForAddTask;

function categoryLinkedCategoryForAddTask(event) {
    if (event.target.dataset.role === `category`) {
        linkedCategoryForAddTask = event.target;
    }
}
// Модальное окно add-task

document.getElementById("open-modal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open");
    document.getElementById("categories-for-add-task").addEventListener("click", categoryLinkedCategoryForAddTask);
});

window.addEventListener(`keydown`, (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
    document.getElementById("categories-for-add-task").removeEventListener("clic",
        linkedCategoryForAddTask = null
    )
    // if (e.key === "Escape" && document.getElementById("modal").classList.contains("open")) {
    //     document.getElementById("modal").classList.remove("open");
    //     linkedCategoryForAddTask = null;
    // }
});

document.querySelector("#modal .modal").addEventListener("click", (e) => {
    e._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener("click", (e) => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove("open");
});

// Закрытие модально окна после добавления задачи
add.addEventListener("click", (e) => {
    document.getElementById("modal").classList.remove("open")
});

// Модальное окно add-category

document.getElementById("open-modal-add-category").addEventListener("click", function () {
    document.getElementById("modal-add-category").classList.add("open")
});

// Закрытие модального окна по Es
window.addEventListener(`keydown`, (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-add-category").classList.remove("open")
    }
});

// Закрытие модального окна вне его поля
document.querySelector("#modal-add-category .modal").addEventListener("click", (e) => {
    e._isClickWithInModal = true;
});
document.getElementById("modal-add-category").addEventListener("click", (e) => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove("open");
});


let tasks = [];
let i = 5;


// Кнопка очистки всех задач

// Функция для обработки клика по кнопке очистки
function clearTasks() {
    // Удаляем все дочерние элементы списка задач
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Очищаем массив
    tasks.splice(0, tasks.length);

    i = 0;
    counter.textContent = i;
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

    // Добавляем в массив
    tasks.push(newTask);

    linkedCategoryForAddTask.classList.remove("button");
    linkedCategoryForAddTask.classList.add("button-right-panel");

    // Разметка для задачи
    const taskHtml = `<div id="${newTask.id}" class="task">
    <label class="form">
    <input type="checkbox" ${newTask.isCompleted ? "checked=checked" : ""} class="real-checkbox">
        <span class="custom-checkbox"></span>
        <p class="subtitle">${newTask.description}</p>
    </label>
    <div class="button-delete-category">
    <button class="delete surface-button" type="button" data-action="delete">х</button>
   ${linkedCategoryForAddTask.outerHTML}
    </div>
</div>`

    // Добавить на страницу
    taskList.insertAdjacentHTML(`beforeend`, taskHtml);

    // Очищение инпут и фокус на него
    input.value = "";
    input.focus();

    i++;
    counter.textContent = i;
}

// Удаляем задачи

taskList.addEventListener(`click`, deleteTask);

function deleteTask(event) {
    if (event.target.dataset.action !== `delete`) {
        return;
    }


    const parentNode = event.target.closest(`.task`);

    const id = Number(parentNode.id);

    // Поиск индекс и удаление
    const index = tasks.findIndex(function (task) {
        if (task.id === id)
            return true;
    })
    tasks.splice(index, 1);

    parentNode.remove();

    i--;
    counter.textContent = i;
}







console.log(tasks)


