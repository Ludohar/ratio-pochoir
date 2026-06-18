const CACHE_NAME = 'stencil-ratio-v23';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './pip.html',
  './tmax.html',
  './convert.html',
  './finitions_pcb.html,
  './cms_volume.html',
  './print_setup.html',
  './reflow_helper.html',
  './cleaning_paste.html',
  './line_capacity.html',
  './defects_guide.html',
  './tombstoning_helper.html',
  './defauts_pate.html',
  './my300_tools.html',
  './info.html',
  './manifest.json',
  './icon_180.png',
  './icon_512.png',
  './img_top.png',
  './img_side.png',
  './pip_schema.png',
  './pcb_profile.png',
  './finitions_pcb.html',
  './img/finish_hasl_enig.png',
  './img/surface_finish_summary.png',
  './img/surface_finish_defects.png',
  './img/pcb_colors.png',
  './nettoyage_outils_my300.html',
  './img/nettoyage_lignes_1_3.png',
  './img/nettoyage_ligne_2.png',
  './pcb_printing.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
