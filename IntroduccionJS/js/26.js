// This

// this se usa para referirse a una cosa dentro del mismo objeto. En este caso, this.nombre se refiere al nombre dentro del objeto reservacion.

const reservacion = {
    nombre: 'Thomas',
    apellido: 'Dery',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Lionel',
    apellido: 'Messi',
    total: 15777,
    pagado: true,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();