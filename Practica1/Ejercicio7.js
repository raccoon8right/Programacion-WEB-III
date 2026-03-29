// Ejercicio 7
// Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
// elementos de un arreglo, mediante desestructuración
const arr = [30, 25, 20, 15, 10, 5, 0]
const [x, y, ...resto] = arr
console.log(resto)

