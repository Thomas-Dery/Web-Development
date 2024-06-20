// Arrays

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
console.table(meses);

const arreglo = ["hola", 10, true, "si", null, {nombre: "juan", trabajo: "programador"}, [1,2,3]];
console.log(arreglo);

// acceder a los valores del array
// console.log(numeros[4]);

// conocer la extension de un array
// console.log(meses.length);

// numeros.forEach(function(mes) {
//     console.log(mes);
// });

numeros[5] = 60; //argregando un valor al array en la posicion 5, pero necesito saber cantidad de elementos del array

numeros.push(60); //agrega un valor al final del array
numeros.unshift(-10); //agrega un valor al inicio del array
meses.pop(); //elimina el ultimo valor del array
meses.shift(); //elimina el primer valor del array
meses.splice(2, 1); //elimina un valor en la posicion 2 del array

const nuevoArreglo = [...meses, "Mayo"]; //agrega un valor al final del array
console.log(nuevoArreglo);



