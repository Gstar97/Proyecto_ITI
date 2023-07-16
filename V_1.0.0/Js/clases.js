class Registro {
    constructor(unId, unaCedula, unNombre, unApellido, unCelular, unEmail, unaClave, unBarrio, unaDireccion, unaEsquina) {
      this.Id = unId;
      this.cedula = unaCedula;
      this.nombre = unNombre;
      this.apellido = unApellido;
      this.celular = unCelular;
      this.email = unEmail;
      this.clave = unaClave;
      this.barrio = unBarrio;
      this.direccion = unaDireccion;
      this.esquina = unaEsquina;
    }
  }
  
  class Barrio {
    constructor(unId, unBarrio) {
      this.id = unId;
      this.barrio = unBarrio;
    }
  }
      
  