<?php

    session_start();

if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}

?>
<?php
    // Incluir archivo de conexion a la base de datos
    include ("conexion.php")
    
    ?>
 
 <?php 
include("menu.php")
?> 

    </div><!-- /container -->

    <div class="MiContainer">

        <div class="GenMain musuCont">

            <h2>Usuarios</h2>

            <div class="table-responsive-sm">

                <table id="tablaUsuarios" class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Clave</th>
                            <th>Acciones</th>

                        </tr>
                    </thead>
                    <tbody>
                       <?php
                       $query = "SELECT * FROM usuarios";
                       $result = mysqli_query($link, $query);

                       while($fila = mysqli_fetch_array($result)){ ?>
                          <tr>
                              <td><?php echo $fila['usuario']; ?></td>
                              <td><?php echo $fila['email']; ?></td>
                              <td><?php echo $fila['clave']; ?></td>
                               <!-- <td>
                                    <a href= "edit.php?id=<?php echo $fila['id'] ?>"class="btn btn-info">Editar </a>
                                </td> -->
                                <td>
                                    <a href= "eli.php?id=<?php echo $fila['id'] ?>"class="btn btn-danger"> Eliminar </a>
                                </td>
                          </tr>
                       <?php } ?> 
                    </tbody>
                
                 </table>

                <button> 
                <li class="hiddenUsu"><a href="register.php" class="gn-icon gn-icon-user">Crear Usuarios</a></li></button>
                
                </div>

            
        </div>



        <div id="snackbar"></div>

        

    </div>
            
</body>

<header>

</header>

</html>



<script src="Template\js\jquery-3.4.1.min.js"></script>
<script src="Template\js\bootstrap.min.js"></script>
<script src="Template\js\fontawesome.min.js"></script>
<script src="Template\js\classie.js"></script>
<script src="Template\js\gnmenu.js"></script>
<script src="Template\js\General.js"></script>
<script src="Template\js\modernizr.custom.js"></script>
<script>new gnMenu(document.getElementById('gn-menu'));</script>

