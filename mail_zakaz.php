
<!DOCTYPE html>
<html>
  <head>
    <title>СТРАНИЧКА ЗАКАЗА</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <link rel="stylesheet" href="stil.css">
  </head>

  <body>
    <?php

    $message = $_POST['tel'];
    $message .= $_POST['dannie'];
    $message .= $_POST['gruzchik'];
    $to = "chernykn3@yandex.ru";
    $from = "iotpravil@ya.ru";
    $subject = "Тума сообщения";



    $subject = "?utf-8?B?".base64_encode($subject)."?=";
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";
    mail($to, $subject, $message,$headers);
    ?>
  
      <div id="zakazfinish">
        <i><h1>Мы приняли ваш заказ и доставим его в ближайшее время.</h1></i>
        <i><h1>Наш водитель свяжется с вами.</h1></i>
        <i><h1>Если вы выбрали услугу"Надо занести", то эта услуга оплачивается отдельно.</h1></i>
              <button id="but_zakaz_finish" ><a href="index.html"><i>ЗАКРЫТЬ</i></a></button>
    </div>

  </body>
</html>
