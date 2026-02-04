// sw.js
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Dit zorgt ervoor dat de app werkt, zelfs met een slechte verbinding op de berg
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
