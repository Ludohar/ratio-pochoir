const CACHE_NAME = 'stencil-ratio-v8';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './pip.html',
  './tmax.html',
  './manifest.json',
  './icon_180.png',
  './icon_512.png',
  './img_top.png',
  './img_side.png',
  './pip_schema.png'
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
