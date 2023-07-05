<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Coleta os dados do formulário
    $nome = $_POST['form_fields_nome2'];
    $telefone = $_POST['form_fields_telefone2'];
    $email = $_POST['form_fields_email2'];
    $mensagem = $_POST['form_fields_mensagem'];

    // Configurações do e-mail
    $to = 'rafaelpcanova@gmail.com'; // Insira o endereço de e-mail de destino aqui
    $subject = 'Mensagem';
    $message = "
        <html>
        <p><b>Nome: </b>$nome</p>
        <p><b>Telefone: </b>$telefone</p>
        <p><b>E-mail: </b>$email</b>
        <p><b>Mensagem: </b>$mensagem</p>
        </html>
    ";

    // Envia o e-mail
    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";                                                                                                
    $headers .= "From: $nome <$email>";

    if (mail($to, $subject, $message)) {
        echo 'E-mail enviado com sucesso!';
        echo "<meta http-equiv='refresh' content='10;URL=index.php'>";
    } else {
        echo 'Ocorreu um erro ao enviar o e-mail.';
        echo "<meta http-equiv='refresh' content='10;URL=index.php'>";
    }
}
?>