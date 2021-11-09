const submit = document.getElementById('boton');

/*Funcion getElement*/

const getElement = (campo) => document.getElementById(campo).value;

/*Funciones de calculo*/
const valorMasIva = (valor) => (valor * 21) / 100 + valor;
const precioEnDolares = (valor) => valor / 100;
const impGanancias = (valor) => (valor * 65) / 100 + valor;

/*Funciones de impresion*/
const resultadoWarn = (texto, valor) => {
  console.warn(texto, valor);
};
const resultadoLog = (texto, valor) => {
  console.log(texto, valor);
};

const datos = () => {
  const nombre = getElement('first-name');
  const apellido = getElement('last-name');
  const precio = getElement('precio');
  const cantidad = getElement('cantidad');

  resultadoLog('Nombre y Apellido: ', `${nombre} ${apellido}`);
  resultadoLog('Precio: ', precio);
  resultadoLog('Cantidad: ', cantidad);

  resultadoWarn('Precio a pagar en $: ', `$${valorMasIva(precio * cantidad)}`);
  resultadoWarn(
    'Precio a pagar en u$s: ',
    `$${impGanancias(precioEnDolares(valorMasIva(precio * cantidad)))}`
  );
};

submit.addEventListener('click', () => datos(), false);
