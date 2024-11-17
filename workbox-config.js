module.exports = {
  swDest: 'service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:js|css|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-assets',
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        },
      },
    },
  ],
};
