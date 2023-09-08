<?php
     include 'conexion.inc';
       $ci = $_POST['cedula'];
       $nombre = $_POST['nombre'];
       $apellido = $_POST['apellido'];
       $email = $_POST['email'];
       $telefono = $_POST['telefono'];
       $tipoCliente = $_POST['tipoCliente'];
       $direccion = $_POST['direccion'];
       $esquina = $_POST['esquina'];
       $barrio = $_POST['barrio'];
       $clave = $_POST['clave'];
       $confirmarClave = $_POST['confirmarClave'];
       $rut = $_POST['rut'];
       $validar = "SELECT email FROM clientes WHERE email = '$email'";  
       $valResult = mysqli_query($conexion,$validar);
       if(mysqli_num_rows($valResult) > 0){
          echo '0';
       }else{
          $ingresarDatos = "INSERT into clientes (ci, nombre, apellido, email, telefono, tipo_cliente, direccion,esquina,barrio,clave,rut) VALUE ('$ci', '$nombre','$apellido','$email','$telefono','$tipoCliente','$direccion','$esquina','$barrio','$clave','$rut')";
          $result = mysqli_query($conexion, $ingresarDatos);
            if(!$result){
                  die('La cedula esta en uso');}
            echo "Se ingresaron los datos";}     
?>











