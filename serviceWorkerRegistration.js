import { registerSW } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const registration = registerSW({
    workerSrc: '/service-worker.js',
  });
  registration.addEventListener('error', (error) => {
    console.error('Error during service worker registration:', error);
  });
}
