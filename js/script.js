// ITACE DIGITAL 4.0 — JavaScript sin minificar.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('open', !expanded);
  });
}

// Directorio: JSON externo, búsqueda por nombre y materia, filtro por área.
const teacherList = document.getElementById('teacher-list');
if (teacherList) {
  const search = document.getElementById('doc-search');
  const area = document.getElementById('doc-area');
  const count = document.getElementById('doc-count');
  const clear = document.getElementById('clear-search');
  let teachers = [];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function render() {
    const term = normalize(search.value.trim());
    const selected = area.value;
    const results = teachers.filter(teacher => {
      const matchesText = normalize(teacher.nombre + ' ' + teacher.materias.join(' ') + ' ' + teacher.area + ' ' + teacher.titulos).includes(term);
      return matchesText && (!selected || teacher.area === selected);
    });
    count.textContent = `${results.length} docente(s) encontrado(s)`;
    teacherList.innerHTML = results.map(teacher => {
      const filename = teacher.foto.split('/').pop();
      const photo = `../img/docentes/${encodeURIComponent(filename)}`;
      const detail = (label, value) => {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          return '';
        }

        const content = Array.isArray(value) ? value.join(', ') : value;
        return `<p><strong>${label}:</strong> ${escapeHTML(content)}</p>`;
      };

      return `<article class="teacher-card">
        <img
          class="teacher-photo"
          src="${photo}"
          alt="Fotografía de ${escapeHTML(teacher.nombre)}"
          loading="lazy"
          onerror="this.outerHTML='<div class=&quot;teacher-avatar&quot; aria-hidden=&quot;true&quot;>👤</div>'"
        >
        <div class="teacher-info">
          <h3>${escapeHTML(teacher.nombre)}</h3>
          ${detail('Área', teacher.area)}
          ${detail('Materias', teacher.materias)}
          ${detail('Semestres', teacher.grados)}
          ${detail('Formación académica', teacher.titulos)}
          ${detail('Años en el ITACE', teacher.antiguedad)}
        </div>
      </article>`;
    }).join('') || '<p>No hay coincidencias. Prueba con otra búsqueda.</p>';
  }
  // Fallback para abrir el sitio directamente con file://, donde fetch de JSON puede bloquearse.
  const loadTeachers = async () => {
    try {
      const response = await fetch('../datos/docentes.json');
      if (!response.ok) throw new Error('No se pudo leer el archivo JSON');
      teachers = await response.json();
    } catch (error) {
      if (Array.isArray(window.DOCENTES_RESPALDO)) {
        teachers = window.DOCENTES_RESPALDO;
      } else {
        count.textContent = 'No fue posible cargar los datos del directorio.';
      }
    }
    populateAreas();
    render();
  };
  // Las opciones de área se generan con los datos reales del directorio.
  function populateAreas() {
    const areas = [...new Set(teachers.map(t => t.area))].sort((a, b) => a.localeCompare(b, 'es'));
    area.innerHTML = '<option value="">Todas las áreas</option>';
    areas.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      area.appendChild(option);
    });
  }
  search.addEventListener('input', render);
  area.addEventListener('change', render);
  clear.addEventListener('click', () => { search.value = ''; area.value = ''; render(); search.focus(); });
  loadTeachers();
}

// Galería: filtros por categoría y visualización ampliada.
const galleryButtons = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-img');
if (galleryButtons.length && lightbox && lightboxImage) {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(item => item.classList.remove('active'));
      chip.classList.add('active');
      galleryButtons.forEach(item => {
        item.hidden = chip.dataset.filter !== 'all' && item.dataset.category !== chip.dataset.filter;
      });
    });
  });
  galleryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      if (!image || !image.complete || !image.naturalWidth) return;
      lightboxImage.src = button.dataset.src;
      lightboxImage.alt = image.alt;
      lightbox.showModal();
    });
  });
  document.getElementById('close-lightbox').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
}
