<? php 

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$email_from = 'info@website.com';

$email_subject = 'New Form submission';

$email_body = "Users name: $name.\n". 
              "Users name: $visitor_email.\n". 
              "Users name: $subject.\n". 
              "Users name: $message.\n";

$to = 'some@gmail.com';

$headers = "From: $email_from \r\n";


$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");



?>