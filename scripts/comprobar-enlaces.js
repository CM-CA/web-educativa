// Comprueba que todos los enlaces de js/recursos-data.js responden.
// Uso (necesita Node 18+):  node scripts/comprobar-enlaces.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const raiz = path.join(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(raiz, 'js/recursos-data.js'), 'utf8'), sandbox);

async function probar(url) {
  if (!url) return null;
  if (!/^https?:/.test(url)) {
    return fs.existsSync(path.join(raiz, url)) ? 'OK (archivo local)' : 'FALLA: no existe el archivo';
  }
  try {
    let r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (r.status === 405 || r.status === 403) r = await fetch(url, { redirect: 'follow' });
    return r.ok ? 'OK (' + r.status + ')' : 'FALLA: HTTP ' + r.status;
  } catch (e) {
    return 'FALLA: ' + e.message;
  }
}

(async () => {
  let fallos = 0;
  for (const r of sandbox.window.RECURSOS) {
    for (const campo of ['url', 'watch', 'planB']) {
      const res = await probar(r[campo]);
      if (res === null) continue;
      if (res.startsWith('FALLA')) fallos++;
      console.log(`[${r.tipo}] ${r.titulo} · ${campo}: ${res}`);
    }
  }
  console.log(fallos ? `\n${fallos} enlace(s) con problemas.` : '\nTodos los enlaces comprobados responden.');
  process.exit(fallos ? 1 : 0);
})();
