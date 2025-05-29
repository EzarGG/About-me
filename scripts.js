// Highlight active navigation link
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.href === window.location.href || link.href === window.location.origin + window.location.pathname) {
      link.classList.add('active');
    }
  });

  // Optional greeting animation
  const introTitle = document.getElementById('intro-title');
  if (introTitle) {
    introTitle.style.opacity = 0;
    introTitle.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
      introTitle.style.opacity = 1;
    }, 200);
  }
});
