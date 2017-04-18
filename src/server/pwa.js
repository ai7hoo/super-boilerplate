export default () => {
    if (typeof window === 'undefined') return

    console.log('PWA initial')

    self.addEventListener('install', (event) => {
        // Perform install steps
        console.log('service worker - install', event)
    })

    self.addEventListener('fetch', (event) => {
        // Handle requests
        console.log('service worker - fetch', event)
    })

    self.addEventListener('activate', (event) => {
        // Clean up old cache versions
        console.log('service worker - activate', event)
    })
}