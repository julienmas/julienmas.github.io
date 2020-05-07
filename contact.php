<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="julienmastrangelo.css">
	<title>Thank you!</title>
</head>
<body>
	<h1>Thank you for your message!</h1>
	<p>I will answer you as soon as possible.</p>
	<a href="julienmastrangelo.php">Back</a>
</body>
</html>

<?php
foreach ($_POST as $key => $value)	{$_POST['key'] = htmlspecialchars($value);} // remove all html code sent by user


$bname = isset($_POST['name']) && strlen($_POST['name']) <= 63;
$bemail = isset($_POST['email']) && strlen($_POST['email']) <= 127;
$bphone = isset($_POST['phone']) && strlen($_POST['phone']) <= 15;
$bmessage = isset($_POST['message']) && strlen($_POST['message']) <= 1023;

if ($bname && $bemail && $bmessage) //phone not required
{
	$fcontact = fopen('contact.txt', 'a');

	fputs($fcontact, "\n" . $_POST['name'] . "\n");
	fputs($fcontact, $_POST['email'] . "\n");
	if ($bphone)	{fputs($fcontact, $_POST['phone'] . "\n");}
	fputs($fcontact, $_POST['message'] . "\n");

	fclose($fcontact);
}
?>