<?php

  // Destinatário
  $para = "contato@brunofpm.com";

  // Assunto do e-mail
  $assunto = "Contato do site";

  // Campos do formulário de contato
  $nome = $_POST['name'];
  $email = $_POST['mail'];
  $tel = $_POST['tel'];
  $message = $_POST['message'];

  // Monta o corpo da mensagem com os campos
  $corpo = "Nome: $nome // E-mail: $email //";
  $corpo .= "Telefone: $tel // Mensagem: $message";

  // Cabeçalho do e-mail
  $header = "From: $nome <$para> Reply-to: $email ";
  $header .= "Content-Type: text/html; charset=iso-8859-1 ";

  mail($para, $assunto, $corpo, $header);

  $msg = "Sua mensagem foi enviada com sucesso.";

  // Mostra a mensagem acima e redireciona para index.html
  echo "<script>location.href='contato-ok.php';</script>";

?>