// JavaScript for hover effect on navigation links
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav__links .link');

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
