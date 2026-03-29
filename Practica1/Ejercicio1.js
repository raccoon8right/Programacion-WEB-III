// Ejercicio 1
// Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
// resultado en un objeto
function ejercicio1(x) {
    let vocales = {a: 0 , e: 0, i: 0 , o: 0, u: 0}
    for (let i = 0 ; i < x.length ; i++) {
        let letra = x.charAt(i).toLowerCase()
        if (letra == 'a') vocales.a += 1
        else if (letra == 'e') vocales.e += 1
        else if (letra == 'i') vocales.i += 1
        else if (letra == 'o') vocales.o += 1
        else if (letra == 'u') vocales.u += 1
    }
    return vocales
}
let obj = ejercicio1('euforia')
console.log(obj)