$('#login').submit(function(e){
    let cedula = $("#txtCedulaLogin").val();
    let clave = $('#txtClaveLogin').val();
        if (cedula == '' || clave == ''){
            $('#pMostrarLogin').html('Completa los campos vacios');
        }else if (!/^\d{8}$/.test(cedula)){
            $('#pMostrarLogin').html('Cedula invalida');
        }else{ const postData = {
                ci: cedula,
                clave: clave
            };
            $.post('Php/login.php', postData, function (response) {
                if(response == 0){
                    $('#pMostrarLogin').html("La contraseña o la cedula son incorrectas");
                }else if (response == 1){
                    $('#pMostrarLogin').html("Login exitoso");}
        }); }
        e.preventDefault(); 
    });
    
