$('#/.test(direccion)){
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

