const path = require('path');
const { injectManifest } = require('workbox-build');
// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  injectManifest({
    swSrc: path.resolve(__dirname, '../public/sw/service-worker.js'),
    swDest: path.resolve(__dirname, '../public/service-worker.js'),
    globDirectory: 'public',
    globPatterns: ['**/*.{js,json,css}'],
    globIgnores: ['**/node_modules/**/*'],
  })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(
        `${count} files will be precached, totaling ${formatBytes(size)}.`,
      );
    })
    .catch(console.error);
};
buildSW();

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
