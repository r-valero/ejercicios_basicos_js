/* Ejercicio 13
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función: */
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Natasha',
  'Marc'
]
function nameFinder(list, value) {
  const posiciones = []
  list.forEach((item, idx) => {
    if (item === value) posiciones.push(idx)
  })
  return posiciones.length ? [true, posiciones] : false
}
console.log(nameFinder(names, 'Natasha'))
console.log(nameFinder(names, 'Hulk'))
