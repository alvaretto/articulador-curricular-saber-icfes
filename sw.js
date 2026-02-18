// sw.js — Service Worker para Articulador Curricular
// Estrategia: Network-first con fallback a cache (siempre sirve la versión más reciente)

const CACHE_NAME = 'articulador-curricular-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // Estilos
  './src/ui/styles.css',
  // Datos
  './src/data/ebc-matematicas.js',
  './src/data/ebc-lenguaje.js',
  './src/data/ebc-naturales.js',
  './src/data/ebc-sociales.js',
  './src/data/ebc-ingles.js',
  './src/data/dba.js',
  './src/data/planes-matematicas.js',
  './src/data/progresion-vertical.js',
  './src/data/icfes-matematicas.js',
  './src/data/icfes-lectura-critica.js',
  './src/data/icfes-naturales.js',
  './src/data/icfes-sociales.js',
  './src/data/icfes-ingles.js',
  './src/data/planes-lenguaje.js',
  './src/data/preguntas-icfes.js',
  // Assets
  './src/assets/logo-default.png',
  './src/assets/logo-azul.png',
  './src/assets/logo-morado.png',
  './src/assets/logo-verde.png',
  './src/assets/logo-naranja.png',
  './src/assets/logo-rojo.png',
  // Motor
  './src/engine/filtros.js',
  './src/engine/articulacion.js',
  './src/engine/busqueda.js',
  './src/engine/exportacion.js',
  './src/engine/almacenamiento.js',
  './src/engine/icfes.js',
  // IA
  './src/ia/connector.js',
  './src/ia/templates.js',
  // UI
  './src/ui/app.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
