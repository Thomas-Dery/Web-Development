document.addEventListener('DOMContentLoaded', function() { // se usa para que el script se ejecute una vez que el documento ha sido cargado
    navegacionFija();
    crearGaleria();
    mostrarImagen();
    cerrarModal();
    resaltarEnlace();
    scrollNav()
    crearGaleria(); 
});

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}// se ejecuta cada vez que se hace scroll
    

function crearGaleria() {
    const cantImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= cantImagenes; i++) {
        
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'imagen galeria';
 
        // event handler
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen); // se agrega la imagen al div galeria
    }
}

function mostrarImagen(i) {
    
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'imagen galeria';

    // generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal
    modal.appendChild(imagen);

    //boton cerrar
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);
    

    // agregar al html
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    body.appendChild(modal);

}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-Out');

    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden')
    }, 500);
    
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navlinks = document.querySelectorAll('.navegacion-principal a');

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    actual = section.id
            }
        })

        navlinks.forEach( link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navlinks = document.querySelectorAll('.navegacion-principal a');

    navlinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}