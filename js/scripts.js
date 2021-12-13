(() => {
  /* Clase Contacto */

  submit.addEventListener('click', () => agregarContacto(), false);

  addContact.addEventListener('click', () => {
    resetValue(nombre);
    resetValue(apellido);
    resetValue(telefono);
    resetValue(celular);
    resetValue(direccion);
    $('.form-div').slideDown('slow');
  });

  closeBar.addEventListener('click', () => {
    colLeft.className = colLeft.className !== 'hide' ? 'hide col-left' : 'show';
    window.setTimeout(() => {
      colLeft.style.display = 'none';
      main.style.gridTemplateColumns = 'auto';
      openBar.style.display = 'block';
    }, 700);
  });

  openBar.addEventListener('click', () => {
    colLeft.className = colLeft.className !== 'show' ? 'show col-left' : 'hide';
    window.setTimeout(() => {
      colLeft.style.display = 'block';
      main.style.gridTemplateColumns = '1fr 6fr';
      openBar.style.display = 'none';
    }, 0);
  });
})();
