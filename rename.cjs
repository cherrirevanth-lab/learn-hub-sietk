/**
 * Rename the app everywhere in one command.
 * Usage: node rename.cjs "Your New Name"
 */
const fs = require('fs');
const path = require('path');

const newName = process.argv[2];
if (!newName) {
  console.error('Usage: node rename.cjs "Your New Name"');
  process.exit(1);
}

// 1. Update src/config.js
const configPath = path.join(__dirname, 'src/config.js');
let config = fs.readFileSync(configPath, 'utf8');
config = config.replace(/export const APP_NAME = "[^"]+";/, `export const APP_NAME = "${newName}";`);
fs.writeFileSync(configPath, config);

// 2. Update index.html (title + apple meta)
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/<title>[^<]*<\/title>/, `<title>${newName}</title>`);
html = html.replace(/(name="apple-mobile-web-app-title" content=")[^"]*(")/, `$1${newName}$2`);
fs.writeFileSync(htmlPath, html);

// 3. Update public/manifest.json
const manifestPath = path.join(__dirname, 'public/manifest.json');
let manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.name = newName;
manifest.short_name = newName;
manifest.description = `Subject-wise, unit-wise learning app with question banks and clear explanations for ${newName} students.`;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`✅ App renamed to "${newName}" everywhere.`);
console.log('Now run: npm run build');
