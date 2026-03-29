// Ejercicio 15
// Proporcione un ejemplo para convertir un callback en una promesa

/* CALLBACK */
function leerArchivoCallback(nombre, callback) {
    setTimeout(() => {
        // Simula éxito o error
        if (nombre === 'valido.txt') {
            callback(null, 'Contenido del archivo');
        } else {
            callback(new Error('Archivo no encontrado'));
        }
    }, 1000);
}

/* PROMESA */
function leerArchivoPromesa(nombre) {
    return new Promise((resolve, reject) => {
        leerArchivoCallback(nombre, (err, contenido) => {
            if (err) reject(err);
            else resolve(contenido);
        });
    });
}

// Uso de la promesa
leerArchivoPromesa('valido.txt')
    .then(console.log)      // 'Contenido del archivo'
    .catch(console.error);  // Maneja el error si ocurre

