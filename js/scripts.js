const submit = document.getElementById('boton');

/*Funcion getElement*/

const getElement = (campo) => document.getElementById(campo).value;

/*Funciones de impresion*/
const resultadoWarn = (texto, valor) => {
  console.warn(texto, valor);
};
const resultadoLog = (texto, valor) => {
  console.log(texto, valor);
};

class Contacto {
  constructor(dato) {
    this.nombre = dato.nombre;
    this.apellido = dato.apellido;
    this.telefono = dato.telefono;
    this.celular = dato.celular;
  }

  imprime() {
    resultadoLog('Nombre y Apellido: ', `${this.nombre} ${this.apellido}`);
    resultadoLog('Telefono y Celular: ', `${this.telefono} ${this.celular}`);
  }
}

const datos = () => {
  const nombre = getElement('first-name');
  const apellido = getElement('last-name');
  const telefono = getElement('telefono');
  const celular = getElement('celular');

  const contacto = new Contacto({ nombre, apellido, telefono, celular });
  contacto.imprime();
};

submit.addEventListener('click', () => datos(), false);
