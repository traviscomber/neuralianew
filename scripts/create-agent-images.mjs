import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './public/images/living-agents';

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create SVG templates for each missing agent
const templates = {
  sentinel: `
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a472a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0d2818;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad1)"/>
      <circle cx="100" cy="60" r="35" fill="#00d99f" opacity="0.3"/>
      <circle cx="280" cy="140" r="45" fill="#00d99f" opacity="0.2"/>
      <line x1="50" y1="30" x2="150" y2="30" stroke="#00d99f" stroke-width="2" opacity="0.6"/>
      <line x1="250" y1="100" x2="350" y2="100" stroke="#00d99f" stroke-width="2" opacity="0.6"/>
      <text x="200" y="180" font-size="16" fill="#00d99f" text-anchor="middle" font-family="Arial" opacity="0.8">El Centinela</text>
    </svg>
  `,
  historian: `
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2c1a47;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a0d2d;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad2)"/>
      <path d="M 50 50 L 100 30 L 150 50 L 150 150 L 50 150 Z" fill="#7c3aed" opacity="0.3" stroke="#7c3aed" stroke-width="2"/>
      <circle cx="300" cy="80" r="30" fill="#7c3aed" opacity="0.3"/>
      <rect x="260" y="120" width="80" height="60" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" stroke-width="2"/>
      <line x1="80" y1="60" x2="80" y2="140" stroke="#7c3aed" stroke-width="2" opacity="0.6"/>
      <text x="200" y="180" font-size="16" fill="#7c3aed" text-anchor="middle" font-family="Arial" opacity="0.8">El Historiador</text>
    </svg>
  `,
  master: `
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#472d1a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#2d1a0d;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#grad3)"/>
      <rect x="30" y="30" width="100" height="100" fill="#f97316" opacity="0.3" stroke="#f97316" stroke-width="2"/>
      <rect x="160" y="50" width="80" height="80" fill="#f97316" opacity="0.3" stroke="#f97316" stroke-width="2"/>
      <rect x="270" y="70" width="100" height="80" fill="#f97316" opacity="0.2" stroke="#f97316" stroke-width="2"/>
      <line x1="130" y1="80" x2="160" y2="80" stroke="#f97316" stroke-width="2" opacity="0.7"/>
      <line x1="240" y1="90" x2="270" y2="90" stroke="#f97316" stroke-width="2" opacity="0.7"/>
      <text x="200" y="180" font-size="16" fill="#f97316" text-anchor="middle" font-family="Arial" opacity="0.8">El Maestro</text>
    </svg>
  `
};

// Create images from SVG templates
async function createImages() {
  try {
    for (const [name, svg] of Object.entries(templates)) {
      const outputPath = path.join(imagesDir, `${name}.jpg`);
      
      await sharp(Buffer.from(svg))
        .jpeg({ quality: 90, progressive: true })
        .toFile(outputPath);
      
      console.log(`✓ Created ${name}.jpg`);
    }
    console.log('All agent images created successfully!');
  } catch (error) {
    console.error('Error creating images:', error.message);
    process.exit(1);
  }
}

createImages();
