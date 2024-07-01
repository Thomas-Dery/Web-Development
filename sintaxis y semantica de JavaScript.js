// Declaración de variables
let nombre = "Juan";
const edad = 25;

// Declaración de una función
function saludar() {
    console.log("Hola, " + nombre + "!");
}

// Llamada a la función
saludar();

// Estructura de control if-else
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Bucle for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Arreglo
let numeros = [1, 2, 3, 4, 5];

// Iteración sobre un arreglo
for (let numero of numeros) {
    console.log(numero);
}

// Objeto
let persona = {
    nombre: "Juan",
    edad: 25,
    profesion: "Desarrollador"
};

// Acceso a propiedades de un objeto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// Selección de Elementos:

document.querySelector(selector) // Selecciona el primer elemento que coincide con el selector CSS especificado. Ejemplo: let elemento = document.querySelector(".miClase");

document.querySelectorAll(selector) // Selecciona todos los elementos que coinciden con el selector CSS especificado. Ejemplo: let elementos = document.querySelectorAll(".miClase");

document.getElementById(id) // Selecciona un elemento por su ID. Ejemplo: let elemento = document.getElementById("miId");

document.getElementsByClassName(clase) // Selecciona todos los elementos con una clase específica. Ejemplo: let elementos = document.getElementsByClassName("miClase");

document.getElementsByTagName(etiqueta) // Selecciona todos los elementos con un nombre de etiqueta específico. Ejemplo: let elementos = document.getElementsByTagName("div");

// Manipulación de Elementos:

element.innerHTML // Obtiene o establece el contenido HTML de un elemento. Ejemplo: elemento.innerHTML = "Nuevo contenido";

element.textContent // Obtiene o establece el contenido de texto de un elemento. Ejemplo: elemento.textContent = "Nuevo texto";

element.setAttribute(atributo, valor) // Establece un atributo en un elemento. Ejemplo: elemento.setAttribute("src", "nuevaImagen.jpg");

element.getAttribute(atributo) // Obtiene el valor de un atributo de un elemento. Ejemplo: let src = elemento.getAttribute("src");

element.style.property // Establece una propiedad CSS en un elemento. Ejemplo: elemento.style.backgroundColor = "red";

element.classList.add(clase) // Añade una clase a la lista de clases de un elemento. Ejemplo: elemento.classList.add("nuevaClase");

element.classList.remove(clase) // Elimina una clase de la lista de clases de un elemento. Ejemplo: elemento.classList.remove("miClase");

element.classList.toggle(clase) // Añade o elimina una clase dependiendo de si existe o no. Ejemplo: elemento.classList.toggle("miClase");

element.appendChild(nodo) // Añade un nuevo nodo al final de la lista de un elemento hijo. Ejemplo: elemento.appendChild(nuevoElemento);

element.insertBefore(nuevoNodo, nodoExistente) // Inserta un nuevo nodo antes de un nodo existente. Ejemplo: elemento.insertBefore(nuevoNodo, nodoExistente);

element.removeChild(nodo) // Elimina un nodo hijo del DOM. Ejemplo: elemento.removeChild(hijo);

element.replaceChild(nuevoNodo, nodoExistente) // Reemplaza un nodo hijo por otro. Ejemplo: elemento.replaceChild(nuevoNodo, nodoExistente);

// Eventos:

element.addEventListener(evento, funcion) // Añade un evento a un elemento. Ejemplo: elemento.addEventListener("click", function() { alert("Clickeado!"); });

element.removeEventListener(evento, funcion) // Elimina un evento de un elemento. Ejemplo: elemento.removeEventListener("click", miFuncion);

// Creación de Elementos:

document.createElement(etiqueta) // Crea un nuevo elemento HTML. Ejemplo: let nuevoElemento = document.createElement("div");

// Manejo de Formularios:

formElement.submit() // Envía el formulario. Ejemplo: formulario.submit();

formElement.reset() // Reinicia los campos del formulario. Ejemplo: formulario.reset();

// Propiedades del DOM:

document.body // Accede al elemento <body> del documento. Ejemplo: document.body.style.backgroundColor = "blue";

document.head // Accede al elemento <head> del documento. Ejemplo: let titulo = document.head.querySelector("title");

// Navegación del DOM:

element.parentNode // Accede al nodo padre. Ejemplo: let padre = elemento.parentNode;

element.childNodes // Accede a los nodos hijos. Ejemplo: let hijos = elemento.childNodes;

element.firstChild // Accede al primer nodo hijo. Ejemplo: let primerHijo = elemento.firstChild;

element.lastChild // Accede al último nodo hijo. Ejemplo: let ultimoHijo = elemento.lastChild;

element.nextSibling // Accede al siguiente nodo en el mismo nivel. Ejemplo: let siguiente = elemento.nextSibling;

element.previousSibling // Accede al nodo anterior en el mismo nivel. Ejemplo: let anterior = elemento.previousSibling;

// Métodos de Arrays:

// filter()
let numerossss = [1, 2, 3, 4, 5];
let numerosPares = numeros.filter(numero => numero % 2 === 0);
// Selecciona todos los elementos que cumplen con la condición especificada. Ejemplo: let numerosPares = numeros.filter(numero => numero % 2 === 0);

// map()
let numerosCuadrados = numeros.map(numero => numero * numero);
// Crea un nuevo array con los resultados de llamar a una función para cada elemento del array. Ejemplo: let numerosCuadrados = numeros.map(numero => numero * numero);

// forEach()
numeros.forEach(numero => console.log(numero));
// Ejecuta una función para cada elemento del array. Ejemplo: numeros.forEach(numero => console.log(numero));

// reduce()
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor. Ejemplo: let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

// some()
let hayNumerosMayoresQueTres = numeros.some(numero => numero > 3);
// Comprueba si al menos un elemento en el array cumple con la condición especificada. Ejemplo: let hayNumerosMayoresQueTres = numeros.some(numero => numero > 3);

// every()
let todosSonPositivos = numeros.every(numero => numero > 0);
// Comprueba si todos los elementos en el array cumplen con la condición especificada. Ejemplo: let todosSonPositivos = numeros.every(numero => numero > 0);

// find()
let primerNumeroPar = numeros.find(numero => numero % 2 === 0);
// Devuelve el primer elemento que cumple con la condición especificada. Ejemplo: let primerNumeroPar = numeros.find(numero => numero % 2 === 0);

// findIndex()
let indicePrimerNumeroPar = numeros.findIndex(numero => numero % 2 === 0);
// Devuelve el índice del primer elemento que cumple con la condición especificada. Ejemplo: let indicePrimerNumeroPar = numeros.findIndex(numero => numero % 2 === 0);

// concat()
let otrosNumeros = [6, 7, 8];
let todosLosNumeros = numeros.concat(otrosNumeros);
// Combina dos o más arrays. Ejemplo: let todosLosNumeros = numeros.concat(otrosNumeros);

// slice()
let algunosNumeros = numeros.slice(1, 3);
// Devuelve una copia de una parte del array dentro de un nuevo array. Ejemplo: let algunosNumeros = numeros.slice(1, 3);

// splice()
numeros.splice(2, 0, 10);
// Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos. Ejemplo: numeros.splice(2, 0, 10); // Añade el número 10 en la posición 2

// sort()
let numerosOrdenados = numeros.sort((a, b) => a - b);
// Ordena los elementos de un array. Ejemplo: let numerosOrdenados = numeros.sort((a, b) => a - b);

// reverse()
let numerosInvertidos = numeros.reverse();
// Invierte el orden de los elementos en un array. Ejemplo: let numerosInvertidos = numeros.reverse();
