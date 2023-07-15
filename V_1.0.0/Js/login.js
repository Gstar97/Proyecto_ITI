$("#btnIniciarSesion").click(iniciarSesion)

function iniciarSesion (){
    let cedulaLogin = Number($("#txtCedulaLogin").val())
    let claveLogin = $("#txtClaveLogin").val()

    if (!isNaN(cedulaLogin) && !cedulaLogin === ""){
        $("#pMostrarLogin").html(`Ha iniciado sesion correctamente`)
    } else {
        $("#pMostrarLogin").html(`Ingrese una cedula valida`)

    }
}