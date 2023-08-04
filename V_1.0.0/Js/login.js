window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnIniciarSesion").addEventListener("click", tomarValores);
}

let sistema = new Sistema()    
function tomarValores() {
    let cedulaLogin = document.querySelector("#txtCedulaLogin").value;
    let clave = document.querySelector("#txtClaveLogin").value;
    validarInicioSesion(cedulaLogin, clave);
}

function validarInicioSesion(unaCedula, unaClave) {
    document.querySelector("#pMostrarLogin").innerHTML = "";
    if (isNaN(unaCedula)) {
        document.querySelector("#pMostrarLogin").innerHTML = `Formato de cedula invalido`;
    } else if (unaCedula.length < 8) {
        document.querySelector("#pMostrarLogin").innerHTML = `Formato de cedula invaldo`;
    }
    for (const registro of sistema.registros) {
        if (unaCedula === registro.cedula && unaClave === registro.clave){
            window.location.href = `index.html`;
        } else {
            document.querySelector("#pMostrarLogin").innerHTML = `Cedula o contraseña incorrecta`
        }
            
    }
}
