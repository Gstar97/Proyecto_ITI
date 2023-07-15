$("#btnRegistro").click(tomarValores);
let barrio = new Barrio()
cargarComboBarrios ();

function tomarValores(){
    let cedulaRegistro = Number($("#txtCedulaRegistro").val());
    let nombreRegistro = $("#txtNombreRegistro").val();
    let apellidoRegistro = $("#txtApellidoRegistro").val();
    let emailRegistro = $("#txtEmailRegistro").val();
    let telefonoRegistro = $("#txtTelefonoRegistro").val();
    let direccionRegistro = $("#txtDireccionRegistro").val();
    let barrioRegistro = $("#slcBarrioRegistro").val();
    let claveRegistro = $("#txtClaveRegistro").val();
    let confirmacionClaveRegistro = $("#txtConfirmarClaveRegistro").val();
    let tipoClienteRegistro = $("#slcTipoClienteRegistro").val();
}

function cargarComboBarrios() {
    for (let i = 1; i < barrios.length; i++){
        const unBarrio = barrios[i];
        $("#slcBarrioRegistro").append(`
        <option value = ${unBarrio.id}>${unBarrio.barrio}</option> `)
    }
}   