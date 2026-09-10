/**
 * Ferretería El Tornillo - Lógica de Interacción y Validación de Contacto
 * JavaScript Vanilla Puro
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Elementos del Menú Móvil
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const menuOpenIcon = document.getElementById('menuOpenIcon');
  const menuCloseIcon = document.getElementById('menuCloseIcon');
  const navLinks = document.querySelectorAll('.nav-link');

  // Alternar menú en dispositivos móviles
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');

      if (!isExpanded) {
        menuOpenIcon.style.display = 'none';
        menuCloseIcon.style.display = 'block';
      } else {
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
      }
    });

    // Cerrar menú al hacer click en cualquier enlace de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          menuOpenIcon.style.display = 'block';
          menuCloseIcon.style.display = 'none';
        }
      });
    });
  }

  // 2. Elementos del Formulario de Contacto
  const contactForm = document.getElementById('contactForm');
  const nombreInput = document.getElementById('nombre');
  const mensajeInput = document.getElementById('mensaje');
  const nombreError = document.getElementById('nombreError');
  const mensajeError = document.getElementById('mensajeError');
  const formAlert = document.getElementById('formAlert');
  const alertIcon = document.getElementById('alertIcon');
  const alertMessage = document.getElementById('alertMessage');

  // Helper para renderizar alertas dinámicas
  const showAlert = (type, message) => {
    formAlert.className = 'form-alert';
    if (type === 'error') {
      formAlert.classList.add('alert-error');
      alertIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      `;
    } else if (type === 'success') {
      formAlert.classList.add('alert-success');
      alertIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      `;
    }
    alertMessage.textContent = message;
    formAlert.style.display = 'flex';
  };

  const clearAlert = () => {
    formAlert.className = 'form-alert';
    formAlert.style.display = 'none';
    alertMessage.textContent = '';
    alertIcon.innerHTML = '';
  };

  // Limpiar errores visuales en input individual
  const clearFieldError = (input, errorElement) => {
    input.classList.remove('input-error');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('is-visible');
    }
  };

  // Establecer error en input
  const setFieldError = (input, errorElement, msg) => {
    input.classList.add('input-error');
    if (errorElement) {
      errorElement.textContent = msg;
      errorElement.classList.add('is-visible');
    }
  };

  // Limpiar advertencia en tiempo real mientras el usuario escribe
  nombreInput.addEventListener('input', () => {
    if (nombreInput.value.trim().length >= 2) {
      clearFieldError(nombreInput, nombreError);
      if (formAlert.classList.contains('alert-error')) {
        clearAlert();
      }
    }
  });

  mensajeInput.addEventListener('input', () => {
    if (mensajeInput.value.trim().length > 0) {
      clearFieldError(mensajeInput, mensajeError);
    }
  });

  // 3. Validación y Captura del Submit
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar la recarga de página obligatoria

    // Limpiar estados previos
    clearAlert();
    clearFieldError(nombreInput, nombreError);
    clearFieldError(mensajeInput, mensajeError);

    const nombreVal = nombreInput.value.trim();
    const mensajeVal = mensajeInput.value.trim();

    // REGLA: Comprobar que el campo Nombre tenga al menos 2 caracteres limpios
    if (nombreVal.length < 2) {
      // Si tiene menos de 2 caracteres:
      // 1. Mostrar aviso visual claro en rojo dentro de la página
      showAlert('error', 'Por favor, ingresa un nombre válido de al menos 2 caracteres.');
      // 2. Aplicar borde rojo al input de nombre y hacer enfoque
      setFieldError(nombreInput, nombreError, 'El nombre debe tener al menos 2 caracteres.');
      nombreInput.focus();
      return;
    }

    // Validación secundaria para el mensaje
    if (mensajeVal.length < 5) {
      showAlert('error', 'Por favor, ingresa un mensaje detallado para poder asesorarte.');
      setFieldError(mensajeInput, mensajeError, 'Por favor cuéntanos qué necesitas (mínimo 5 caracteres).');
      mensajeInput.focus();
      return;
    }

    // Si la validación es correcta:
    // 1. Mostrar un mensaje de éxito destacado en verde
    showAlert('success', `¡Gracias por contactarnos, ${nombreVal}! Tu mensaje ha sido recibido con éxito. Nos comunicaremos contigo a la mayor brevedad.`);

    // 2. Limpiar el formulario
    contactForm.reset();

    // 3. Quitar bordes de error si existían
    clearFieldError(nombreInput, nombreError);
    clearFieldError(mensajeInput, mensajeError);

    // Desplazar la vista suavemente al mensaje de confirmación si no está visible
    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
