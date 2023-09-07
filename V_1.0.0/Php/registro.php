<?php

require('claseUsuario.php');
$ciRegistro = $_POST['txtCedulaRegistro'];
$nombreRegistro = $_POST['txtNombreRegistro'];
$apellidoRegistro = $_POST['txtApellidoRegistro'];
$emailRegistro = $_POST['txtEmailRegistro'];
$telefonoRegistro = $_POST['txtTelefonoRegistro'];
$direccionRegistro = $_POST['txtDireccionRegistro'];
$esquinaRegistro = $_POST['txtEsquinaRegistro'];
$claveRegistro = $_POST['txtClaveRegistro'];
$confirmarClaveRegistro = $_POST['txtConfirmarClaveRegistro'];

$objUsuario = new Usuario($ciRegistro,$nombreRegistro,$apellidoRegistro,$emailRegistro,$telefonoRegistro,$direccionRegistro,$esquinaRegistro,$claveRegistro,$confirmarClaveRegistro);


    echo $objUsuario -> getCiRegistro();
   

?>











