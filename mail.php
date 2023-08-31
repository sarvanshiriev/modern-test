<?php 
header("Cache-Control: no-cache, no-store, must-revalidate"); 
header("Pragma: no-cache"); 
header("Expires: 0");

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $subject = $_POST['user_subject'];
    $email = $_POST['user_email'];
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $question = $_POST['user_question'];
}

$mail->isSMTP();                                   
$mail->Host = 'smtp.mail.ru';  																						
$mail->SMTPAuth = true;                             
$mail->Username = 'moderntest@mail.ru'; 
$mail->Password = '36JwAimrfi5bQmfg6wyL';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('moderntest@mail.ru'); 
$mail->addAddress('resume@000-modern.ru');
$mail->isHTML(true);  

$mail->Subject = 'Question from DreamCreditMaker:'.$subject;
$mail->Body    = 'Email:'.$email.
'<br>Name:'.$name.
'<br>Question:'.$question.
'<br>Phone Number:'.$phone;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header("Location: ".$_SERVER['HTTP_REFERER']."?success=true");
}
?>