
<!DOCTYPE html>
<html>
  <head>
    <title>ПИСЬМО</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <link rel="stylesheet" href="stil.css">
  </head>

  <body>
    <?php

    $message = $_POST['tell'];
    $to = "chernykn3@yandex.ru";
    $from = "iotpravil@ya.ru";
    $subject = "Тума сообщения";

    $subject = "?utf-8?B?".base64_encode($subject)."?=";
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type:text/plain; charset=utf-8\r\n";
    mail($to, $subject, $message,$headers);
    ?>
      <div id="pismofinish">
        <i><h1>Письмо успешно отправлено!</h1></i>
        <i><h1>Это очень важно для нас, чтобы работать лучше для вас!</h1></i>
        <i><h1>Если вы оставили обратный адрес, тогда мы оветим вам в ближайшее время!</h1></i>
        <button id="but_pismo_finish"><a href="index.html" ><i>ЗАКРЫТЬ</i></a></button>
    </div>

  </body>
</html>
