// Ejercicio 9
// Crear una promesa que devuelva un mensaje de éxito después de 3 segundos
function promesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('EXITO')
        }, 3000)
    })
}

promesa()
    .then((mensaje) => console.log(mensaje))