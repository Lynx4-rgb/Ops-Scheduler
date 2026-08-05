// Minimal service worker — just enough to satisfy browsers' "installable app"
// criteria so the icon appears as a real app rather than a browser shortcut.
// Deliberately does not cache anything, so the app always loads the latest
// version from the network (no stale-content surprises after you push edits).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass every request straight through to the network.
  event.respondWith(fetch(event.request));
});
