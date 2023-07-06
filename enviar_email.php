<?php
// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta os dados do formulário
    $nome = $_POST['form_fields_nome'];
    $placa = $_POST['form_fields_placa'];
    $telefone = $_POST['form_fields_telefone'];
    $email = $_POST['form_fields_email'];
    // Configurações do e-mail
    $to = 'rpcanova@hotmail.com'; // Substitua pelo seu endereço de e-mail
    $subject = 'Cotacao de Veiculo';
    $message = "
        <html>
        <p>Ola, quero fazer uma cotacao</p>
        <p>Nome: $nome</p>
        <p>Placa do veiculo: $placa</p>
        <p>Telefone: $telefone</p>
        <p>E-mail: $email</p>
        </html>
    ";

    // Envia o e-mail
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";                                                                                                
    $headers .= "From: $nome <$email>";
    if (mail($to, $subject, $message, $headers)) {
        echo 'E-mail enviado com sucesso!';
        echo "<meta http-equiv='refresh' content='10;URL=index.php'>";
    } else {
        echo 'Ocorreu um erro ao enviar o e-mail.';
        echo "<meta http-equiv='refresh' content='10;URL=index.php'>";
    }
}
?>