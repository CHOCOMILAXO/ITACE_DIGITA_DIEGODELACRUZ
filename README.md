# ITACE DIGITAL 4.0 — PLANTEL REYNOSA

**Proyecto académico NO OFICIAL.** Portal de demostración con varias páginas, HTML semántico, CSS externo y JavaScript.

## Para empezar (sin editar código)

1. Descomprime la carpeta completa. NO cambies su estructura.
2. Coloca tus imágenes, videos y audios en las rutas exactas indicadas en `GUIA_MULTIMEDIA.txt`.
3. Abre `index.html` con Chrome, Edge o Firefox. El directorio cuenta con respaldo local para abrirse con doble clic.
4. Para probar el JSON real como se pide en la rúbrica, ejecuta un servidor local, por ejemplo `python -m http.server 8000` desde esta carpeta y abre `http://localhost:8000`.
5. Comprueba que las fotografías y videos tengan permisos y que los datos institucionales estén verificados antes de publicarlos.

## Secciones

Inicio, Conócenos, Oferta educativa, Instalaciones, Vida estudiantil, Proyectos, Noticias, Eventos, Admisiones, Docentes, Orgullo ITACE, Galería, Preguntas y Contacto.

## Funcionalidades

- Menú fijo, móvil desplegable y navegación entre páginas.
- Diseño adaptable, estados de enfoque y reducción de movimiento.
- Buscador de docentes por nombre y materia, filtro por área, limpieza y aviso sin resultados.
- Directorio en `datos/docentes.json` y respaldo para apertura local en `js/docentes-respaldo.js`.
- Galería filtrable con ampliación de fotografías.
- Video de portada, dos videos secundarios y reproductores independientes para los dos himnos.

## Archivos principales

- `index.html`: inicio.
- `paginas/`: trece páginas internas.
- `css/style.css`: estilos completos sin minificar.
- `js/script.js`: interacciones.
- `datos/docentes.json`: directorio editable.
- `js/docentes-respaldo.js`: copia para funcionar sin servidor.
- `img/`, `videos/`, `audio/`: multimedia que agregará el estudiante.
- `evidencias/`: capturas del antes/después y pruebas.

## Pendientes antes de entrega

- Verificar la oferta educativa vigente (las ocho carreras provienen del sitio previo).
- Completar nombres de docentes: las fotos de horarios muestran abreviaturas, no nombres completos.
- Revisar materia y grado de cada docente y autorización de su fotografía.
- Verificar fecha de la kermés, horarios escolares, misión y visión oficiales.
- Sustituir imágenes, video de portada, dos videos opcionales y los dos audios.
- Incorporar autores, grupo, docente, créditos y permisos.
- Documentar cinco commits significativos reales en Git (no se pueden inventar retroactivamente).
- Publicar una demo en GitHub Pages y comprobarla en otro dispositivo.
- Guardar capturas de escritorio y móvil y preparar exposición técnica.

## Publicación

Crea un repositorio de GitHub, añade el contenido de esta carpeta, registra tus cambios en commits y activa GitHub Pages en la rama principal. Usa únicamente materiales autorizados. Nunca presentes la demo como sitio oficial.

## Fuentes de consulta

- Portal ITACE: https://itace.edu.mx/
- Plantel Reynosa: https://itace.edu.mx/bachillerato/planteles/plantel-reynosa/
- Inscripción: https://itace.edu.mx/bachillerato/preinscripcion-e-inscripcion/

Autoría y créditos finales: **pendientes**.
