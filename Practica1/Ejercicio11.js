// Ejercicio 11
// Proporcione un ejemplo concreto de encadenamiento de promesas

function paso_uno(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Listo 1')
        }, segundos * 1000)
    });
}

function paso_dos(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Listo 2')
        }, segundos * 1000)
    });
}

function paso_tres(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Listo 3')
        }, segundos * 1000)
    });
}

paso_uno(1)
    .then((mensaje) => {
        console.log(mensaje)
        return paso_dos(2)
    })
    .then((mensaje) => {
        console.log(mensaje)
        return paso_tres(3)
    })
    .then((mensaje) => {
        console.log(mensaje)
    })
    .catch((error) => {
        console.log('ERROR: ', error)
    })