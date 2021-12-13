/*LocalStorage*/
const getStorage = () => JSON.parse(localStorage.getItem('contactos')),
  setStorage = (contactos) =>
    localStorage.setItem('contactos', JSON.stringify(contactos));

/* Reset Value */
const resetValue = (campo) => {
  campo.value = '';
  campo.placeholder = '';
};

/*Funciones de impresion*/
const resultadoWarn = (texto, valor) => {
  console.warn(texto, valor);
};
const resultadoLog = (texto, valor) => {
  console.log(texto, valor);
};

const modificarDatos = () => {
  const contacto = buscarContacto(
    document.querySelector('#contacto-id').value * 1
  );

  $('.form-div').slideDown('slow');

  nombre.value = contacto.nombre;
  apellido.value = contacto.apellido;
  telefono.value = contacto.telefono;
  celular.value = contacto.celular;
  direccion.value = direccion.celular;
};

const borrarDatos = () => {};

const cargaDatos = (id) => {
  //find del elemento en el arrayContactos
  const contacto = buscarContacto(id);
  // sectionDetalle.style.display = 'none';
  $(sectionDetalle).hide();

  document.querySelector(
    '#article-data-name'
  ).innerHTML = `😀 ${contacto.nombre} ${contacto.apellido}`;
  document.querySelector(
    '#article-data-phone'
  ).innerHTML = `📞 ${contacto.telefono} - ${contacto.celular}`;
  document.querySelector(
    '#article-data-address'
  ).innerHTML = `📭 ${contacto.direccion}`;
  document.querySelector('#contacto-id').value = contacto.id;

  window.setTimeout(() => {
    $(sectionDetalle).show(() => $('.form-div').slideUp('slow'));
  }, 500);
};

const buscarContacto = (id) => {
  return arrayContactos.find((e) => e.id === id);
};

const agregarContacto = () => {
  if (validarForm()) {
    const contacto = new Contacto({
      nombre: nombre.value,
      apellido: apellido.value,
      telefono: telefono.value,
      celular: celular.value,
      direccion: direccion.value,
    });
    contacto['id'] = arrayContactos.length + 1;
    arrayContactos.push(contacto); //Desafio: usar metodo de array
    //contacto.imprime();
    setStorage(arrayContactos);

    resetValue(nombre);
    resetValue(apellido);
    resetValue(telefono);
    resetValue(celular);
    resetValue(direccion);

    agregarContactoLista(contacto);
  }
};

const agregarContactoLista = (contacto) => {
  const div = document.createElement('div'),
    img = document.createElement('img'),
    nombre = document.createElement('h2');

  div.classList.add('card');
  img.src = './img/persona4.webp';
  nombre.innerText = `${contacto.nombre} ${contacto.apellido}`;
  div.append(img);
  div.append(nombre);
  div.id = contacto.id;
  div.addEventListener('click', () => cargaDatos(contacto.id), false);
  divCards.append(div);
};

const agregarContactos = (arrayContactos) => {
  for (const contacto of arrayContactos) {
    agregarContactoLista(contacto);
  }
};

/*Main Array*/
let arrayContactos = getStorage() ? getStorage() : [];
arrayContactos ? agregarContactos(arrayContactos) : null;

const validarForm = () => {
  if (validator.isEmpty(nombre.value)) {
    nombre.placeholder = 'Campo obligatorio';
    return false;
  }
  if (validator.isEmpty(apellido.value)) {
    apellido.placeholder = 'Campo obligatorio';
    return false;
  }
  if (validator.isEmpty(telefono.value)) {
    telefono.placeholder = 'Campo obligatorio';
    return false;
  }
  if (validator.isEmpty(celular.value)) {
    celular.placeholder = 'Campo obligatorio';
    return false;
  }
  if (validator.isEmpty(direccion.value)) {
    direccion.placeholder = 'Campo obligatorio';
    return false;
  }
  return true;
};

/* Codigo jQuery que luego sera removido =) */
$(() => {
  $('#boton-jquery').click(() => {
    $('.form-div').slideUp('slow');
  });
});
