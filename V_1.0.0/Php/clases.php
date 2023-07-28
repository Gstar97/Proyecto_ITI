<?php
class Registro {
    private $cedula;
    private $nombre;
    private $apellido;
    private $celular;
    private $email;
    private $clave;
    private $confirmacionClave;
    private $barrio;
    private $direccion;
    private $esquina;

    //CONSTRUCTOR
    public function __construct ($cedula, $nombre, $apellido, $celular, $email, $clave,
    $confirmacionClave, $barrio, $direccion, $esquina){
        $this -> cedula = $cedula;
        $this -> nombre = $nombre;
        $this -> apellido = $apellido;
        $this -> celular = $celular;
        $this -> email = $email;
        $this -> clave = $clave;
        $this -> confirmacionClave = $confirmacionClave;
        $this -> barrio = $barrio;
        $this -> direccion = $direccion;
        $this -> esquina = $esquina;
    }

    //GETTERS
    public function getCedula (){
        return $this -> cedula;
    }public function getNombre (){
        return $this -> nombre ;
    }public function getApellido (){
        return $this -> apellido;
    }public function getCelular (){
        return $this -> celular;
    }public function getEmail (){
        return $this -> email;
    }public function getClave (){
        return $this -> clave;
    }public function getConfirmacionClave (){
        return $this -> confirmacionClave;
    }public function getBarrio (){
        return $this -> barrio;
    }public function getDireccion (){
        return $this -> direccion;
    }public function getEsquina (){
        return $this -> esquina;
    }

    //SETTERS
    public function setCedula (){
        $this -> cedula = $cedula;
    }public function setNombre (){
        $this -> nombre = $nombre;
    }public function setApellido (){
        $this -> apellido = $apellido;
    }public function setCelular (){ 
        $this -> celular = $celular;
    }public function setEmail (){
        $this -> email = $email;
    }public function setClave (){
        $this -> clave = $clave;
    }public function setConfirmacionClave (){
        $this -> confirmacionClave = $confirmacionClave;
    }public function setBarrio (){
        $this -> barrio = $barrio;
    }public function setDireccion (){
        $this -> direccion = $direccion;
    }public function setEsquina (){
        $this -> esquina = $esquina;
    }
}
?>






