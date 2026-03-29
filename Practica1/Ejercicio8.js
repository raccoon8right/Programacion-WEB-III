// Ejercicio 8
// Realizar un código para ejecutar una función callback después 2 segundos
function ejercicio8(callback) {
    setTimeout(() => {
        const t = '2 seg'
        callback(t)
    }, 2000)
}

function miFuncion(x) {
    console.log(`En proceso de los ${x}`)
}
const time = ejercicio8(miFuncion)
