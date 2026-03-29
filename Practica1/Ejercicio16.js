// Ejercicio 16
// Proporcione un ejemplo para migrar una función con promesas a async/await

/* PROMESAS */
function obtenerUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, nombre: 'Ana' }), 1000);
    });
}

function obtenerPedidos(usuario) {
    return new Promise(resolve => {
        setTimeout(() => resolve([{ producto: 'Laptop' }, { producto: 'Mouse' }]), 1000);
    });
}

function procesarPedidos(pedidos) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Total: ${pedidos.length} productos`), 1000);
    });
}

// Uso con promesas encadenadas
function obtenerResumen(id) {
    return obtenerUsuario(id)
        .then(usuario => {
            console.log('Usuario:', usuario);
            return obtenerPedidos(usuario);
        })
        .then(pedidos => {
            console.log('Pedidos:', pedidos);
            return procesarPedidos(pedidos);
        })
        .catch(error => console.error(error));
}

obtenerResumen(1).then(console.log);

/* ASYNC/AWAIT */
async function obtenerResumen(id) {
    try {
        const usuario = await obtenerUsuario(id);
        console.log('Usuario:', usuario);

        const pedidos = await obtenerPedidos(usuario);
        console.log('Pedidos:', pedidos);

        const resultado = await procesarPedidos(pedidos);
        return resultado;
    } catch (error) {
        console.error(error);
    }
}

obtenerResumen(1).then(console.log);
