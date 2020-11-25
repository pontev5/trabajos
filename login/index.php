<?php require "code-login.php";?>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google" content="notranslate">

    <!--Linsk de los css-->
    <link href="Template\css\bootstrap.min.css" rel="stylesheet">
    <link href="Template\css\normalize.css" rel="stylesheet">
    <link href="Template\css\demo.css" rel="stylesheet">
    <link href="Template\css\component.css" rel="stylesheet">
    <link href="Template\css\Layout_Template.css" rel="stylesheet">
    <link href="Template\css\Diseño.css" rel="stylesheet">
    <link href="Template\css\SnackBar.css" rel="stylesheet">
    <link href="Template\css\fontawesome.min.css" rel="stylesheet">


    <!--Link javascript-->
    <script src="Template\js\modernizr.custom.js"></script>
    <meta charset="UTF-8">
    <title>Login </title>
    <link rel="stylesheet" href="Template/css/estilos.css">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>

<body>

    <div class="container-all">

        <div class="ctn-form">
            <img src="https://synergyshop.cl/wp-content/uploads/2020/07/toplogo1-300x98-1.png" alt="" class="logo">
            <h1 class="title">Iniciar Sesión</h1>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

                <label for="">Email</label>
                <input type="text" name="email">
                <span class="msg-error"><?php echo $email_err; ?></span>
                <label for="">Contraseña</label>
                <input type="password" name="password">
                <span class="msg-error"><?php echo $password_err; ?></span>

                <input type="submit" value="Iniciar">

            </form>
            <p class="copyright"></p>
            <p class="copyright">© Copyright - Reservados todos los derechos 2020 -2021</p>
            <p>Desarrollado por <a href="https://tecnologypartner.com/">www.tecnologypartner.com</a></p>
			
        </div>

        <div class="ctn-text">
        <div class="capa"></div>
            <h1 class="title-description"></h1>
            <p class="text-description"></p>
        </div>

    </div>
    
    <header>

</header>


<script src="Template\js\jquery-3.4.1.min.js"></script>
<script src="Template\js\bootstrap.min.js"></script>
<script src="Template\js\fontawesome.min.js"></script>
<script src="Template\js\classie.js"></script>
<script src="Template\js\gnmenu.js"></script>
<script src="Template\js\General.js"></script>
<script src="Template\js\modernizr.custom.js"></script>
<script>new gnMenu(document.getElementById('gn-menu'));</script>

          
</body>

</html>
