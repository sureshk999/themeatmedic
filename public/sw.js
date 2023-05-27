const PRECACHE = 'precache-v1'
const RUNTIME = 'runtime'

const PRECACHE_URLS = [
  './about', // Alias for index.html
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  const currentCaches = [PRECACHE, RUNTIME]
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName))
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete)
          })
        )
      })
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }
        return fetch(event.request)
          .then((response) => {
            // Clone the response since it can only be consumed once
            const clonedResponse = response.clone()

            // Open the runtime cache and store the response with a 60-second expiration
            caches.open(RUNTIME).then((cache) => {
              cache.put(event.request, clonedResponse, { expiration: { maxAgeSeconds: 60 } })
            })

            return response
          })
          .catch((error) => {
            // Handle fetch errors
            console.error('Error fetching:', error)
            // You can customize the fallback response here if needed
          })
      })
    )
  }
  // Ignore all other requests, including POST requests
})
