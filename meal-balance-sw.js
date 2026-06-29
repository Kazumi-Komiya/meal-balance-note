const CACHE_NAME = "meal-balance-note-v1";
const ASSETS = [
  "./meal-balance-helper.html",
  "./meal-balance-helper.webmanifest",
  "./meal-balance-icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
