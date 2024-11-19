const pages = document.querySelectorAll(".page-number");
const nextButton = document.getElementById("next");
let currentPage = 1;
const totalPages = 10;

function updatePagination() {
  // Сбрасываем все классы
  pages.forEach((page) => {
    page.classList.remove("active");
    page.classList.add("hidden");
  });

  let startPage, endPage;

  if (currentPage <= 3) {
    startPage = 1;
    endPage = 5;
  } else if (currentPage >= totalPages - 2) {
    startPage = totalPages - 4;
    endPage = totalPages;
  } else {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  // Показываем номера страниц в пределах видимости
  for (let i = startPage; i <= endPage; i++) {
    const page = document.querySelector(`.page-number[data-page="${i}"]`);
    if (page) {
      page.classList.remove("hidden");
    }
  }

  // Обрабатываем отображение точек
  const firstPage = document.querySelector('.page-number[data-page="1"]');
  const lastPage = document.querySelector('.page-number[data-page="10"]');

  if (startPage > 2) {
    firstPage.nextElementSibling.classList.remove("hidden"); // Показать "..."
  }

  if (endPage < totalPages - 1) {
    lastPage.previousElementSibling.classList.remove("hidden"); // Показать "..."
  }

  // Активируем текущую страницу
  const currentPageEl = document.querySelector(
    `.page-number[data-page="${currentPage}"]`
  );
  if (currentPageEl) {
    currentPageEl.classList.add("active");
  }
}

// Обработка кликов по страницам
pages.forEach((page) => {
  page.addEventListener("click", () => {
    currentPage = parseInt(page.getAttribute("data-page"));
    updatePagination();
  });
});

// Обработка кнопки "Следующая"
nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

// Инициализация пагинации
updatePagination();
