<?php

  include 'conexion.php';

  $mail = $_POST['mail'];
  $clave = $_POST['clave']; 

  $validar_login = mysqli_query($conexion, "SELECT * FORM usuarios WHERE
  mail='$mail' and clave='$clave' ");
  if (mysqli_num_rows($validar_login) >0 ){
      header("location:../bienvenida.php");
      exit;
  }else{
      echo ' 
      <script>
      alert("Usuario no existe, por favor verifique los datos");
      windows.location ="../index.php";
      </script>
         ';
         exit;
  }

  ?>