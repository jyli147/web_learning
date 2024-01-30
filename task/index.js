// Поиск
const form = document.getElementById(`form`)
const add = document.getElementById('add');
const input = document.getElementById(`input`);
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearCompleted');
const counter = document.getElementById('counter');
const filters = document.getElementById('filters');
const checkboxies = document.getElementsByClassName('task-checkbox-toggler');

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

    const newCategories = linkedCategoryForAddTask.textContent;

    // Описание задачи работа с данными
    const newTask = {
        id: Date.now(),
        description: taskText,
        categories: newCategories,
        isCompleted: false,
    }


    // Добавляем в массив
    tasks.push(newTask);

    linkedCategoryForAddTask.classList.remove("button");
    linkedCategoryForAddTask.classList.add("button-right-panel");

    // Разметка для задачи
    const taskHtml = createHtmlForTask(newTask);

    // Добавить на страницу
    renderTaskHtml(taskHtml)

    // Очищение инпут и фокус на него
    input.value = "";
    input.focus();

    i++;
    counter.textContent = i;
};

Array.from(checkboxies).forEach(checkbox => {
    checkbox.addEventListener('click', updateTaskIsCompleted);
});

function updateTaskIsCompleted(e) {
    const taskId = e.target.getAttribute('id');
    if (!taskId) {
        alert('Задача не найдена');
    }
    let task = tasks.find(item => item.id === id);

    if (task == taskId) {
        tasks.isCompleted = !tasks.isCompleted;
    }
}

// Use Case (пользовательский сценарий, сценарий использования)
// за реализацию use case отвечает контроллер
//
// 1) получить id задачи
// 1.1) валидировать id
// 1.2) если id не валидный, показать ошибку
// 2) найти задачу в масиве (получить данные из модели)
// 2.1) если не находим в массиве, сообщить пользователю
// 3) переключить isCompleted на противоположное значение
// 4) обновить массив задач (обновить модель)
// 5) обновить view (визуальная составляющая) (вьюха, экран, страницу, UI)
// 
// 
// MVC (Model - View - Controller) -- паттерн проектирования (архитектурой)





// 1) Повесить слушатели (listenner) на класс task (можно сделать другой класс чтобы не мешать с css)
// 2) От event из аргемента листенера получить тип действия (чекбокс, удаление итд)
// 3) От event из аргемента листенера получить id задачи
// 4) Выполнить use case из 2-го пункта для id из 3-го пункта // UseCase(taskId)

function createHtmlForTask(newTask) {
    return `<div id="${newTask.id}" class="task task-checkbox-toggler">
        <label class="form">
        <input data-input="input" type="checkbox" ${newTask.isCompleted ? "checked=checked" : ""} class="real-checkbox">
            <span class="custom-checkbox"></span>
            <p class="subtitle">${newTask.description}</p>
        </label>
        <div class="button-delete-category">
        <button class="delete surface-button" type="button" data-action="delete">х</button>
    ${linkedCategoryForAddTask.outerHTML}
        </div>
    </div>`
}

function renderTaskHtml(taskHtml) {
    taskList.insertAdjacentHTML(`beforeend`, taskHtml);
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

// Фильтр
filters.addEventListener(`click`, filtersTask);

function filtersTask(event) {

}



console.log(tasks)


