const popup = document.getElementById("popup");
const closeButton = document.getElementById("closePopup");

// Обработчик для закрытия попапа при клике в любом месте кроме попапа
document.addEventListener("click", function(event) {
  if (event.target !== popup) {
    popup.style.display = "none";
  }
});

// Остановить всплытие события клика из попапа
popup.addEventListener("click", function(event) {
  event.stopPropagation();
});

// Функция для открытия попапа
function openPopup() {
  popup.style.display = "block";
  setTimeout(function() {
    popup.style.display = "none";
  }, 3000);
}
// Обработчик для закрытия попапа при клике на кнопку закрытия
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});




