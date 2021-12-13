class Contacto {
  constructor(dato) {
    this.nombre = dato.nombre;
    this.apellido = dato.apellido;
    this.telefono = dato.telefono * 1;
    this.celular = dato.celular * 1;
    this.direccion = dato.direccion;
    this.id = 0;
  }

  imprime() {
    resultadoLog('Nombre y Apellido: ', `${this.nombre} ${this.apellido}`);
    resultadoLog('Telefono y Celular: ', `${this.telefono} ${this.celular}`);
    resultadoLog('Direccion: ', `${this.direccion}`);
  }
}
