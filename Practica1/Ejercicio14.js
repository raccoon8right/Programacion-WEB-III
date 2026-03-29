// Ejercicio 14
// Proporcione un ejemplo para convertir una promesa en un callback

/* PROMESA */
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // simula éxito
            if (exito) resolve('Datos obtenidos');
            else reject(new Error('Error al obtener datos'));
        }, 1000);
    });
}


/* CALLBACK */
function obtenerDatosCallback(callback) {
    obtenerDatos()
        .then(resultado => callback(null, resultado))  // error = null, resultado = valor
        .catch(error => callback(error));              // error = error, resultado = undefined
}

// Uso del callback
obtenerDatosCallback((err, datos) => {
    if (err) {
        console.error('Error:', err.message);
    } else {
        console.log('Éxito:', datos);
    }
});
