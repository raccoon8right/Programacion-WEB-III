import aux from './Ejercicio2.js'
// Ejercicio 5
// Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
// al revés)
function ejercicio5(x) {
    let y = x
    const pal = aux(x)
    if (pal == y) return true
    else return false
}
let band = ejercicio5('oruro')
console.log(band)
let bant = ejercicio5('hola')
console.log(bant)