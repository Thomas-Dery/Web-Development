
// Declaracion de funciones

function sumar() {
    console.log(10 * 10);
}

sumar(); // llamo a la funcion

// Expresion de la funcion
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); // llamo a la funcion

// IIFE evita que no se mesclen las funciones de otros archivos
(function() {
    console.log("Esto es una funcion");
})(); // se llama a si misma


