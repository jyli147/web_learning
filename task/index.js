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
const add = document.getElementById(`add`)
