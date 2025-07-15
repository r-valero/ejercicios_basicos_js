/* Ejercicio 15
Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
Usa la función .includes de javascript. */
const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]
function showCamisetas(list) {
  list.forEach((item) => {
    if (item.includes('Camiseta')) {
      console.log(item)
    }
  })
}
showCamisetas(products)
