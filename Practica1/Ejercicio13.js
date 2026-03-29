// Ejercicio 13
// Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible

function pasoUno() {
    return new Promise(resolve => setTimeout(() => resolve('Resultado paso 1'), 1000))
}
function pasoDos(valor) {
    return new Promise(resolve => setTimeout(() => resolve(`Resultado paso 2 con ${valor}`), 1000))
}
function pasoTres(valor) {
    return new Promise(resolve => setTimeout(() => resolve(`Resultado paso 3 con ${valor}`), 1000))
}

/* ANIDAMINETO DE PROMESAS */

pasoUno()
    .then(res1 => {
        console.log(res1)
        pasoDos(res1)
            .then(res2 => {
                console.log(res2)
                pasoTres(res2)
                    .then(res3 => {
                        console.log(res3)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    })
    .catch(err => console.error(err))

/* ASYNC/AWAIT */

async function ejecutar() {
    try {
        console.log(await pasoUno());
        console.log(await pasoDos(res1));
        console.log(await pasoTres(res2));
    } catch (err) {
        console.error(err);
    }
}

ejecutar();