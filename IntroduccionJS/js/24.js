// For Loop

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 0; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`El numero ${i} es par`);
//     } else {
//         console.log(`El numero ${i} es impar`);
//     }
// }

const carrito = [ 
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "Television 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800}
];

for(let i = 0; i < carrito.length; i++) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// While Loop

let i = 0; 

while(i < 10) {
    console.log(`Numero: ${i}`);
    i++;
}

while(i <= 10) {
    if(i % 2 === 0) {
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
    }
    i++;
}

// Do While Loop

// let i = 0;

// do {

//     console.log(i);
//     i++;

// } while(i < 10);

