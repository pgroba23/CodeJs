(() => {
  //event listener del submit
  submit.addEventListener('click', () => agregarContacto(), false);
  //event listener del Agregar contacto
  addContact.addEventListener('click', () => {
    resetAll();
    $('.form-div').fadeIn('slow');
  });

  //event listener cierre menu
  closeBar.addEventListener('click', () => {
    colLeft.className = colLeft.className !== 'hide' ? 'hide col-left' : 'show';
    window.setTimeout(() => {
      colLeft.style.display = 'none';
      main.style.gridTemplateColumns = 'auto';
      openBar.style.display = 'block';
    }, 700);
  });
  //event listener apertura menu
  openBar.addEventListener('click', () => {
    colLeft.className = colLeft.className !== 'show' ? 'show col-left' : 'hide';
    window.setTimeout(() => {
      colLeft.style.display = 'block';
      main.style.gridTemplateColumns = 'repeat(7, minmax(0, 1fr))';
      openBar.style.display = 'none';
    }, 0);
  });
})();
