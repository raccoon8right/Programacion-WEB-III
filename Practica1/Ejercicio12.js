// Ejercicio 12
// Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible

/* CALLBACK */
function leerArchivo(nombre, callback) {
    setTimeout(() => {
        console.log(`Leyendo ${nombre}`)
        callback(null, `contenido de ${nombre}`)
    }, 1000);
}

function procesarDatos(datos, callback) {
    setTimeout(() => {
        console.log(`Procesando: ${datos}`)
        callback(null, `resultado procesado de ${datos}`)
    }, 1000);
}

function guardarResultado(resultado, callback) {
    setTimeout(() => {
        console.log(`Guardando: ${resultado}`)
        callback(null, 'Archivo guardado')
    }, 1000);
}

// Anidamiento (pirámide de la muerte)
leerArchivo('documento.txt', (err, contenido) => {
    if (err) return console.error(err)
    procesarDatos(contenido, (err, procesado) => {
        if (err) return console.error(err)
        guardarResultado(procesado, (err, final) => {
            if (err) return console.error(err)
            console.log(final);
        });
    });
});

/* PROMESAS */
function leerArchivo(nombre) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Leyendo ${nombre}`);
            resolve(`contenido de ${nombre}`);
        }, 1000);
    });
}

function procesarDatos(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Procesando: ${datos}`)
            resolve(`resultado procesado de ${datos}`)
        }, 1000);
    });
}

function guardarResultado(resultado) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Guardando: ${resultado}`)
            resolve('Archivo guardado')
        }, 1000);
    });
}

// Encadenamiento lineal con .then()
leerArchivo('documento.txt')
    .then(contenido => procesarDatos(contenido))
    .then(procesado => guardarResultado(procesado))
    .then(final => console.log(final))
    .catch(err => console.error(err))