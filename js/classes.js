class Contacto {
  constructor(dato) {
    this.nombre = dato.nombre;
    this.apellido = dato.apellido;
    this.telefono = dato.telefono;
    this.celular = dato.celular;
    this.direccion = dato.direccion;
    this.email = dato.email;
    this.id = 0;
  }

  imprime() {
    resultadoLog('Nombre y Apellido: ', `${this.nombre} ${this.apellido}`);
    resultadoLog('Telefono y Celular: ', `${this.telefono} ${this.celular}`);
    resultadoLog('Direccion: ', `${this.direccion}`);
  }
}
