const CACHE_NAME = 'menschen-a1-v1';
const AUDIO_CACHE = 'menschen-audio-v1';

// فایل‌هایی که باید کش شوند
const urlsToCache = [
    '/',
    '/index.html',
    '/lesson1.html',
    '/manifest.json',
    '/images/hero-home.jpg',
    '/images/lesson1-cover.jpg',
    // فونت‌ها
    'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap'
];

// نصب Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✅ Cache opened');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// فعال‌سازی
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== AUDIO_CACHE) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// درخواست‌ها
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // کش کردن صداها جداگانه
    if (url.href.includes('translate.google.com/translate_tts')) {
        event.respondWith(
            caches.open(AUDIO_CACHE).then(cache => {
                return cache.match(event.request).then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request).then(networkResponse => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }).catch(() => {
                        // اگر آفلاین بود، هیچی برنگردان
                        return new Response('', { status: 503 });
                    });
                });
            })
        );
        return;
    }

    // بقیه درخواست‌ها
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(networkResponse => {
                    // کش کردن تصاویر جدید
                    if (event.request.destination === 'image') {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, networkResponse.clone());
                        });
                    }
                    return networkResponse;
                });
            })
            .catch(() => {
                // صفحه آفلاین
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            })
    );
});
