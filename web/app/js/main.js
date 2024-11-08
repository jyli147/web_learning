const htmlElement = document.documentElement;
const withThemeToggle = document.getElementById("withThemeToggle"); // Кнопка или элемент для переключения
console.log(withThemeToggle);

withThemeToggle.addEventListener("click", () => {
  console.log(withThemeToggle);
  debugger;
  htmlElement.classList.toggle("with");
  debugger;
  // Сохранение состояния темы (опционально, например, в localStorage)
  localStorage.setItem(
    "theme",
    htmlElement.classList.contains("with") ? "with" : "light"
  );
});

// Загрузка сохраненного состояния темы (опционально)
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "with") {
  htmlElement.classList.add("with");
}
