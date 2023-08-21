window.addEventListener("load", inicio)

function inicio() {

    document.querySelector("#btnRegistro").addEventListener("click", tomarValores);
    cargarComboBarrios();
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const cedulaRegex = /^[0-9]+$/;
const claveRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

let sistema = new Sistema()
function cargarComboBarrios() {
    for (let i = 0; i < sistema.barrios.length; i++) {
        const unBarrio = sistema.barrios[i];

        document.querySelector("#slcBarrioRegistro").innerHTML += `
    <option value = ${unBarrio.id}>${unBarrio.barrio}</option>`
    }
}

function tomarValores() {
    let cedulaRegistro = document.querySelector("#txtCedulaRegistro").value;
    let nombreRegistro = document.querySelector("#txtNombreRegistro").value;
    let apellidoRegistro = document.querySelector("#txtApellidoRegistro").value;
    let emailRegistro = document.querySelector("#txtEmailRegistro").value;
    let telefonoRegistro = document.querySelector("#txtTelefonoRegistro").value;
    let direccionRegistro = document.querySelector("#txtDireccionRegistro").value;
    let barrioRegistro = document.querySelector("#slcBarrioRegistro").value;
    let claveRegistro = document.querySelector("#txtClaveRegistro").value;
    let confirmacionClaveRegistro = document.querySelector("#txtConfirmarClaveRegistro").value;
    let tipoClienteRegistro = document.querySelector("#slcTipoClienteRegistro").value;
    
    validarRegistro(cedulaRegistro, nombreRegistro, apellidoRegistro, telefonoRegistro,
        emailRegistro, claveRegistro, confirmacionClaveRegistro, barrioRegistro, direccionRegistro)
    }



function validarRegistro(unaCedulaRegistro, unNombreRegistro, unApellidoRegistro, unTelefonoRegistro,
    unEmailRegistro, unaClaveRegistro, unaConfirmacionRegistro, unBarrioRegistro, unaDireccionRegistro) {
        document.querySelector("#pMostrar").innerHTML=""
    if (unaCedulaRegistro === "" || unNombreRegistro === "" || unApellidoRegistro === "" ||
        unTelefonoRegistro === "" || unEmailRegistro === "" || unaClaveRegistro === "" ||
        unaConfirmacionRegistro === "" || unBarrioRegistro === "" || unaDireccionRegistro === "") {
        document.querySelector("#pMostrar").innerHTML = `Por favor revise que no haya campos vacios o opciones sin seleccionar`
    } else if (unaCedulaRegistro.length < 8 || !cedulaRegex.test(unaCedulaRegistro)){
        document.querySelector("#pMostrar").innerHTML=`Formato de cedula invalido`
    } else if (unTelefonoRegistro.length < 9){
        document.querySelector("#pMostrar").innerHTML = `Formato de telefono invalido`
    } else if (isNaN(unaCedulaRegistro) && isNaN(unTelefonoRegistro)) {
        document.querySelector("#pMostrar").innerHTML = `Formato de cedula y telefono invalido`
    } else if (isNaN(unTelefonoRegistro)) {
        document.querySelector("#pMostrar").innerHTML = `Formato de telefono invalido`
    } else if (sistema.verificarRegistroRepetido(unaCedulaRegistro,unEmailRegistro)){
        document.querySelector("#pMostrar").innerHTML = `El usuario ingresado ya existe`
    } else if (!emailRegex.test(unEmailRegistro)){
        document.querySelector("#pMostrar").innerHTML = `Formato de correo invalido`
    } else if (unaClaveRegistro !== unaConfirmacionRegistro){
        document.querySelector("#pMostrar").innerHTML = `Las contraseñas no coinciden`
    } else if (!claveRegex.test(unaClaveRegistro)){
        document.querySelector("#pMostrar").innerHTML = `La contraseña debe de tener una mayuscula, un numero y un largo de 8 caracteres como minimo.`
    } else {
        document.querySelector("#pMostrar").innerHTML = `Registro exitoso`
    }
}
        











