// Metodos de propiedad
const reprodcutor = {
    reproducir: function(id){
        console.log('Reproduciendo Cancion: ${id}');
    },
    pausar: function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre){
        console.log('Creando Playlist: ${nombre}');
    },
    reproducirPlaylist: function(nombre){
        console.log('Reproduciendo Playlist: ${nombre}');
    }
}

reprodcutor.borrarCancion = function(id){
    console.log('Borrando Cancion: ${id}');
}

reprodcutor.reproducir(3840);
reprodcutor.pausar();
reprodcutor.borrarCancion(20);
reprodcutor.crearPlaylist('Heavy Metal');