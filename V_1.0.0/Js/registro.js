var formulario = document.getElementById('registro');

formulario.addEventListener('submit', function(e){
e.preventDefault();

    var datos = new FormData(formulario);

        fetch('Php/registro.php',{
            method: 'POST',
            body: datos
        })
            .then(res => res.json())
            .then(data => {

                document.querySelector("#pMostrar").innerHTML="Registro exitoso";
                
            })

    })

