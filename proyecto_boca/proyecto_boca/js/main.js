$(document).ready(function() {
    // Activar el elemento del menú correspondiente a la página actual
    const currentPage = window.location.pathname.split('/').pop();
    
    $('.nav-menu a').each(function() {
        const linkPage = $(this).attr('href').split('/').pop();
        if (linkPage === currentPage) {
            $(this).parent().addClass('active');
        }
    });

    // Manejar formularios
    $('form').on('submit', function(e) {
        e.preventDefault();
        // Validación y envío del formulario
        alert('Formulario enviado correctamente');
    });

    // Manejar botones de eliminación
    $('.btn-delete').on('click', function() {
        if (confirm('¿Está seguro que desea eliminar este elemento?')) {
            // Lógica para eliminar
            alert('Elemento eliminado');
        }
    });
});
