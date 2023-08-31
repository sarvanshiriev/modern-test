document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form');
    let submitButton = document.getElementById('submitButton');
    let subjectDropdown = document.getElementById('subjectDropdown');

    submitButton.addEventListener('click', function (event) {
        let formEmail = document.getElementById('formEmail');
        let formName = document.getElementById('formName');
        let question = document.getElementById('question');

        subjectDropdown.style.border = '';
        subjectDropdown.style.color = '';
        formEmail.style.border = '';
        formName.style.border = '';
        question.style.border = '';

        let hasError = false;
        if (subjectDropdown.textContent === 'Select Subject') {
            subjectDropdown.style.border = '1px solid #EF5C53';
            subjectDropdown.style.color = '#EF5C53';
            hasError = true;
        }
        if (formEmail.value === '') {
            formEmail.style.border = '1px solid #EF5C53';
            hasError = true;
        }
        if (formName.value === '') {
            formName.style.border = '1px solid #EF5C53';
            hasError = true;
        }
        if (question.value === '') {
            question.style.border = '1px solid #EF5C53';
            hasError = true;
        }

        if (hasError) {
            event.preventDefault();
        }
    });

    formEmail.addEventListener('input', function () {
        formEmail.style.border = '';
    });

    formName.addEventListener('input', function () {
        formName.style.border = '';
    });

    question.addEventListener('input', function () {
        question.style.border = '';
    });

    subjectDropdown.addEventListener('click', function () {
        subjectDropdown.style.border = '';
        subjectDropdown.style.color = '';
    });
});
