<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta os dados do formulário
    $nome = $_POST['form_fields_nome2'];
    $telefone = $_POST['form_fields_telefone2'];
    $email = $_POST['form_fields_email2'];
    // $mensagem = $_POST['form_fields_mensagem'];

    // Configurações do e-mail
    $to = 'bemprotegevendas@outlook.com'; // Insira o endereço de e-mail de destino aqui
    $subject = 'Cotação de veículo';
    $message = "
        Olá, quero fazer uma cotação
        Nome: $nome
        Telefone: $telefone
        E-mail: $email
    ";

    // Envia o e-mail
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";                                                                                                
    $headers .= "From: $nome <$email>";
    if (mail($to, $subject, $message, $headers)) {
        echo "<meta http-equiv='refresh' content='0;URL=email_enviado.php'>";
    } else {
        echo 'Ocorreu um erro ao enviar o e-mail.';
        echo "<meta http-equiv='refresh' content='5;URL=index.php'>";
    }
}
?>