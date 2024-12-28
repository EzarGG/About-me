// Enhanced JavaScript for interactivity and animations
document.addEventListener("DOMContentLoaded", function() {
    const exploreButton = document.getElementById('explore-button');
    const header = document.querySelector('header');

    exploreButton.addEventListener('click', function() {
        alert('Welcome to EzarGG! Explore our amazing products!');
    });

    // Change header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
