const form = document.getElementById('form');
const requiredInputs = document.querySelectorAll('.writeus__form-label');

        form.addEventListener('submit', function(event) {
            let hasError = false;
            requiredInputs.forEach(input => {
                const field = input.parentElement.querySelector('.writeus__form-input');

                if (field.classList.contains('writeus__form-select')) {
                    // Для выпадающих дивов, проверяем наличие data-value
                    const selectedOption = field.querySelector('.writeus__form-list--item[data-value]');
                    if (!selectedOption || !selectedOption.getAttribute('data-value')) {
                        field.classList.add('error');
                        hasError = true;
                    } else {
                        field.classList.remove('error');
                    }
                } else if (!field.value.trim()) {
                    field.classList.add('error');
                    hasError = true;
                } else {
                    field.classList.remove('error');
                }
            });

            if (hasError) {
                event.preventDefault(); // Предотвращаем отправку формы
            }
        });