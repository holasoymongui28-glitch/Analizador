/* Password Securex - offline first-party app shell only.
   Never cache third-party advertising, entered passwords or clipboard data. */
const VERSION = 'securex-v3-20261013';
const SHELL = ['./index.html', './manifest.webmanifest', './icons/securex-192.png', './icons/securex-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('securex-') && key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== self.location.origin || e.request.method !== 'GET') return;
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(async () => (await caches.match('./index.html')) || Response.error()));
  } else if (u.pathname.endsWith('/manifest.webmanifest') || /\/icons\/securex-(?:192|512)\.png$/.test(u.pathname)) {
    e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
  }
});
