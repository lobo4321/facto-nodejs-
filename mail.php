<?php 

ini_set('display_errors',1);

$to = "hello@feirabr.com"; // this is your Email address
$from = $_POST['email']; // this is the sender's Email address
$subject = "Envio de Fomulário";
$message = "Nome: ". $_POST['name'] . "\n\n" . "Mensagem:" . $_POST['message'] . "\n\n" .  "Email: " . $_POST['email'];

//Headers
$headers .= "From: <".$from. ">"; 
$headers2 = "From:" . $to;
  
mail($to,$subject,$message,$headers);

header('Location: contato.html');

$message1 = "wrong answer";
echo "<script type='text/javascript'>alert('$message1');</script>";


 ?>