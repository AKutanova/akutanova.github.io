<?php
    $name = strip_tags($_POST['name']);
    $phone = $_POST['phone'];
    $massage = strip_tags($_POST['message']) . "\n" . $name . ' - ' . $phone;
    $from = "callme@akutanova.ru";
    $subject = $name . " ждет звонка";
    
    $oksend = mail(
        "anna-vlk@yandex.ru", $subject, 
        $massage,
        "Content-type: text/html; charset=utf-8" . "\r\nFrom: <" . $from . ">\r\n"
    );

    return $oksend;
?>