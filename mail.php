<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.ukr.net';  					    // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'dumphouman@ukr.net'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mamoosh15'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('dumphouman@ukr.net'); 
$mail->addAddress('hannabadr.11@gmail.com');    

$mail->isHTML(true);    

$mail->Subject = 'Серватко тебе письмо))';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo('Спасибо!');
}
?>