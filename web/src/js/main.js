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

const limit = 25;
let page = 1;
const getContactsListQueryUrl = "/api/v4/contacts";
const createTaskUrl = "/api/v4/tasks";

async function getContacts() {
  try {
    let response = await $.ajax({
      url: getContactsListQueryUrl,
      method: "GET",
      data: {
        limit: limit,
        with: "leads",
        page: page,
      },
    });

    if (
      response &&
      response._embedded &&
      response._embedded.contacts.length > 0
    ) {
      return response._embedded.contacts;
    } else {
      console.log("Контактов нет");
      return [];
    }
  } catch (error) {
    console.error("Ошибка при получении контактов:", error);
  }
}

async function createTask(contactId) {
  const taskData = {
    request: {
      task: {
        name: "Контакт без сделок",
        created_by: 1,
        responsible_user_id: 1,
        status: 0,
        entity_type: "contacts",
        entity_id: contactId,
      },
    },
  };

  try {
    await $.ajax({
      url: createTaskUrl,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(taskData),
    });
    console.log(`Задача для контакта ${contactId} успешно создана.`);
  } catch (error) {
    console.error("Ошибка при создании задачи:", error);
  }
}

async function processContacts() {
  let contacts = await getContacts();

  for (let contact of contacts) {
    if (!contact._embedded.leads || contact._embedded.leads.length === 0) {
      await createTask(contact.id);
    }
  }
}

processContacts();
