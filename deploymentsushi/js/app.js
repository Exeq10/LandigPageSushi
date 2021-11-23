document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    navegacionFija();
};

function navegacionFija() {

    const relleno = document.querySelector('.navegacion_principal');

    const nosotros = document.querySelector('.logo_header');

    window.addEventListener('scroll', function() {
        if (nosotros.getBoundingClientRect().top < 0) {

            relleno.classList.add('fijo')

        } else {

            relleno.classList.remove('fijo')

        }
    })
}