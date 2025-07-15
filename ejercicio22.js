/* Ejercicio 22
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante. */
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
function menuVegano(menu, fruits) {
  const final = []
  let fruitIdx = 0
  for (const item of menu) {
    if (item.isVegan) {
      final.push({ ...item })
    } else if (fruitIdx < fruits.length) {
      final.push({ name: fruits[fruitIdx++], isVegan: true })
    }
  }
  return final
}
const nuevoMenu = menuVegano(foodSchedule, fruits)
console.log(nuevoMenu)
