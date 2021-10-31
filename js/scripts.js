//console.log('hola');
const nombre = prompt('Ingrese su nombre');
const edad = parseInt(prompt('Ingrese su edad'));
const edad_lustro = edad + 5;

console.log('Hola ' + nombre + '!. Nos alegra verte de nuevo!');
console.log(
  'Gracias a nuestra tecnologia de avanzada podremos saber cuantos años vas a tener dentro de un lustro!'
);
console.log('Tu edad sera: ' + edad_lustro + ' años!!!');
if (edad_lustro <= 30) {
  console.log('Vos todavia no te preocupas por nada, viva la vida loca!!');
} else {
  console.log(
    'Uhhh eso dolio, pero bueno, lo importante es que estamos vivos no? =)'
  );
}
if (nombre.toUpperCase() === 'ROBERTO') {
  console.log(
    'No importa lo que diga arriba, ya con este nombre, eres un viejo igual! JAJA con amor obvio'
  );
}
