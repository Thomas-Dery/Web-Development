// Async / Await

function descargarClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    })
};

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 5000);
    })
};

// setInterval(function() {
//     console.log('SetInterval...');
// }, 3
// 000);

async function app() {
    try {
        // const clientes = await descargarClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(resultado);

        const resultado = await Promise.all([descargarClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();