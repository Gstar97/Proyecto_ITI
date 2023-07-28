<?php
require "clases.php";
$cedulaRegistro = $_POST["txtCedulaRegistro"];
$nombreRegistro = $_POST["txtNombreRegistro"];
$apellidoRegistro = $_POST["txtApellidoRegistro"];
$emailRegistro = $_POST["txtEmailRegistro"];
$telefonoRegistro = $_POST["txtTelefonoRegistro"];
$direccionRegistro = $_POST["txtDireccionRegistro"];
$barrioRegistro = $_POST["slcBarrioRegistro"];
$claveRegistro = $_POST["txtClaveRegistro"];
$confirmacionClaveRegistro = $_POST["txtConfirmarClaveRegistro"];
$tipoClienteRegistro = $_POST["slcTipoClienteRegistro"];

$Registro = new registro (cedulaRegistro, nombreRegistro, apellidoRegistro, emailRegistro, telefonoRegistro, direccionRegistro, barrioRegistro,
                         txtClaveRegistro, txtConfirmarClaveRegistro, slcTipoClienteRegistro);

echo $Registro -> getCedula();


?>











