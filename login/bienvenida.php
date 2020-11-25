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
    <div class="MiContainer">

<div class="GenMain musuCont">

    <h2>Bienvenidos a su plataforma de Links PB</h2>

    <div class="table-responsive-sm">

      

    
</div>



<div id="snackbar"></div>



</div>
    
</body>
    


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