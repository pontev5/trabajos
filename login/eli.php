<?php 
    include("conexion.php");
    //Revisamos si existe el ID
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $query = "DELETE FROM usuarios WHERE id= $id";
        $result = mysqli_query($link, $query);
        if (!$result){
            die("conexion fallida");

        }
         $_SESSION['messege'] = 'Se a eliminado el Usuario';
         $_SESSION['messege_type'] = 'danger';
        header("Location:Us.php");
    }
?>