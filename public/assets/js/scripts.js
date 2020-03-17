$(document).ready(function() {


    $('.carousel').carousel();

    $('.popover-dismiss').popover({
        trigger: 'focus'
    });

    $('.short-contact').click(function() {

        $('#pills-contacto-tab').addClass('active');
    });

    //starter JavaScript for disabling form submissions if there are invalid fields
    // (function() {
    //     'use strict';
    //     window.addEventListener('load', function() {
    //         // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //         var forms = document.getElementsByClassName('needs-validation');
    //         // Loop over them and prevent submission
    //         var validation = Array.prototype.filter.call(forms, function(form) {
    //             form.addEventListener('submit', function(event) {
    //                 if (form.checkValidity() === false) {
    //                     event.preventDefault();
    //                     event.stopPropagation();
    //                 }
    //                 form.classList.add('was-validated');
    //             }, false);
    //         });
    //     }, false);
    // })();

    //funcion click icono sobre enviar mensaje: cuando se clickea el icono
    //sobre aparece el formulario de mensaje
    // $('.envelope').click(function(event) {


    //     $('ul#pills-tab li a.nav-link').removeClass('active').attr('aria-selected', 'false');
    //     $('ul#pills-tab #pills-contacto-tab').addClass('active').attr('aria-selected', 'true');
    //     event.preventDefault();

    // });

    // $('.nav-pills .nav-link').click(function() {
    //     $('.envelope').removeClass('active').removeAttr('aria-selected');
    // })

});