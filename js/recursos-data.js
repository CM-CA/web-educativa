/*
  LISTA DE RECURSOS — es lo único que tienes que editar para añadir material.

  Cada recurso tiene:
    tipo:    "pdf" | "video" | "podcast"
    titulo:  nombre visible
    desc:    descripción corta
    url:     enlace principal (para vídeo: enlace de EMBED, p. ej. https://www.youtube.com/embed/ID)
    planB:   enlace alternativo (copia en otra plataforma: Drive, Vimeo, Internet Archive, otra carpeta del repo...)
    watch:   (solo vídeo) enlace normal para abrir el vídeo en otra pestaña

  Si "url" está vacío, el recurso aparece como «Próximamente».
  Para copias propias en el repositorio, guarda los archivos en la carpeta assets/ y usa
  rutas como "assets/tema1.pdf".
*/
window.RECURSOS = [
  {
    tipo: "pdf",
    titulo: "Apuntes del Tema 1 (ejemplo)",
    desc: "Documento de ejemplo: sustitúyelo por tu PDF real.",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    planB: "assets/tema1.pdf"
  },
  {
    tipo: "pdf",
    titulo: "Ejercicios del Tema 1",
    desc: "Pendiente de añadir.",
    url: "",
    planB: ""
  },
  {
    tipo: "video",
    titulo: "Introducción al tema",
    desc: "Pendiente de añadir. Pega aquí el enlace de embed del vídeo.",
    url: "",
    watch: "",
    planB: ""
  },
  {
    tipo: "podcast",
    titulo: "Episodio 1: primeros pasos",
    desc: "Pendiente de añadir. Admite un archivo .mp3 (p. ej. assets/episodio1.mp3).",
    url: "",
    planB: ""
  }
];
