<?php
        include 'conexion.inc';
         $ci = $_POST['ci'];
         $clave = $_POST['clave'];
         $valLogin = "SELECT * FROM clientes WHERE ci = '$ci' AND clave = '$clave'";
         $resultClave = mysqli_query($conexion,$valLogin);
         if(mysqli_num_rows($resultClave) > 0){
                echo '1';
         }else {
                echo '0';};        
?>
   
