<?php

class claseUsaurio{

    private $ciRegistro;
    private $nombreRegistro;
    private $apellidoRegistro;
    private $emailRegistro;
    private $telefonoRegistro;
    private $direccionRegistro;
    private $esquinaRegistro;
    private $claveRegistro;
    private $confirmarClaveRegistro;


    public function __construct($ciRegistro,$nombreRegistro,$apellidoRegistro,$emailRegistro,$telefonoRegistro,$direccionRegistro,$esquinaRegistro,$claveRegistro,$confirmarClaveRegistro){

        $this-> ciRegistro = $ciRegistro;
        $this-> nombreRegistro = $nombreRegistro;
        $this-> apellidoRegistro = $apellidoRegistro;
        $this-> emailRegistro = $emailRegistro;
        $this-> telefonoRegistro = $telefonoRegistro;
        $this-> direccionRegistro = $direccionRegistro;
        $this-> esquinaRegistro = $esquinaRegistro;
        $this-> claveRegistro = $claveRegistro;
        $this-> confirmarClaveRegistro = $confirmarClaveRegistro;

    }

    public function getCi(){
        return $this-> ciRegistro;
    }
    public function setCi(){
        $this-> ciRegistro = $ciRegistro;
    }
    public function getNombre(){
        return $this-> nombreRegistro;
    }
    public function setNombre(){
        $this-> nombreRegistro = $nombreRegistro;
    }
    public function getApellido(){
        return $this-> apellidoRegistro;
    }
    public function setApellido(){
        $this-> apellidoRegistro = $apellidoRegistro;
    }
    public function getEmail(){
        return $this-> emailRegistro;
    }
    public function setEmail(){
        $this-> emailRegistro = $emailRegistro;
    }
    public function getTelefono(){
        return $this-> telefonoRegistro;
    }
    public function setTelefono(){
        $this-> telefonoRegistro = $telefonoRegistro;
    }
    public function getDireccion(){
        return $this->direccionRegistro;
    }
    public function setDireccion(){
        $this-> direccionRegistro = $direccionRegistro;
    }
    public function getEsquina(){
        return $this-> esquinaRegistro;
    }
    public function setEsquina(){
        $this-> esquinaRegistro = $esquinaRegistro;
    }
    public function getClave(){
        return $this-> claveRegistro;
    }
    public function setClave(){
        $this-> claveRegistro = $claveRegistro;
    }
    public function getConfirmarClave(){
        return $this-> confirmarClaveRegistro;
    }
    public function setConfirmarClave(){
        $this-> confirmatClaveRegistro = $confirmarClaveRegistro;
    }




}





?>





