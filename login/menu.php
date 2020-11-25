<?php
    
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
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
    <title>Et</title>
    <link rel="stylesheet" href="css/estilos.css">

    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
</head>
<body>
    
    <div class="container">

        <ul id="gn-menu" class="gn-menu-main lytNav">

            <li class="gn-trigger lyp">

                <a class="gn-icon gn-icon-menu"><span>Menu</span></a>


                <nav class="gn-menu-wrapper">
                    <div class="gn-scroller">
                        <ul class="gn-menu" id="ltDetect">
                           
                        <li class="hiddenUsu"><a href="Us.php" class="gn-icon gn-icon-user">Usuarios</a></li>
                            <li class="hiddenUsu"><a href="#" class="gn-icon gn-icon-url">URLs</a></li>
                            <li class="hiddenUsu"><a href="/AsignacionRoles/MainAsignUrl/" class="gn-icon gn-icon-asign">Asignar Informes</a></li>
                            <li class="ltlogOut"><a  href="cerrar-sesion.php" class="gn-icon gn-icon-logout">Cerrar Session</a></li>
                        </ul>
                    </div>
                </nav>
            </li>
            
        </ul>
    </div><!-- /container -->

    


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