const phoneInput = document.getElementById('formPhone');
        
phoneInput.addEventListener('focus', () => {
    phoneInput.placeholder = '1-XXX-XXX-XXXX';
});

phoneInput.addEventListener('blur', () => {
            phoneInput.placeholder = '';
});

phoneInput.addEventListener('input', () => {
    if (phoneInput.value === '') {
        phoneInput.placeholder = '1-XXX-XXX-XXXX';
    } else {
        phoneInput.placeholder = '';
    }
});