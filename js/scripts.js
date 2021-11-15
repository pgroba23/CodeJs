let arrayContactos = [];

/* Referencias HTML */
const submit = document.querySelector('#boton');
const ordernar = document.querySelector('#boton-ordenar');
const divCards = document.querySelector('#div-cards');

const nombre = document.querySelector('#first-name');
const apellido = document.querySelector('#last-name');
const telefono = document.querySelector('#telefono');
const celular = document.querySelector('#celular');
const direccion = document.querySelector('#direccion');

/* Reset Value */
const resetValue = (campo) => (campo.value = '');

/*Funciones de impresion*/
const resultadoWarn = (texto, valor) => {
  console.warn(texto, valor);
};
const resultadoLog = (texto, valor) => {
  console.log(texto, valor);
};

/*
Ordenamiento
  -ordena de menor a mayor
  array = array a ordernar
  prop = propiedad del objeto por la cual ordenar
*/

const ordenaArray = (array, prop) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i][prop] > array[j][prop]) {
        let obj = array[i];
        array[i] = array[j];
        array[j] = obj;
      }
    }
  }
  console.warn('***Array Ordenado***');
  console.log(array);
};

/* Clase Contacto */
class Contacto {
  constructor(dato) {
    this.nombre = dato.nombre;
    this.apellido = dato.apellido;
    this.telefono = dato.telefono * 1;
    this.celular = dato.celular * 1;
    this.direccion = dato.direccion;
  }

  imprime() {
    resultadoLog('Nombre y Apellido: ', `${this.nombre} ${this.apellido}`);
    resultadoLog('Telefono y Celular: ', `${this.telefono} ${this.celular}`);
    resultadoLog('Direccion: ', `${this.direccion}`);
  }
}

const agregarContactoLista = (contacto) => {
  //Usando innerHTML agregar nuevo contacto a la lista --ver

  const div = document.createElement('div');
  const img = document.createElement('img');
  const nombre = document.createElement('h2');
  const telefono = document.createElement('h5');
  const celular = document.createElement('h5');
  const direccion = document.createElement('small');

  div.classList.add('card');
  img.src = './img/persona4.webp';
  nombre.innerText = `${contacto.nombre} ${contacto.apellido}`;
  telefono.innerText = `Telefono: ${contacto.telefono}`;
  celular.innerText = `Celular: ${contacto.celular}`;
  direccion.innerText = contacto.direccion;
  div.append(img);
  div.append(nombre);
  div.append(telefono);
  div.append(celular);
  div.append(direccion);
  divCards.append(div);
};

const agregarContacto = () => {
  const contacto = new Contacto({
    nombre: nombre.value,
    apellido: apellido.value,
    telefono: telefono.value,
    celular: celular.value,
    direccion: direccion.value,
  });
  arrayContactos.push(contacto); //Desafio: usar metodo de array
  contacto.imprime();

  resetValue(nombre);
  resetValue(apellido);
  resetValue(telefono);
  resetValue(celular);
  resetValue(direccion);

  agregarContactoLista(contacto);
};

submit.addEventListener('click', () => agregarContacto(), false);
ordernar.addEventListener(
  'click',
  () => ordenaArray(arrayContactos, 'telefono'),
  false
);
