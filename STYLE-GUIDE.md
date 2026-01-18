# 📐 Guía de Estilo - José Candon Portfolio

Sistema de diseño unificado para mantener consistencia visual en todas las páginas del portfolio.

---

## 🎨 Instalación

### 1. Incluir archivos CSS en tu HTML

```html
<head>
  <link rel="stylesheet" href="../styles/design-system.css" />
  <link rel="stylesheet" href="../styles/site-styles.css" />
</head>
```

### 2. Estructura HTML base

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Título de la Página</title>
  <link rel="icon" type="image/png" href="../Media/favicon.png" />
  <link rel="stylesheet" href="../styles/design-system.css" />
  <link rel="stylesheet" href="../styles/site-styles.css" />
</head>
<body>
  <!-- Navegación -->
  <header class="site-header">
    <a href="../" class="site-logo">José Candon</a>
    <div style="display: flex; gap: 8px; align-items: center;">
      <button class="theme-toggle" aria-label="Cambiar tema" onclick="toggleTheme()">
        <!-- SVG icons aquí -->
      </button>
      <button class="mobile-menu-toggle" aria-label="Menú" onclick="toggleMenu()">
        <!-- SVG icon aquí -->
      </button>
    </div>
    <nav class="site-nav" id="mainNav">
      <a href="../#proyectos" class="nav-link">Proyectos</a>
      <a href="../about/" class="nav-link">Sobre mí</a>
      <a href="https://github.com/MingosGit" target="_blank" rel="noopener" class="nav-link">GitHub</a>
      <a href="https://www.linkedin.com/in/jose-candon/" target="_blank" rel="noopener" class="nav-link">LinkedIn</a>
    </nav>
  </header>

  <!-- Contenido principal -->
  <main class="main-container">
    <!-- Tu contenido aquí -->
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <p class="footer-text">© 2025 José Candon Rubio</p>
  </footer>

  <!-- JavaScript esencial -->
  <script src="../scripts/theme.js"></script>
</body>
</html>
```

---

## 🎯 Componentes Principales

### Navegación Flotante

```html
<header class="site-header">
  <a href="../" class="site-logo">José Candon</a>
  <nav class="site-nav">
    <a href="#section" class="nav-link">Link</a>
  </nav>
</header>
```

**Características:**
- Fixed position con glassmorphism
- Adapta automáticamente a tema oscuro
- Responsive con menú móvil hamburguesa

---

### Secciones

```html
<section class="section">
  <div class="section-header">
    <p class="section-label">Etiqueta</p>
    <h2 class="section-title">Título de Sección</h2>
    <p class="section-description">Descripción opcional...</p>
  </div>
  <!-- Contenido de la sección -->
</section>
```

**Clases disponibles:**
- `.section` - Contenedor principal (max-width 1100px)
- `.section-label` - Label pequeño con gradiente
- `.section-title` - Título grande responsive
- `.section-description` - Texto descriptivo

---

### Cards / Tarjetas

```html
<div class="card">
  <h3>Título de Card</h3>
  <p>Contenido de la card...</p>
</div>
```

**Efectos automáticos:**
- Hover con elevación y barra superior gradiente
- Adaptación a tema oscuro con glassmorphism
- Transiciones suaves

---

### Botones

```html
<!-- Botón primario (gradiente púrpura) -->
<a href="#" class="btn btn-primary">Acción Principal →</a>

<!-- Botón secundario (outline) -->
<a href="#" class="btn btn-secondary">Acción Secundaria</a>
```

**Variantes:**
- `.btn-primary` - Gradiente púrpura, para CTA principales
- `.btn-secondary` - Outline, para acciones secundarias

---

### Badges / Tags

```html
<span class="badge">
  <span>🐍</span> Python
</span>
<span class="badge">React</span>
```

**Características:**
- Hover con transformación a gradiente
- Soporte para emojis/iconos
- Auto-adaptación al tema

---

## 🌈 Sistema de Colores

### Colores Principales (Light Mode)

```css
--color-primary: #ff6b35;      /* Naranja - CTAs */
--color-secondary: #004e89;    /* Azul oscuro */
--color-accent: #f77f00;       /* Naranja brillante */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* Púrpura */
--gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);  /* Cyan */
```

### Variables de Tema

```css
/* Fondos */
--bg-primary: #f8f9fa;
--bg-secondary: #ffffff;
--card-bg: #ffffff;

/* Textos */
--text-primary: #1a1a2e;       /* Títulos */
--text-secondary: #4a5568;     /* Párrafos */

/* Bordes */
--border-color: rgba(102, 126, 234, 0.15);

