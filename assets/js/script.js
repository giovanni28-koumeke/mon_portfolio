// Sélection de toutes les sections et de tous les liens de navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Configuration de l'IntersectionObserver
const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -60% 0px', // Déclenche le changement quand la section entre bien dans l'écran
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute('id');
      
      // Mise à jour de la classe 'active' sur les liens
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}, observerOptions);

// Observer chaque section de la page
sections.forEach(section => observer.observe(section));