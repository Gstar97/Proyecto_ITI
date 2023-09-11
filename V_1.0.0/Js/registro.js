$('#registro').submit(function(e){
    let cedula = $('#txtCedulaRegistro').val();
    let nombre = $('#txtNombreRegistro').val();
    let apellido = $('#txtApellidoRegistro').val();
    let email = $('#txtEmailRegistro').val();
    let telefono = $('#txtTelefonoRegistro').val();
    let tipoCliente = $('#slcTipoClienteRegistro').val();
    let direccion = $('#txtDireccionRegistro').val();
    let esquina = $('#txtEsquinaRegistro').val();
    let barrio = $('#slcBarrioRegistro').val();
    let clave = $('#txtClaveRegistro').val();
    let confirmarClave = $('#txtConfirmarClaveRegistro').val();
    let rut = $('#txtRutRegistro').val();    
    if (cedula == '' || nombre == '' || apellido == '' || email == '' || telefono == '' || tipoCliente == '' || direccion == '' || esquina == '' || barrio == '' || clave == '' || confirmarClave == ''){
     $('#pMostrar').html("Completa los campos vacios");
    }else if (!/[0-9]/.test(cedula) && !/[0-9]/.test(telefono)){
     $('#pMostrar').html("La cedula y el telefono tiene que ser numerico");
    }else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
     $('#pMostrar').html("Ingrese un email valido");
    }else if (!/^[a-zA-Z0-9]+$/.test(direccion)){
     $('#pMostrar').html("La direccion esta incompleta");
    }else if (clave != confirmarClave){
     $('#pMostrar').html("Las contraseñia no coinciden");
    }else if (!/^\d{8}$/.test(cedula)){
     $('#pMostrar').html("Ingrese una cedula valida");
    }else{   const postData = {
                     cedula: cedula,
                     nombre: nombre,        
                     apellido: apellido,
                     email: email,
                     telefono: telefono,
                     tipoCliente: tipoCliente,
                     direccion: direccion,
                     esquina: esquina,
                     barrio: barrio,
                     clave: clave,
                     confirmarClave: confirmarClave,
                     rut: rut };        
     $.post('Php/registro.php', postData, function (response) {
                  if(response == 0){
                         $('#pMostrar').html('El emal ya esta en uso');
                  }else{
                         window.location.href = "index.html";

                  }});                 
                  }e.preventDefault();   
});

