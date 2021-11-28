(() => {
  /* Clase Contacto */

  submit.addEventListener('click', () => agregarContacto(), false);

  addContact.addEventListener('click', () => {
    resetValue(nombre);
    resetValue(apellido);
    resetValue(telefono);
    resetValue(celular);
    resetValue(direccion);
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

  if (getStorage() && getStorage().find((e) => e.telefono === 11111111)) {
    cincoContactos.textContent = 'Ya lo usaste';
    cincoContactos.disabled = true;
    cincoContactos.style.background = 'grey';
  } else {
    cincoContactos.addEventListener('click', () => {
      const arrayRandom = [
        new Contacto({
          nombre: 'Pablo',
          apellido: 'Groba',
          telefono: 11111111,
          celular: 22222222,
          direccion: 'La pampa 123',
        }),
        new Contacto({
          nombre: 'Carlos',
          apellido: 'Garcia',
          telefono: 3333333,
          celular: 4444444,
          direccion: 'La chimba 123',
        }),
        new Contacto({
          nombre: 'Jose',
          apellido: 'Perez',
          telefono: 5555555,
          celular: 6666666,
          direccion: 'Doble H 123',
        }),
        new Contacto({
          nombre: 'Gaston',
          apellido: 'Rodriguez',
          telefono: 77777777,
          celular: 8888888,
          direccion: 'La salta 123',
        }),
        new Contacto({
          nombre: 'Pedro',
          apellido: 'Alfonso',
          telefono: 9999999,
          celular: 000000,
          direccion: 'White 123',
        }),
      ];
      setStorage(arrayRandom);
      arrayContactos = getStorage();
      agregarContactos(arrayRandom);
      cincoContactos.textContent = 'Ya lo usaste';
      cincoContactos.style.background = 'grey';
      cincoContactos.disabled = true;
    });
  }
})();
