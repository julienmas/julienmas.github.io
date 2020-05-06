<?php
if (isset($_POST['name']))	{$name = $_POST['name'];}
if (isset($_POST['email']))	{$email = $_POST['email'];}
if (isset($_POST['phone']))	{$phone = $_POST['phone'];}
if (isset($_POST['message']))	{$message = $_POST['message'];}



?>
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