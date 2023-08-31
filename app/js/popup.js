const popup = document.getElementById("popup");
const closeButton = document.getElementById("closePopup");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const successParam = urlParams.get('success');

if (successParam === "true") {
  openPopup();
  setTimeout(() => {
    popup.classList.add("hide-popup");
  }, 3000); 
}

function openPopup() {
  popup.classList.remove("hide-popup");
}

document.addEventListener("click", function(event) {
  if (event.target !== popup) {
    popup.classList.add("hide-popup");
  }
});

popup.addEventListener("click", function(event) {
  event.stopPropagation();
});

closeButton.addEventListener("click", function() {
  popup.classList.add("hide-popup");
});



