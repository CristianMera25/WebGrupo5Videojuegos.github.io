window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-container a');
    const span = document.querySelector('.nav-container span');
    const page = window.location.pathname.split('/').pop();

    let positions = {
        "index.html": { left: '155px', width: '127px' },
        "desarrollo.html": { left: '283px', width: '147px' },
        "UI.html": { left: '433px', width: '67px' },
        "equipo.html": { left: '500px', width: '127px' },
        "juego.html": { left: '667px', width: '133px' }
    };

    // Agregar clase activo al enlace correspondiente
    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('activo');
            // Posición inicial del span según la página
            span.style.left = positions[page].left;
            span.style.width = positions[page].width;
        } else {
            link.classList.remove('activo');
        }

        // Evento hover para animación (tu animación CSS seguirá funcionando)
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            if (positions[href]) {
                span.style.left = positions[href].left;
                span.style.width = positions[href].width;
            }
        });

        // Cuando se quita hover, regresar al enlace activo
        link.addEventListener('mouseleave', () => {
            const activo = document.querySelector('.nav-container a.activo');
            if (activo) {
                const href = activo.getAttribute('href');
                if (positions[href]) {
                    span.style.left = positions[href].left;
                    span.style.width = positions[href].width;
                }
            }
        });
    });
});