// self es similar al this pero para los services workers
// install indica que se llamará cuando el navegador instale los services workers
// El callback recibirá el evento
// Creamos un precaché, éste tendrá una lista de recursos los cuales queremos se almacenen en caché y se pueda acceder a ellos sin internet

const VERSION = "v1"

self.addEventListener('install', event => {
	// Decimos que espere a que cargue el caché
	event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
	const request = event.request;

	// Métodos get
	if (request.method !=== 'GET') {
		return;
	}

	// Buscamos en caché
	event.respondWith(cacheResponse(request));

	// Actuializar en caché
	event.waitUntil(updateCache(request));
});

async function precache(argument) {
	// v1 indica la versión 1
	// nos devuelve una promesa
	const cache = await caches.open(VERSION);

	return cache.addAll([
		'./',
		'./index.html',
        './index.js',
        './MediaPlayer.js',
        './plugins/AutoPause.js',
        './plugins/AutoPlay.js',
        './index.css',
        './BigBunny.mp4'
	]);
}

async function cacheResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await cache.match(request);
	return response || fetch(request)
}

async function updateResponse(request) {
	const cache = await caches.open(VERSION);
	const response = await fetch(request);

	return cache.put(request, response);
}