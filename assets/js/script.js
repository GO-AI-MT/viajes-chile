$(document).ready(function() {
    // Inicialización de componentes (Tooltips)
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Smooth scroll adicional si fuera necesario
    $("a.nav-link").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    });
});