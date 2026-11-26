const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, 'assets/icon-master.svg'));
const out = path.join(__dirname, 'public/icons');
fs.mkdirSync(out, { recursive: true });

const sizes = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-64.png', size: 64 },
  { name: 'icon-32.png', size: 32 },
  { name: 'icon-16.png', size: 16 },
];

(async () => {
  for (const { name, size } of sizes) {
    await sharp(svg).resize(size, size).png().toFile(path.join(out, name));
  }
  await sharp(svg).resize(192, 192).png().toFile(path.join(__dirname, 'public/icon-192.png'));
  await sharp(svg).resize(512, 512).png().toFile(path.join(__dirname, 'public/icon-512.png'));
  console.log('Generated flat icon set:', sizes.map(s=>s.size).join(', '));
})();
