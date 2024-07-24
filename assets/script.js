// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        // Redirige a mi página thank-you.html
        window.location.href = 'thank-you.html';
    });
});
