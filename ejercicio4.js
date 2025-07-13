//Dado el siguiente array:
const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
console.log(aldeanos)
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log('4.1')
console.log(aldeanos[3])
//4.2 - Coloca en el último lugar de este array a "Cervasio".
console.log('4.2')
aldeanos.push('Cervasio')
console.log(aldeanos)
//4.3 - Cambia el primer elemento de este array por "Bambina".
console.log('4.3')
aldeanos[0] = 'Bambina'
console.log(aldeanos)
//4.4 - Dale la vuelta a este array.
console.log('4.4')
aldeanos.reverse()
console.log(aldeanos)
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
console.log('4.5')
aldeanos.splice(1, 1, 'Canela')
console.log(aldeanos)
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.
console.log('4.6')
console.log(aldeanos[aldeanos.length - 1])
