//Ajax para carga de contacto desde una Api: randomuser.com

$(ajax).click(() => {
  $.ajax({
    url: 'https://randomuser.me/api',
    success: function (data) {
      /** Trate de usar RegEx pero no lo pude hacer funcionar nunca ja! */
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
      contacto['id'] = arrayContactos[arrayContactos.length - 1]
        ? arrayContactos[arrayContactos.length - 1].id + 1
        : 1;
      arrayContactos.push(contacto);
      setStorage(arrayContactos);

      agregarContactoLista(contacto);
      Toast.fire({
        icon: 'success',
        title: 'Contacto agregado',
      });
    },
  });
});
