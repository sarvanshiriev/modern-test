// Получаем элементы DOM
const writeusFormSelect = document.getElementById("subjectDropdown");
const writeusFormList = document.getElementById("subjectOptions");
const writeusFormItems = subjectOptions.getElementsByTagName("li");

// Функция, которая отображает или скрывает выпадающий список
function toggleSubjectOptions() {
    if (writeusFormList.style.display === "block") {
        writeusFormList.style.display = "none";
        toggleCloseClass();
    } else {
        writeusFormList.style.display = "block";
        toggleCloseClass();
    }
  }

function toggleCloseClass() {
    writeusFormSelect.classList.toggle("close");
}
// Добавляем обработчик события клика на элементе subjectDropdown
writeusFormSelect.addEventListener("click", toggleSubjectOptions);

// Функция для выбора элемента из списка
function selectSubject(subject) {
  writeusFormSelect.textContent = subject.textContent;
  writeusFormList.style.display = "none";
  writeusFormSelect.classList.add("selected");
}


// Добавляем обработчики событий для каждого элемента списка
for (const subjectItem of writeusFormItems) {
  subjectItem.addEventListener("click", () => selectSubject(subjectItem));
}
