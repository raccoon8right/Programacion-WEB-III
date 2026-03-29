// Ejercicio 4
// Crear una función que reciba un arreglo de números y devuelva el número mayor y el
// menor, en un objeto
function ejercicio4(x) {
    let obj = {mayor: 0, menor: 0}
    let may = 0
    for (let i = 0 ; i < x.length ; i++) {
        if (x[i] > may) {
            may = x[i]
        }
    }
    obj.mayor = may
    let men = may
    for (let i = 0 ; i < x.length ; i++) {
        if (men > x[i]) {
            men = x[i]
        }
    }
    obj.menor = men
    return obj
}
let arr = ejercicio4([3, 1, 5, 4, 2])
console.log(arr)