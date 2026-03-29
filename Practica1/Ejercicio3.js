// Ejercicio 3
// Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
// e impares
function ejercicio3(x) {
    let obj = {pares: [], impares: []}
    for (let i = 0 ; i < x.length ; i++) {
        if (x[i] % 2 == 0) obj.pares.push(x[i])
        else obj.impares.push(x[i])
    }
    return obj
}
let vec = ejercicio3([1, 2, 3, 4, 5])
console.log(vec)