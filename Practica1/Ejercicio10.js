// Ejercicio 10
// ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una
// promesa?

/* 
Callback: 
    Es una función que se pasa como argumento a otra función y 
    se ejecuta después de que ocurra algo (por ejemplo, una operación asíncrona).
*/
function esperarC(segundos, callback) {
    setTimeout(() => {
        callback('Listo')
    }, segundos * 1000)
}

esperarC(2, (mensaje) => {
    console.log(mensaje)
})

/*
Promesa: 
    Es un objeto que representa un valor que estará disponible 
    ahora, en el futuro o nunca. Permite encadenar acciones con .then() y 
    manejar errores con .catch(), evitando el anidamiento excesivo de callbacks.
*/
function esperarP(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Listo')
        }, segundos * 1000)
    })
}

esperarP(2).then((mensaje) => console.log(mensaje))