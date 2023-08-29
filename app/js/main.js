let navMain = document.querySelector('.header__navigation');
let navToggle = document.querySelector('.header__navigation-toggle');

navMain.classList.remove('header__navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header__navigation--closed')) {
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  } else {
    navMain.classList.add('header__navigation--closed');
    navMain.classList.remove('header__navigation--opened');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var select = document.getElementById("subjectSelect");
  select.addEventListener("change", function() {
      var selectSubjectOption = this.querySelector('option[value=""]');
      if (selectSubjectOption) {
          selectSubjectOption.style.display = "none";
      }
  });
});