
    <?php
    $gmail ="hola@gmail.com";
    $gmail=$_POST["gmail"];
    $contrasenaGmail=$_POST["contrasenaGmail"];
    $contrasenaPerfil=$_POST["contrasenaPerfil"];
    $repetir_contrasenaPerfil=$_POST["repetir_contrasenaPerfil"];
    $usuarios= array ("usuario@gmail.com","chef@gmail.com","administrador@gmail.com","gerente@gmail.com");
    $contrasenaUsuarios= array("1","2","3","4");

          if(isset ($_POST["acepto"])){  
            if(filter_var($gmail, FILTER_VALIDATE_EMAIL)){
                if($contrasenaPerfil == $repetir_contrasenaPerfil){
                    if($file = fopen("../informacion/registro.txt", "w+")){
                        echo "se inicio sesion";
                        fclose($file);
                    }
        
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
                    header("Location: ../pagina_principal.html");
                    if($gmail == "usuario@gmail.com"){
            header("Location: ../pagina_principal.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:Usuario";
        }
        if($gmail == "chef@gmail.com"){
            header("Location: ../pagina_chef.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:Chef";
        }
        if($gmail == "administrador@gmail.com"){
            header("Location: ../pagina_administrador.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:administrador";
        }
        if($gmail == "gerente@gmail.com"){
            header("Location: ../pagina_gerente.html");
            $text = "Gmail:$gmail Contraseña:$contrasenaPerfil rol:gerente";
        }
                }else{
                    echo "Las contraseña no son iguales";
                }
            }else{
                echo "gmail incorrecto";
            }  
        }else{
            echo "No acepto los terminos y servicios";
        }
        ?>