/* Sombras */
--shadow-color: rgba(102, 126, 234, 0.4);
```

---

## 🌙 Modo Oscuro

El tema oscuro se activa automáticamente con `[data-theme="dark"]` en el elemento `<html>`.

### Diferencias principales:

```css
[data-theme="dark"] {
  --bg-primary: #0f0f1e;
  --card-bg: rgba(26, 26, 46, 0.6);  /* Con transparencia */
  --text-primary: #ffffff;
  --text-secondary: #cbd5e0;
  --gradient-primary: linear-gradient(135deg, #7c8fef 0%, #9370c7 100%); /* Más brillante */
}
```

**Adaptaciones especiales en dark mode:**
- Cards con glassmorphism (backdrop-filter)
- Gradientes más brillantes
- Emojis con fondos semi-transparentes
- Shadows más intensos

---

## 📱 Responsive Design

### Breakpoints

```css
/* Tablet */
@media (max-width: 768px) { }

/* Móvil */
@media (max-width: 600px) { }

/* Móvil pequeño */
@media (max-width: 380px) { }

/* Táctil (sin hover) */
@media (hover: none) and (pointer: coarse) { }
```

### Comportamiento móvil automático:

- Navegación → Menú hamburguesa
- Grids → 1 columna
- Botones → Ancho completo
- Padding reducido

---

## ⚡ JavaScript Esencial

### Toggle de Tema Oscuro

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Actualizar iconos
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

// Cargar tema guardado
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
```

### Menú Móvil

```javascript
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('is-open');
}

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('.site-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('is-open');
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  const nav = document.getElementById('mainNav');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('is-open');
  }
});
```

---

## 🎭 Animaciones

### Keyframes disponibles:

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { transform: translateX(-50%) translateY(-100px); opacity: 0; }
  to { transform: translateX(-50%) translateY(0); opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(5deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
}
```

### Uso:

```css
.mi-elemento {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}
```

---

## ♿ Accesibilidad

### Incluido automáticamente:

✅ **Reducción de movimiento** para usuarios con sensibilidad
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

✅ **Focus visible** para navegación por teclado
```css
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}
```

✅ **ARIA labels** en botones interactivos
```html
<button aria-label="Cambiar tema" onclick="toggleTheme()">
```

✅ **Contraste WCAG AA** en modo oscuro

---

## 📦 Ejemplos de Páginas

### Página de Proyecto

```html
<main class="main-container">
  <section class="section">
    <div class="section-header">
      <p class="section-label">Proyecto</p>
      <h1 class="section-title">Nombre del Proyecto</h1>
      <p class="section-description">Descripción breve...</p>
    </div>

    <div class="card">
      <h3>Características</h3>
      <ul>
        <li>Característica 1</li>
        <li>Característica 2</li>
      </ul>
    </div>

    <div style="display: flex; gap: var(--space-sm); margin-top: var(--space-lg);">
      <a href="#demo" class="btn btn-primary">Ver Demo →</a>
      <a href="#code" class="btn btn-secondary">Ver Código</a>
    </div>

    <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: var(--space-md);">
      <span class="badge">🐍 Python</span>
      <span class="badge">⚛️ React</span>
      <span class="badge">📊 Data Science</span>
    </div>
  </section>
</main>
```

### Página "Sobre Mí"

```html
<main class="main-container">
  <section class="section">
    <div class="section-header">
      <p class="section-label">Sobre mí</p>
      <h1 class="section-title">José Candon Rubio</h1>
      <p class="section-description">Desarrollador especializado en Python, IA y análisis de datos.</p>
    </div>

    <div class="card">
      <h3>Experiencia</h3>
      <p>Contenido...</p>
    </div>

    <div class="card">
      <h3>Habilidades</h3>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <span class="badge">Python</span>
        <span class="badge">Machine Learning</span>
        <span class="badge">Power BI</span>
      </div>
    </div>
  </section>
</main>
```

---

## 🚀 Optimización de Performance

### Incluido en el sistema:

✅ **will-change** en elementos animados
✅ **backdrop-filter** con soporte webkit
✅ **Lazy loading** recomendado para imágenes
✅ **DNS prefetch** para recursos externos
✅ **Preload** de CSS crítico

### Recomendaciones:

```html
<!-- Preload CSS -->
<link rel="preload" as="style" href="../styles/site-styles.css" />

<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://github.com" />

<!-- Lazy loading imágenes -->
<img src="..." loading="lazy" alt="..." />
```

---

## 📝 Checklist para Nueva Página

- [ ] Incluir `design-system.css` y `site-styles.css`
- [ ] Copiar estructura de navegación con logo y menú
- [ ] Añadir `class="main-container"` al main
- [ ] Incluir footer con copyright
- [ ] Copiar JavaScript de tema y menú móvil
- [ ] Añadir meta tags (charset, viewport, description)
- [ ] Incluir favicon
- [ ] Probar en mobile y desktop
- [ ] Verificar tema oscuro funciona
- [ ] Validar accesibilidad (focus, ARIA)

---

## 🆘 Problemas Comunes

### El tema oscuro no funciona
✅ Verifica que el JavaScript de `toggleTheme()` esté incluido
✅ Comprueba que el HTML tenga el atributo `data-theme`

### El menú móvil no se abre
✅ Verifica que el `id="mainNav"` esté en el nav
✅ Incluye el JavaScript de `toggleMenu()`

### Los estilos no se aplican
✅ Verifica las rutas relativas (`../styles/`)
✅ Asegúrate que `design-system.css` se carga primero

### Las variables CSS no funcionan
✅ Usa `var(--nombre-variable)` para acceder
✅ Las variables están definidas en `:root`

---

## 📧 Contacto

Si tienes dudas sobre la implementación:
- Email: josecandonrubio@gmail.com
- GitHub: [@MingosGit](https://github.com/MingosGit)

---

**Versión:** 1.0  
**Última actualización:** Enero 2025
