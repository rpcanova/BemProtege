<?php
// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta os dados do formulário
    $nome = $_POST['form_fields_nome'];
    $placa = $_POST['form_fields_placa'];
    $telefone = $_POST['form_fields_telefone'];
    $email = $_POST['form_fields_email'];
    // Configurações do e-mail
    $to = 'bemprotegevendas@outlook.com'; // Substitua pelo seu endereço de e-mail
    $subject = 'Cotação de Veiculo';
    $message = "
        <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>Placa do veículo: </b>$placa</p>
        <p><b>Telefone: </b>$telefone</p>
        <p><b>E-mail: </b>$email</b>
        </html>
    ";

    // Envia o e-mail
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";                                                                                                
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