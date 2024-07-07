let listaDePrueba = [1, 2, 3, 4, 5];

// let listaResultante = listaDePrueba.map( numero => numero * 2);
// console.log(listaResultante); // [1, 2, 3, 4, 5]

// let listaConcatenada = listaDePrueba.concat(listaResultante);
// console.log(listaConcatenada); // [1, 2, 3, 4, 5, 2, 4, 6, 8, 10]

// const usuarios = ["Felipe", "Juan", "Maria", "Ana", "Luis", "Pedro", "Pablo", "Jose", "Carlos", "Andres"];
// let letraInicial = 'P'; // Define la letra con la que quieres comparar
// let filtrarPorNombre = usuarios.filter(nombre => nombre.startsWith(letraInicial));
// console.log(filtrarPorNombre);

const productos = [
    {id: 1, nombre: 'Televisor', precio: 1000, categoria: 'Electrónica'},
    {id: 2, nombre: 'Lavadora', precio: 500, categoria: 'Electrodomésticos'},
    {id: 3, nombre: 'Sofá', precio: 700, categoria: 'Muebles'},
    {id: 4, nombre: 'Cama', precio: 800, categoria: 'Muebles'},
];

let aplicarleDescuento = productos.map(producto => {
    if (producto.precio >= 750) 
    return productoConDescuento = {
        ...producto,
        precio: producto.precio * 0.9
    };
});

// console.log(aplicarleDescuento); // [ { id: 1, nombre: 'Televisor', precio: 900, categoria: 'Electrónica' }, undefined, { id: 3, nombre: 'Sofá', precio: 630, categoria: 'Muebles' }, { id: 4, nombre: 'Cama', precio: 720, categoria: 'Muebles' } ]

const idProducto = productos.map(producto => producto.id);

const esBarato = productos.precio < 750;
const esCaro = !esBarato(producto);
const productoBarato = productos.filter(esBarato); // o producto => producto.precio < 750
// console.log(productoBarato); // [ { id: 2, nombre: 'Lavadora', precio: 500, categoria: 'Electrodomésticos' } ]


