document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de un simple saludo que aparece al cargar la página
    alert('Bienvenido a 4Pack - Expertos en envases flexibles');

    // Agregar funcionalidad de scroll suave para la navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let targetElement = document.querySelector(this.getAttribute('href'));
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Funcionalidad para el formulario de contacto
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Evitar que el formulario se envíe automáticamente
        let nombre = form.querySelector('input[type="text"]').value;
        let email = form.querySelector('input[type="email"]').value;
        let mensaje = form.querySelector('textarea').value;
        console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
        alert('Gracias por tu mensaje, te contactaremos pronto.');
    });
});