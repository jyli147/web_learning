// Поиск
const form = document.getElementById(`form`)
const add = document.getElementById('add');
const input = document.getElementById(`input`);
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearCompleted');
const counter = document.getElementById('counter');
const filters = document.getElementById('filters');
const categoriesAddTask = document.getElementById("categories-for-add-task");


// Модальное окно add-task

document.getElementById("open-modal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("open");
    categoriesAddTask.addEventListener("click", categoryLinkedCategoryForAddTask);
});

window.addEventListener(`keydown`, (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
    document.getElementById("categories-for-add-task").removeEventListener("clic",
        linkedCategoryForAddTask = null
    )

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


let tasks = [];
let tasksCounter = tasks.length;


// Кнопка очистки всех задач

// Функция для обработки клика по кнопке очистки
function clearTasks() {
    // Очищаем массив
    tasks.splice(0, tasks.length);

    renderTasks(tasks);

    tasksCounter = tasks.length;
    counter.textContent = tasksCounter;
}
// Добавляем обработчик события клика по кнопке очистки
clearButton.addEventListener('click', clearTasks);

// Выбираем категорию
let linkedCategoryForAddTask;

function categoryLinkedCategoryForAddTask(event) {

    if (event.target.dataset.role === `category`) {
        linkedCategoryForAddTask = event.target;

    }
}

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
        categories: linkedCategoryForAddTask,
        isCompleted: false,
    }

    // Добавляем в массив
    tasks.push(newTask);

    renderTasks(tasks);
    // Очищение инпут и фокус на него
    input.value = "";
    input.focus();

    tasksCounter = tasks.length;
    counter.textContent = tasksCounter;
};


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
    return `<div id="${newTask.id}" class="task">
        <label class="form">
        <input data-input="input" type="checkbox" ${newTask.isCompleted ? "checked=checked" : ""} class="real-checkbox">
            <span class="custom-checkbox"></span>
            <p class="subtitle ${newTask.isCompleted ? 'subtitle-through' : ''}">${newTask.description}</p>
        </label>
        <div class="button-delete-category">
        <button class="delete surface-button" type="button" data-action="delete">х</button>
        <button type="button"
        class="button-right-panel surface-button button-urgent">${newTask.categories}</button>
</div>
        </div>
    </div>`
}

function renderTaskHtml(taskHtml) {
    taskList.insertAdjacentHTML(`beforeend`, taskHtml);
}

// function renderTasks(tasks, filter) {
//     while (taskList.firstChild) {
//         taskList.removeChild(taskList.firstChild);
//     }
//  
//         for (const task of tasks) {
//         renderTaskHtml(createHtmlForTask(task));

// }

function renderTasks(tasks, filter) {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    const filteredTasks = tasks.filter(function (task) {
        return filter === 'all' || (filter === 'active' && !task.completed) || (filter === 'completed' && task.completed);
    });

    for (const task of filteredTasks) {
        renderTaskHtml(createHtmlForTask(task));
    }
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

    renderTasks(tasks);

    tasksCounter = tasks.length;
    counter.textContent = tasksCounter;
}

// Фильтр
let currentFilter = 'all';
filters.addEventListener(`click`, filtersTask);

function filtersTask(e) {
    const nextFilter = e.target.dataset.filters;
    if (currentFilter === nextFilter) {
        return;
    }
    currentFilter = nextFilter;
    filteredTasks = [];

    switch (currentFilter) {
        case 'active':
            filteredTasks = tasks.filter((task) => !task.isCompleted);
            document.querySelectorAll('.button-filters').forEach((button) => button.style.color = '#44A0A0');
            document.querySelector('.button-filters-active').style.color = 'white';
            break;
        case 'all':
            filteredTasks = tasks;
            document.querySelectorAll('.button-filters').forEach((button) => button.style.color = '#44A0A0');
            document.querySelector('.button-filters-all').style.color = 'white';
            break;
        case 'completed':
            filteredTasks = tasks.filter((task) => task.isCompleted);
            document.querySelectorAll('.button-filters').forEach((button) => button.style.color = '#44A0A0');
            document.querySelector('.button-filters-completed').style.color = 'white';
            break;
        default:
            throw Error(`unknown filter type: ${currentFilter}`);
    }
    renderTasks(filteredTasks);
}

taskList.addEventListener('click', updateTaskIsCompleted);
function updateTaskIsCompleted(e) {

    if (e.target.dataset.input !== 'input') return

    const parentNodeDiv = e.target.parentElement.parentElement;
    const id = Number(parentNodeDiv.id);
    let task = tasks.find(function (task) {
        if (task.id === id) {
            return true;
        }
    })

    task.isCompleted = !task.isCompleted;
    renderTasks(tasks);
}


console.log(tasks)


