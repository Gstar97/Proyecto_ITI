window.addEventListener("load", inicio);

function inicio (){
    document.querySelector("#btnIniciarSesion").addEventListener("click", tomarValores)
}

function tomarValores(){
   let cedulaLogin = document.querySelector("#txtCedulaLogin").value;
   let clave = document.querySelector("#txtClaveLogin").value;
   validarInicioSesion (cedulaLogin, clave)
}

function validarInicioSesion (unaCedula, unaClave){
    if (unaCedula < 8){
        document.querySelector("#pMostrarLogin").innerHTML=`Formato de cedula`
    }
}