/*LocalStorage*/
const getStorage = () => JSON.parse(localStorage.getItem('contactos')),
  setStorage = (contactos) =>
    localStorage.setItem('contactos', JSON.stringify(contactos));

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

/* Reset Value */
const resetValue = (campo) => {
  campo.value = '';
  campo.placeholder = '';
};

const resetAll = () => {
  resetValue(nombre);
  resetValue(apellido);
  resetValue(telefono);
  resetValue(celular);
  resetValue(direccion);
  resetValue(email);
  submit.innerHTML = 'Agregar';
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

  submit.innerHTML = 'Modificar';

  $('.form-div').fadeIn('slow');

  nombre.value = contacto.nombre;
  apellido.value = contacto.apellido;
  telefono.value = `${contacto.telefono}`;
  celular.value = `${contacto.celular}`;
  direccion.value = contacto.direccion;
  email.value = contacto.email;
};

const borrarDatos = async () => {
  const { value: respuesta } = await Swal.fire({
    title: 'Esta seguro que desea borrar?',
    icon: 'question',
    confirmButtonText: 'Si!!',
    footer: '<b><span style="color:red">No hay vuelta atras!</span></b>',
    toast: true,
    allowEscapeKey: false,
    stopKeydownPropagation: false,
    showCancelButton: true,
    cancelButtonText: 'No!!',
    cancelButtonColor: 'red',
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar alerta',
  });
  if (respuesta) {
    arrayContactos.splice(
      arrayContactos.findIndex(
        (e) => e.id === document.querySelector('#contacto-id').value * 1
      ),
      1
    );
    divCards.innerHTML = '';
    agregarContactos(arrayContactos);
    setStorage(arrayContactos);
    $(sectionDetalle).hide();
    Toast.fire({
      icon: 'success',
      title: 'Contacto borrado',
    });
    resetAll();
  }
};

const cargaDatos = (id) => {
  //find del elemento en el arrayContactos
  const contacto = buscarContacto(id);
  // sectionDetalle.style.display = 'none';
  resetAll();
  $(sectionDetalle).hide();

  document.querySelector(
    '#article-data-name'
  ).innerHTML = `😀 ${contacto.nombre} ${contacto.apellido}`;
  document.querySelector(
    '#article-data-phone'
  ).innerHTML = `📞 ${contacto.telefono} - ${contacto.celular}`;
  document.querySelector('#article-data-address').innerHTML = `📭 ${
    contacto.direccion
  } - 📧 ${contacto.email || 'No informado'}`;
  document.querySelector('#contacto-id').value = contacto.id;

  window.setTimeout(() => {
    // $(sectionDetalle).show(() => $('.form-div').fadeOut('slow'));
    $(sectionDetalle).css('display', 'flex');
  }, 500);
};

const buscarContacto = (id) => {
  return arrayContactos.find((e) => e.id === id);
};

const agregarContacto = () => {
  if (validarForm()) {
    if (submit.innerHTML === 'Modificar') {
      const contacto = buscarContacto(
        document.querySelector('#contacto-id').value * 1
      );

      contacto.nombre = nombre.value;
      contacto.apellido = apellido.value;
      contacto.telefono = telefono.value;
      contacto.celular = celular.value;
      contacto.direccion = direccion.value;
      contacto.email = email.value;

      divCards.innerHTML = '';
      agregarContactos(arrayContactos);
      submit.innerHTML = 'Agregar';
      setStorage(arrayContactos);
      cargaDatos(document.querySelector('#contacto-id').value * 1);
      Toast.fire({
        icon: 'success',
        title: 'Contacto actualizado',
      });
    } else {
      const contacto = new Contacto({
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        celular: celular.value,
        direccion: direccion.value,
        email: email.value,
      });
      contacto['id'] = arrayContactos[arrayContactos.length - 1]
        ? arrayContactos[arrayContactos.length - 1].id + 1
        : 1;
      arrayContactos.push(contacto); //Desafio: usar metodo de array
      //contacto.imprime();
      setStorage(arrayContactos);

      agregarContactoLista(contacto);
      Toast.fire({
        icon: 'success',
        title: 'Contacto agregado',
      });
    }
    resetValue(nombre);
    resetValue(apellido);
    resetValue(telefono);
    resetValue(celular);
    resetValue(direccion);
    resetValue(email);
  }
};

const agregarContactoLista = (contacto) => {
  const div = document.createElement('div'),
    img = document.createElement('img'),
    nombre = document.createElement('h2');

  div.classList.add('card');
  img.src = './img/persona3.webp';
  img.classList.add('rounded-full', 'max-w-[4rem]', 'm-1');
  nombre.innerText = `${contacto.nombre} ${contacto.apellido}`;
  nombre.classList.add('text-sm', 'font-normal', 'ml-3');
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

  if (!validator.isMobilePhone(telefono.value, 'any')) {
    Swal.fire({
      title: 'Nro de telefono erroneo',
      toast: true,
    });
    return false;
  }
  if (validator.isEmpty(celular.value)) {
    celular.placeholder = 'Campo obligatorio';
    return false;
  }
  if (!validator.isMobilePhone(celular.value, 'any')) {
    Swal.fire({
      title: 'Nro de celular erroneo',
      toast: true,
    });
    return false;
  }
  if (validator.isEmpty(direccion.value)) {
    direccion.placeholder = 'Campo obligatorio';
    return false;
  }
  if (!validator.isEmail(email.value)) {
    Swal.fire({
      title: 'Email en formato incorrecto',
      toast: true,
    });
    return false;
  }
  return true;
};

/* Codigo jQuery que luego sera removido =) */
$(() => {
  $('#boton-jquery').click(() => {
    $('.form-div').fadeOut('slow');
  });
});
