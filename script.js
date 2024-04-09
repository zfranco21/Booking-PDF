document.addEventListener('DOMContentLoaded', function () {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const categoryId = this.getAttribute('href').substring(1); // Obtener el ID de la categoría
            const sections = document.querySelectorAll('.intro-text');
            sections.forEach(function (section) {
                if (categoryId === 'todos') {
                    section.classList.remove('hidden'); // Mostrar todas las secciones
                } else if (section.id === categoryId) {
                    section.classList.remove('hidden'); // Mostrar la sección correspondiente
                } else {
                    section.classList.add('hidden'); // Ocultar otras secciones
                }
            });
        });
    });
});