/* Ejercicio 7
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos. */
function numeroMasAlto(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne)
  } else if (numberTwo > numberOne) {
    console.log(numberTwo)
  } else {
    console.log('Los números son iguales')
  }
}

// Ejemplo
console.log('Número más alto entre 10 y 20:')
numeroMasAlto(10, 20)
