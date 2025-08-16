// DevVoxel Docs Service Worker
const CACHE_NAME = 'devvoxel-docs-v1';
const urlsToCache = [
    '/',
    '/playerdatasync/playerdatasync',
    '/bungeesystem/bungeesystem',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
    'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('DevVoxel Docs: Cache opened');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('DevVoxel Docs: Cache installation failed:', error);
            })
    );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('DevVoxel Docs: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Background sync for feedback
self.addEventListener('sync', (event) => {
    if (event.tag === 'feedback-sync') {
        event.waitUntil(
            // Handle offline feedback submission
            console.log('DevVoxel Docs: Syncing feedback when online')
        );
    }
});

// Push notifications (for future updates)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'DevVoxel Docs wurde aktualisiert!',
        icon: '/icon-192.png',
        badge: '/badge-72.png',
        tag: 'devvoxel-update'
    };

    event.waitUntil(
        self.registration.showNotification('DevVoxel Docs', options)
    );
});
