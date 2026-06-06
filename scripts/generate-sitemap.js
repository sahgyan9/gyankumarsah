import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine root directory paths in ES Modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');
const SITEMAP_PATH = path.resolve(PUBLIC_DIR, 'sitemap.xml');
const DOMAIN = 'https://www.gyankumarsah.com.np';

// Define public pages list for mapping
const pages = [
  { file: 'index.html', route: '', priority: '1.0', changefreq: 'weekly' },
  { file: 'work-gallery.html', route: 'work-gallery.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'resources.html', route: 'resources.html', priority: '0.8', changefreq: 'monthly' },
  { file: 'books.html', route: 'books.html', priority: '0.8', changefreq: 'monthly' }
];

function generateSitemap() {
  console.log('Generating sitemap.xml...');

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    const filePath = path.resolve(ROOT_DIR, page.file);
    let lastmod = new Date().toISOString().split('T')[0]; // Fallback to current date

    try {
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        lastmod = stats.mtime.toISOString().split('T')[0];
      }
    } catch (e) {
      console.warn(`Could not fetch stats for ${page.file}, using current date fallback.`, e);
    }

    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/${page.route}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  // Make sure output folder exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`Sitemap compiled successfully at: ${SITEMAP_PATH}`);
}

generateSitemap();
