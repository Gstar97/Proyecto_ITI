window.addEventListener("load", inicio)

function inicio() {
    
    document.querySelector("#btnRegistro").addEventListener("click", tomarValores);
    cargarComboBarrios();
}

function tomarValores() {
    let cedulaRegistro = Number(document.querySelector("#txtCedulaRegistro").value);
    let nombreRegistro = document.querySelector("#txtNombreRegistro").value;
    let apellidoRegistro = document.querySelector("#txtApellidoRegistro").value;
    let emailRegistro = document.querySelector("#txtEmailRegistro").value;
    let telefonoRegistro = Number(document.querySelector("#txtTelefonoRegistro").value);
    let direccionRegistro = document.querySelector("#txtDireccionRegistro").value;
    let barrioRegistro = document.querySelector("#slcBarrioRegistro").value;
    let claveRegistro = document.querySelector("#txtClaveRegistro").value;
    let confirmacionClaveRegistro = document.querySelector("#txtConfirmarClaveRegistro").value;
    let tipoClienteRegistro = document.querySelector("#slcTipoClienteRegistro").value;

    
    
}

let sistema = new Sistema()
function cargarComboBarrios() {
   for (let i = 0; i < sistema.barrios.length; i++) {
    const unBarrio = sistema.barrios[i];
    
    document.querySelector("#slcBarrioRegistro").innerHTML +=`
    <option value = ${unBarrio.id}>${unBarrio.barrio}</option>`
   }
   }

    



