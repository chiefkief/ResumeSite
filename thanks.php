<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You!</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <?php 
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    ?> 
    <h1>Thank You <?=$fName?> <?=$lName?>!</h1>
    <p>I will reach out to you shortly!<br>
    if you would like to, you could go back to my <a href="bio.html">bio</a> to learn more about me,
or you could go back to my <a href="index.html">homepage.</a></p>
</body>
</html>