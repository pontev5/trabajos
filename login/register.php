<?php
   include 'code-register.php';
?>

<?php

session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
header("location: index.php");
exit;
}

?>

<?php 
include("menu.php")
?>
    </div><!-- /container -->
    <div class="container">
    <div class="GenCU">

            <h2></h2>
            <h2 style="color:#34495E ";>-</h2>
            <h2 style="color:#d9d9d9";>Registrar Usuario</h2>

            <body>

            <body>

    <div class="container-all">

        <div class="ctn-form">
            <img src="images/logo-magtimus-small.png" alt="" class="logo">
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

               <?php if(isset($_SESSION['message'])) { ?>

                 <div class="alert alert-<?= $_SESSION['message_type'];?> alert-dismissible fade show" role="alert">
                    <?= $_SESSION['message'] ?>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                 </div>

        <?php } ?>
                <label for="">Nombre de Usuario</label>
                <input type="text" name="username">
                <span class="msg-error"><?php echo $username_err; ?></span>
                <h2> </h2>
                <label for="">Email</label>
                <input type="text" name="email">
                <span class="msg-error"> <?php echo $email_err; ?></span>
                <h2> </h2>
                <label for="">Contraseña</label>
                <input type="password" name="password">
                <span class="msg-error"> <?php echo $password_err; ?></span>
                 <h2> </h2>
                <input type="submit" value="Crear">

            </form>

        </div>

        
    </div>

</body>

</html>
<script src="Template\js\jquery-3.4.1.min.js"></script>
<script src="Template\js\bootstrap.min.js"></script>
<script src="Template\js\fontawesome.min.js"></script>
<script src="Template\js\classie.js"></script>
<script src="Template\js\gnmenu.js"></script>
<script src="Template\js\General.js"></script>
<script src="Template\js\modernizr.custom.js"></script>
<script>new gnMenu(document.getElementById('gn-menu'));</script>

