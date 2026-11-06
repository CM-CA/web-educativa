(function () {
  var contenedor = document.getElementById('lista-recursos');
  if (!contenedor || !window.RECURSOS) return;

  var ETIQUETAS = { pdf: 'Documento', video: 'Vídeo', podcast: 'Podcast' };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function enlace(texto, href, cls) {
    var a = el('a', 'btn small' + (cls ? ' ' + cls : ''), texto);
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener';
    return a;
  }

  function tarjeta(r) {
    var card = el('article', 'resource ' + r.tipo);
    card.dataset.tipo = r.tipo;
    card.appendChild(el('span', 'tag', ETIQUETAS[r.tipo] || r.tipo));
    card.appendChild(el('h3', null, r.titulo));
    if (r.desc) card.appendChild(el('p', null, r.desc));

    var links = el('div', 'links');

    if (!r.url) {
      card.appendChild(el('p', 'notice', 'Próximamente'));
      return card;
    }

    if (r.tipo === 'video') {
      var frame = document.createElement('iframe');
      frame.src = r.url;
      frame.title = r.titulo;
      frame.loading = 'lazy';
      frame.allow = 'accelerometer; encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      card.appendChild(frame);
      if (r.watch) links.appendChild(enlace('Abrir en otra pestaña', r.watch, 'primary'));
    } else if (r.tipo === 'podcast') {
      var audio = document.createElement('audio');
      audio.controls = true;
      audio.preload = 'none';
      audio.src = r.url;
      // Plan B automático: si el audio falla, se cambia a la copia
      audio.addEventListener('error', function () {
        if (r.planB && audio.src.indexOf(r.planB) === -1) {
          audio.src = r.planB;
          audio.load();
        }
      });
      card.appendChild(audio);
    } else {
      links.appendChild(enlace('Abrir', r.url, 'primary'));
    }

    if (r.planB) links.appendChild(enlace('Plan B', r.planB));
    if (links.children.length) card.appendChild(links);
    return card;
  }

  RECURSOS.forEach(function (r) { contenedor.appendChild(tarjeta(r)); });

  // Filtros por tipo
  document.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
      chip.classList.add('active');
      var f = chip.dataset.filter;
      contenedor.querySelectorAll('.resource').forEach(function (c) {
        c.hidden = !(f === 'todos' || c.dataset.tipo === f);
      });
    });
  });
})();
