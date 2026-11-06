/*
  LISTA DE RECURSOS — es lo único que tienes que editar para añadir material.

  Cada recurso tiene:
    tipo:    "pdf" | "video"
    titulo:  nombre visible
    desc:    descripción corta
    url:     enlace principal (para vídeo: enlace de EMBED, p. ej. https://www.youtube.com/embed/ID)
    planB:   enlace alternativo (copia en otra plataforma: Drive, Vimeo, otra carpeta del repo...)
    watch:   (solo vídeo) enlace normal para abrir el vídeo en otra pestaña

  Si "url" está vacío, el recurso aparece como «Próximamente».
  Para copias propias en el repositorio, guarda los archivos en la carpeta assets/ y usa
  rutas como "assets/ejercicios-javascript-tema1.pdf".
*/
window.RECURSOS = [
  {
    tipo: "video",
    titulo: "Introducción a JavaScript",
    desc: "Vídeo de introducción al curso.",
    url: "https://www.youtube.com/embed/Z34BF9PCfYg",
    watch: "https://youtu.be/Z34BF9PCfYg",
    planB: ""
  },
  {
    tipo: "pdf",
    titulo: "Ejercicios básicos del Tema 1",
    desc: "Tres ejercicios para practicar variables, condicionales y bucles.",
    url: "assets/ejercicios-javascript-tema1.pdf",
    planB: ""
  }
];
