const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const faviconPath = path.join(__dirname, 'public', 'favicon.png');
const outputPath = path.join(__dirname, 'public', 'favicon-optimized.png');

sharp(faviconPath)
  .resize(64, 64)
  .png({ quality: 80, compressionLevel: 9 })
  .toFile(outputPath)
  .then(() => {
    fs.unlinkSync(faviconPath);
    fs.renameSync(outputPath, faviconPath);
    console.log('Favicon optimized successfully.');
  })
  .catch(err => {
    console.error('Error optimizing favicon:', err);
  });
