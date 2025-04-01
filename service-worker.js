const CACHE_NAME = "pwa-google-sheets-v1";
const STATIC_FILES = [
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",
    "icon.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_FILES);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
