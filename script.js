document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbar = document.getElementById('navbar');

    navbarToggle.addEventListener('click', function() {
        // This will toggle the "active" class on the navbar
        navbar.classList.toggle('active');

        // Toggle aria-expanded for accessibility
        const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' || false;
        navbarToggle.setAttribute('aria-expanded', !expanded);
    });
});
