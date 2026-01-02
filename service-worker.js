const CACHE_NAME = 'stencil-ratio-v16';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './pip.html',
  './tmax.html',
  './convert.html',
  './cms_volume.html',
  './print_setup.html',
  './reflow_helper.html',
  './cleaning_paste.html',
  './line_capacity.html',
  './defects_guide.html',
  './tombstoning_helper.html',
  './my300_tools.html',
  './info.html',
  './manifest.json',
  './icon_180.png',
  './icon_512.png',
  './img_top.png',
  './img_side.png',
  './pip_schema.png',
  './pcb_profile.png',
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
