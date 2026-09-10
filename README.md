# 🛠️ Ferretería El Tornillo

> *"Soluciones y herramientas para todos tus proyectos."*

Sitio web estático **One-Page**, ultrarrápido, moderno, accesible y 100% responsive (Mobile-First) desarrollado para la pyme local **Ferretería El Tornillo**.

---

## 📍 Información del Negocio

* **Ubicación:** Calle 10 #23-45, barrio Los Pinos.
* **Horario de atención:** Lunes a Sábado, 8:00 a.m. a 6:00 p.m.
* **Teléfono:** (+57) 300 123 4567
* **Líneas principales:** Herramientas, Pintura, Tornillería y Material Eléctrico.

---

## 🎨 Sistema de Diseño y Estilos UI

* **Estilo visual:** Industrial moderno con sombras suaves multicapa y bordes redondeados (`border-radius: 8px`).
* **Paleta de Colores:**
  * **Primario / Estructura:** Gris Grafito Oscuro (`#1E293B`)
  * **Acento / CTA:** Amarillo / Ámbar industrial (`#F59E0B` / `#D97706`)
  * **Fondo general:** Gris ultra claro (`#F8FAFC`)
  * **Texto base:** Slate oscuro (`#0F172A`)
  * **Estados:** Éxito verde (`#10B981`) | Error rojo (`#EF4444`)
* **Tipografía:** Pila moderna de fuentes del sistema sans-serif rápida y accesible.
* **Navegación:** Sticky Navbar con desenfoque de fondo (*glassmorphism*) y desplazamiento suave (`scroll-behavior: smooth`).

---

## 📁 Estructura del Proyecto

```text
ferreteria-el-tornillo/
├── index.html              # Página principal semántica y accesible
├── css/
│   └── estilos.css         # Hoja de estilos con variables y diseño responsivo
├── js/
│   └── contacto.js         # Lógica Vanilla JS de menú móvil y validación
└── img/                    # Galería de imágenes en alta resolución
    ├── hero-ferreteria.jpg
    ├── herramientas.jpg
    ├── pintura.jpg
    ├── tornilleria.jpg
    └── material-electrico.jpg
```

---

## ⚙️ Características Técnicas

* **100% Vanilla:** Desarrollado exclusivamente con HTML5 semántico, CSS3 puro y JavaScript Vanilla (sin dependencias ni frameworks externos).
* **Accesibilidad (a11y):**
  * Uso de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`).
  * Formularios accesibles con `label for`, `aria-describedby` y región dinámica `aria-live="polite"`.
  * Enlace accesible *"Saltar al contenido principal"* para navegación por teclado.
* **Validación de Formulario:**
  * Interceptación mediante `e.preventDefault()`.
  * Validación estricta del campo Nombre (mínimo 2 caracteres limpios).
  * Manejo dinámico de foco (`input.focus()`), bordes de advertencia y mensajes de alerta estilizados.
  * Notificación de éxito destacada en verde y reinicio seguro del formulario (`form.reset()`).

---

## 🚀 Cómo Visualizar el Proyecto

Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari) o ejecútalo con un servidor local estático.
