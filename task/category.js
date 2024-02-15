const formCategories = document.getElementById(`form-categories`)
const categoriesAdd = document.getElementById(`categories-add`)
const inputCategory = document.getElementById(`input-category`)
const colorSelect = document.getElementById(`color-select`)
const addСategory = document.getElementById(`add-category`)
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

let categories = [];
// Добавляем задачи

formCategories.addEventListener(`submit`, addCategories);

function addCategories(e) {
    event.preventDefault();
    const text = inputCategory.value;
    console.log(text)
    if (input.value.trim() === "") return

    const color = e.target.closest('[data-color]').dataset.color;
    console.log(color);
    // Описание задачи работа с данными
    const newCategories = {
        description: text,
        color: color,
    }

    // Добавляем в массив
    categories.push(newCategories);

    // Очищение инпут и фокус на него
    input.value = "";
    input.focus();

    const categoriesHTML = `<button type="button" class="button surface-button ${newCategories.color}">${newCategories.description}</button>`
    categoriesAdd.insertAdjacentHTML(`beforeend`, categoriesHTML);
};