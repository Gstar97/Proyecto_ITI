<?php
$gmail = "hola@gmail.com";
$gmail=$_POST["gmail"];
$contrasenaPerfil=$_POST["contrasenaPerfil"];
$usuarios= array ("usuario@gmail.com","chef@gmail.com","administrador@gmail.com","gerente@gmail.com");
$contrasenaUsuarios= array("1","2","3","4");
    if(filter_var($gmail, FILTER_VALIDATE_EMAIL)){
        if($file = fopen("../informacion/login.txt", "w+")){
            fclose($file);
        }
        $file = "../informacion/login.txt";

        
        if($gmail == $usuarios[0] && $contrasenaPerfil == $contrasenaUsuarios[0]){
            header("Location: ../pagina_principal.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:Usuario";
        }
    
       
        if($gmail == $usuarios[1] && $contrasenaPerfil == $contrasenaUsuarios[1]){
            header("Location: ../pagina_chef.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:Chef";
        }
        if($gmail == $usuarios[2] && $contrasenaPerfil == $contrasenaUsuarios[2]){
            header("Location: ../pagina_administrador.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:administrador";
        }
        if($gmail == $usuarios[3] && $contrasenaPerfil == $contrasenaUsuarios[3]){
            header("Location: ../pagina_gerente.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:gerente";
        }

        $fp = fopen($file, "w");
        fwrite($fp, $text);
        fclose($fp);
        }else{
            header("Location: ../pagina_InicioYRegistro.html");
        }  
        
?>
   
