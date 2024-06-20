// Promises 

const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario autenticado');
    } else {
        reject('No se pudo iniciar sesión');
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

    
// En los promises existen 3 valores posibles:
// - fulfilled - El promise se cumplió
// - rejected - El promise no se cumplió
// - pending - No se ha cumplido y tampoco fue rechazado