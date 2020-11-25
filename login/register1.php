<?php 
    
    include 'code-register.php';

?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Register - MagtimusPro</title>
    <link rel="stylesheet" href="css/estilos.css">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>

<body>

    <div class="container-all">

        <div class="ctn-form">
            <img src="images/logo-magtimus-small.png" alt="" class="logo">
            <h1 class="title">Actualizar Cuenta</h1>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
               
                <label for="">Nombre de Usuario</label>
                <input type="text" name="username">
                <span class="msg-error"><?php echo $username_err; ?></span>
                <label for="">Email</label>
                <input type="text" name="email">
                <span class="msg-error"> <?php echo $email_err; ?></span>
                <label for="">Contraseña</label>
                <input type="password" name="password">
                <span class="msg-error"> <?php echo $password_err; ?></span>

                <input type="submit" value="Actualizar">

            </form>
        </div>
    </div>

</body>

</html>
