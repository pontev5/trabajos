<?php
    
    // Incluir archivo de conexion a la base de datos
    require_once "conexion.php";
    
    // Definir variable e inicializar con valores vacio
    $username = $area = $url = "";
    $username_err = $area_err = $url_err = "";
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        
        // VALIDANDO INPUT DE NOMBRE DE USUARIO
        if(empty(trim($_POST["username"]))){
            $username_err = "Por favor, ingrese un nombre";
        }else{
            //prepara una declaracion de seleccion
            $sql = "SELECT id FROM urls WHERE nombre = ?";
            
            if($stmt = mysqli_prepare($link, $sql)){
                mysqli_stmt_bind_param($stmt, "s", $param_username);
                
                $param_username = trim($_POST["username"]);
                
                if(mysqli_stmt_execute($stmt)){
                    mysqli_stmt_store_result($stmt);
                    
                    if(mysqli_stmt_num_rows($stmt) == 1){
                        $username_err = "Este nombre de usuario ya está en uso";
                    }else{
                        $username = trim($_POST["username"]);
                    }
                }else{
                    echo "Ups! Algo salió mal, inténtalo mas tarde";
                }
            }
        }
        
        
        // VALIDANDO INPUT DE EMAIL
        if(empty(trim($_POST["area"]))){
            $email_err = "Por favor, ingrese el area";
        }else{
            //prepara una declaracion de seleccion
            $sql = "SELECT id FROM usuarios WHERE email = ?";
            
            if($stmt = mysqli_prepare($link, $sql)){
                mysqli_stmt_bind_param($stmt, "s", $param_email);
                
                $param_email = trim($_POST["email"]);
                
                if(mysqli_stmt_execute($stmt)){
                    mysqli_stmt_store_result($stmt);
                    
                    if(mysqli_stmt_num_rows($stmt) == 1){
                        $email_err = "Este correo ya está en uso";
                    }else{
                        $email = trim($_POST["email"]);
                    }
                }else{
                    echo "Ups! Algo salió mal, inténtalo mas tarde";
                }
            }
        }
        
        
        // VALIDANDO CONTRASEÑA
        if(empty(trim($_POST["password"]))){
            $password_err = "Por favor, ingrese una contraseña";
        }elseif(strlen(trim($_POST["password"])) < 4){
            $password_err = "La contraseña debe de tener al menos 4 caracteres";
        } else{
            $password = trim($_POST["password"]);
        }
        
        
        // COMPROBANDO LOS ERRORES DE ENTRADA ANTES DE INSERTAR LOS DATOS EN LA BASE DE DATOS
        if(empty($username_err) && empty($email_err) && empty($password_err)){
            
            $sql = "INSERT INTO usuarios (usuario, email, clave) VALUES (?, ?, ?)";
            
            if($stmt = mysqli_prepare($link, $sql)){
                mysqli_stmt_bind_param($stmt, "sss", $param_username, $param_email, $param_password);
                
                // ESTABLECIENDO PARAMETRO
                $param_username = $username;
                $param_email = $email;
               $param_password = password_hash($password, PASSWORD_DEFAULT); // ENCRIPTANDO CONTRASEÑA
                
                
                if(mysqli_stmt_execute($stmt)){
                $_SESSION['message'] = 'Se a creado el usuario';
                $_SESSION['message_type'] = 'success';  
                    header("location: register.php");

                }else{
                    echo "Algo Salio mal, intentalo despues";
                }

            }
        }
        
        mysqli_close($link);
        
    }
    
?>

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
            <h2 style="color:#d9d9d9";>Ingresar datos</h2>

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
                <label for="">Nombre</label>
                <input type="text" name="username">
                <span class="msg-error"><?php echo $username_err; ?></span>
                <h2> </h2>
                <label for="">area</label>
                <input type="text" name="email">
                <span class="msg-error"> <?php echo $email_err; ?></span>
                <h2> </h2>
                <label for="">url</label>
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

