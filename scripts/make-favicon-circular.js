import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const src = path.resolve(ROOT_DIR, 'public/profile.jpeg');
const destPng = path.resolve(ROOT_DIR, 'public/favicon.png');
const destIco = path.resolve(ROOT_DIR, 'public/favicon.ico');

async function cropCircular() {
  try {
    if (!fs.existsSync(src)) {
      console.error(`Source image not found: ${src}`);
      return;
    }

    console.log('Reading and resizing source image to 192x192 square...');
    
    // Create a circular mask SVG with exact 192x192 dimensions
    const svgMask = Buffer.from(
      `<svg width="192" height="192">
        <circle cx="96" cy="96" r="96" fill="black" />
       </svg>`
    );

    console.log('Applying circular mask...');
    
    // 1. Generate 192x192 PNG for high-res favicon devices
    await sharp(src)
      .resize(192, 192, { fit: 'cover', position: 'center' })
      .composite([{
        input: svgMask,
        blend: 'dest-in'
      }])
      .png()
      .toFile(destPng);

    console.log(`Saved high-res circular PNG to: ${destPng}`);

    // 2. Generate 48x48 PNG and save as favicon.ico (fallback for search engines/classic browsers)
    if (fs.existsSync(destIco)) {
      fs.unlinkSync(destIco);
    }
    
    await sharp(destPng)
      .resize(48, 48)
      .toFile(destIco);

    console.log(`Saved circular compatibility ICO to: ${destIco}`);
    console.log('Circular favicon generation completed successfully!');
  } catch (err) {
    console.error('Error during circular favicon generation:', err);
  }
}

cropCircular();
