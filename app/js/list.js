const writeusFormSelect = document.getElementById("subjectDropdown");
const writeusFormList = document.getElementById("subjectOptions");
const writeusFormItems = subjectOptions.getElementsByTagName("li");

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
writeusFormSelect.addEventListener("click", toggleSubjectOptions);

function selectSubject(subject) {
  const selectedSubjectInput = document.getElementById("selectedSubject");
  const selectedValue = subject.getAttribute("data-value");

  selectedSubjectInput.value = selectedValue;

  writeusFormSelect.textContent = subject.textContent;
  writeusFormList.style.display = "none";
  writeusFormSelect.classList.add("selected");
}


for (const subjectItem of writeusFormItems) {
  subjectItem.addEventListener("click", () => selectSubject(subjectItem));
}
