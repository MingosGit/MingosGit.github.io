// ============================================
// TEMA OSCURO Y MENÚ MÓVIL
// JavaScript compartido para todas las páginas
// ============================================

/**
 * Toggle entre tema claro y oscuro
 */
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Cambiar iconos sol/luna
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (newTheme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

/**
 * Cargar tema guardado al iniciar
 */
(function() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  if (savedTheme === 'dark') {
    document.addEventListener('DOMContentLoaded', () => {
      const sunIcon = document.querySelector('.sun-icon');
      const moonIcon = document.querySelector('.moon-icon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    });
  }
})();

/**
 * Toggle menú móvil
 */
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('is-open');
}

/**
 * Cerrar menú cuando se hace clic en un enlace
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      nav.classList.remove('is-open');
    });
  });

  /**
   * Cerrar menú al hacer clic fuera de él
   */
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mainNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('is-open');
    }
  });
});
