var selectedValue = ""; // Здесь должно быть значение, которое выбрал пользователь.

var xhr = new XMLHttpRequest();
xhr.open("POST", "mail.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Здесь можно обработать ответ от сервера, если это необходимо
    }
};
var formData = "selectedValue=" + encodeURIComponent(selectedValue) + "&user_email=" + encodeURIComponent(email) + "&user_name=" + encodeURIComponent(name) + "&user_phone=" + encodeURIComponent(phone) + "&user_question=" + encodeURIComponent(question);
xhr.send(formData);
