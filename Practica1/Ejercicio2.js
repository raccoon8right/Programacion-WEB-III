// Ejercicio 2
// Crear una función que invierta el orden de las palabras en una frase
export default function ejercicio2(x) {
    let nuevo = ""
    for (let i = x.length ; i >= 0 ; i--) {
        nuevo += x.charAt(i)
    }
    return nuevo
}
let cad = ejercicio2('abcd')
console.log(cad)