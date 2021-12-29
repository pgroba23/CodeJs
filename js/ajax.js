$(ajax).click(() => {
  $.ajax({
    url: 'https://randomuser.me/api',
    success: function (data) {
      const phone = data['results'][0]['phone']
        .replaceAll('-', '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll(' ', '')
        .trim();
      const cell = data['results'][0]['cell']
        .replaceAll('-', '')
        .replaceAll('(', '')
        .replaceAll(')', '')
        .replaceAll(' ', '')
        .trim();
      const contacto = new Contacto({
        nombre: data['results'][0]['name']['first'],
        apellido: data['results'][0]['name']['last'],
        telefono: phone,
        celular: cell,
        direccion: `${data['results'][0]['location']['street']['name']} ${data['results'][0]['location']['street']['number']}`,
        email: data['results'][0]['email'],
      });
      contacto['id'] = arrayContactos.length + 1;
      arrayContactos.push(contacto); //Desafio: usar metodo de array
      //contacto.imprime();
      setStorage(arrayContactos);

      agregarContactoLista(contacto);
      Toast.fire({
        icon: 'success',
        title: 'Contacto agregado',
      });
    },
  });
});
