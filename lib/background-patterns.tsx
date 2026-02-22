export type SectionType = 'hero' | 'capabilities' | 'solutions' | 'workflow' | 'blog' | 'faq';

interface BackgroundConfig {
  svg: string;
  color: string;
  opacity: number;
}

const brandColors = {
  sage: '#5CAAA5',
  charcoal: '#3F2F28',
  slate: '#697A8A',
};

/**
 * Generate professional SVG background patterns
 * Each pattern is unique and branded
 */
function generateGridPattern(color: string, scale: number = 40): string {
  return `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.1" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.05" />
        </linearGradient>
        <pattern id="grid" width="${scale}" height="${scale}" patternUnits="userSpaceOnUse">
          <path d="M ${scale} 0 L 0 0 0 ${scale}" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridGrad)" />
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  `;
}

function generateNodesPattern(color: string, density: number = 15): string {
  const nodes = Array.from({ length: density }, (_, i) => {
    const x = Math.random() * 1200;
    const y = Math.random() * 800;
    const size = Math.random() * 3 + 1;
    return `<circle cx="${x}" cy="${y}" r="${size}" fill="${color}" opacity="${0.2 + Math.random() * 0.4}"/>`;
  });

  const connections = Array.from({ length: Math.floor(density * 0.6) }, () => {
    const x1 = Math.random() * 1200;
    const y1 = Math.random() * 800;
    const x2 = x1 + (Math.random() - 0.5) * 400;
    const y2 = y1 + (Math.random() - 0.5) * 400;
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="0.8" opacity="0.15"/>`;
  });

  return `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <radialGradient id="nodeGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.08" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#nodeGrad)" />
      ${connections.join('\n')}
      ${nodes.join('\n')}
    </svg>
  `;
}

function generateCircuitPattern(color: string): string {
  return `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.12" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.04" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuitGrad)" />
      
      <!-- Horizontal Lines -->
      <line x1="0" y1="200" x2="1200" y2="200" stroke="${color}" stroke-width="1" opacity="0.2"/>
      <line x1="0" y1="400" x2="1200" y2="400" stroke="${color}" stroke-width="1" opacity="0.2"/>
      <line x1="0" y1="600" x2="1200" y2="600" stroke="${color}" stroke-width="1" opacity="0.2"/>
      
      <!-- Vertical Lines -->
      <line x1="300" y1="0" x2="300" y2="800" stroke="${color}" stroke-width="1" opacity="0.2"/>
      <line x1="600" y1="0" x2="600" y2="800" stroke="${color}" stroke-width="1" opacity="0.2"/>
      <line x1="900" y1="0" x2="900" y2="800" stroke="${color}" stroke-width="1" opacity="0.2"/>
      
      <!-- Nodes -->
      <circle cx="300" cy="200" r="4" fill="${color}" opacity="0.3"/>
      <circle cx="600" cy="400" r="4" fill="${color}" opacity="0.3"/>
      <circle cx="900" cy="200" r="4" fill="${color}" opacity="0.3"/>
      <circle cx="300" cy="600" r="4" fill="${color}" opacity="0.3"/>
      <circle cx="900" cy="600" r="4" fill="${color}" opacity="0.3"/>
      
      <!-- Connecting Lines -->
      <path d="M 300 200 Q 450 250 600 400" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.15"/>
      <path d="M 600 400 Q 750 300 900 200" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.15"/>
      <path d="M 600 400 Q 600 500 600 600" stroke="${color}" stroke-width="1.5" fill="none" opacity="0.15"/>
    </svg>
  `;
}

function generateFlowPattern(color: string): string {
  return `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color};stop-opacity:0.06" />
          <stop offset="100%" style="stop-color:${color};stop-opacity:0.12" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#flowGrad)" />
      
      <!-- Flowing Curves -->
      <path d="M -100 200 Q 300 100 600 200 T 1300 200" stroke="${color}" stroke-width="2" fill="none" opacity="0.15" filter="url(#blur)"/>
      <path d="M -100 400 Q 300 500 600 400 T 1300 400" stroke="${color}" stroke-width="2" fill="none" opacity="0.15" filter="url(#blur)"/>
      <path d="M -100 600 Q 300 700 600 600 T 1300 600" stroke="${color}" stroke-width="2" fill="none" opacity="0.15" filter="url(#blur)"/>
      
      <!-- Accent Circles -->
      <circle cx="400" cy="300" r="60" fill="${color}" opacity="0.04"/>
      <circle cx="800" cy="500" r="80" fill="${color}" opacity="0.04"/>
      <circle cx="600" cy="700" r="50" fill="${color}" opacity="0.04"/>
    </svg>
  `;
}

/**
 * Generate section-specific background configuration
 */
export function generateSectionBackground(section: SectionType): BackgroundConfig {
  const configs: Record<SectionType, BackgroundConfig> = {
    hero: {
      svg: generateNodesPattern(brandColors.sage, 12),
      color: brandColors.sage,
      opacity: 0.25,
    },
    capabilities: {
      svg: generateCircuitPattern(brandColors.charcoal),
      color: brandColors.charcoal,
      opacity: 0.35,
    },
    solutions: {
      svg: generateFlowPattern(brandColors.slate),
      color: brandColors.slate,
      opacity: 0.28,
    },
    workflow: {
      svg: generateNodesPattern(brandColors.sage, 18),
      color: brandColors.sage,
      opacity: 0.32,
    },
    blog: {
      svg: generateGridPattern(brandColors.charcoal, 50),
      color: brandColors.charcoal,
      opacity: 0.18,
    },
    faq: {
      svg: generateNodesPattern(brandColors.sage, 10),
      color: brandColors.sage,
      opacity: 0.22,
    },
  };

  return configs[section];
}

export const BG_COLORS = brandColors;
