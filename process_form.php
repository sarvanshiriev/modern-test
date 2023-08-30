<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $question = $_POST["question"];

    $to = "sarvan.shiriev@mail.ru";
    $subject = "Questions from DreamCreditMaker: " . $subject;
    $message = "Email: " . $email . "\n" .
               "Name: " . $name . "\n" .
               "Question: " . $question . "\n" .
               "Phone Number: " . $phone;

    // Отправляем письмо
    mail($to, $subject, $message);

    // Перенаправляем пользователя на страницу "Спасибо за отправку"
    header("Location: app/components/popup.html");
    exit();
}
?>
