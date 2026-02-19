/**
 * Background Pattern Generator
 * Creates SVG patterns for section backgrounds based on brandbook colors
 * Patterns: Nodes, Circuits, Lines, Grid
 */

export type PatternType = 'nodes' | 'circuits' | 'lines' | 'grid' | 'mixed';
export type SectionType = 'hero' | 'capabilities' | 'solutions' | 'workflow' | 'blog' | 'faq';

interface PatternConfig {
  type: PatternType;
  color: string;
  opacity: number;
  density: number;
  scale: number;
}

interface SectionPatternConfig {
  pattern: PatternType;
  color: string;
  opacity: number;
  density: number;
}

// Brandbook Colors
export const BRANDBOOK_COLORS = {
  deepCharcoal: '#3F2F28',
  mutedSage: '#5CAAA5',
  slateGray: '#697A8A',
  creamWhite: '#FAFAFA',
};

// Section-specific configurations
export const SECTION_PATTERNS: Record<SectionType, SectionPatternConfig> = {
  hero: {
    pattern: 'nodes',
    color: BRANDBOOK_COLORS.mutedSage,
    opacity: 0.25,
    density: 0.4,
  },
  capabilities: {
    pattern: 'circuits',
    color: BRANDBOOK_COLORS.deepCharcoal,
    opacity: 0.45,
    density: 0.6,
  },
  solutions: {
    pattern: 'lines',
    color: BRANDBOOK_COLORS.slateGray,
    opacity: 0.35,
    density: 0.45,
  },
  workflow: {
    pattern: 'mixed',
    color: BRANDBOOK_COLORS.mutedSage,
    opacity: 0.4,
    density: 0.5,
  },
  blog: {
    pattern: 'grid',
    color: BRANDBOOK_COLORS.deepCharcoal,
    opacity: 0.2,
    density: 0.3,
  },
  faq: {
    pattern: 'nodes',
    color: BRANDBOOK_COLORS.mutedSage,
    opacity: 0.3,
    density: 0.4,
  },
};

/**
 * Generate SVG nodes pattern
 * Creates connected circles/nodes like in the reference image
 */
function generateNodesPattern(color: string, density: number): string {
  const nodeRadius = 2 + density * 3;
  const spacing = 60 - density * 20;
  const lineColor = color;

  let paths = '';
  const cols = Math.ceil(1200 / spacing);
  const rows = Math.ceil(800 / spacing);

  // Generate nodes
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * spacing + (Math.random() - 0.5) * 20;
      const y = j * spacing + (Math.random() - 0.5) * 20;

      // Randomly draw connections
      if (Math.random() > 0.7 && i < cols - 1 && j < rows - 1) {
        const nextX = (i + 1) * spacing + (Math.random() - 0.5) * 20;
        const nextY = (j + 1) * spacing + (Math.random() - 0.5) * 20;
        paths += `<line x1="${x}" y1="${y}" x2="${nextX}" y2="${nextY}" stroke="${lineColor}" stroke-width="0.5" opacity="0.6"/>`;
      }

      // Draw node
      paths += `<circle cx="${x}" cy="${y}" r="${nodeRadius}" fill="none" stroke="${lineColor}" stroke-width="1" opacity="0.8"/>`;
    }
  }

  return paths;
}

/**
 * Generate SVG circuits pattern
 * Creates circuit board-like patterns with rectangles and connections
 */
function generateCircuitsPattern(color: string, density: number): string {
  const spacing = 100 - density * 30;
  const rectSize = 15 + density * 10;

  let paths = '';
  const cols = Math.ceil(1200 / spacing);
  const rows = Math.ceil(800 / spacing);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * spacing;
      const y = j * spacing;

      // Draw rectangles
      if (Math.random() > 0.4) {
        paths += `<rect x="${x}" y="${y}" width="${rectSize}" height="${rectSize}" fill="none" stroke="${color}" stroke-width="1" opacity="0.7"/>`;
      }

      // Draw connecting lines
      if (i < cols - 1 && Math.random() > 0.6) {
        paths += `<line x1="${x + rectSize}" y1="${y + rectSize / 2}" x2="${x + spacing}" y2="${y + rectSize / 2}" stroke="${color}" stroke-width="0.5" opacity="0.5"/>`;
      }

      // Draw small nodes at intersections
      if (Math.random() > 0.7) {
        paths += `<circle cx="${x + rectSize / 2}" cy="${y + rectSize / 2}" r="1.5" fill="${color}" opacity="0.6"/>`;
      }
    }
  }

  return paths;
}

/**
 * Generate SVG flowing lines pattern
 * Creates organic flowing lines across the canvas
 */
function generateLinesPattern(color: string, density: number): string {
  let paths = '';
  const numLines = 8 + Math.floor(density * 15);

  for (let line = 0; line < numLines; line++) {
    let d = `M 0 ${Math.random() * 800}`;
    const amplitude = 30 + density * 40;
    const frequency = 0.005 + density * 0.005;

    for (let x = 0; x < 1200; x += 20) {
      const y = Math.sin(x * frequency + line) * amplitude + 400 + (line * 50);
      d += ` L ${x} ${y}`;
    }

    paths += `<path d="${d}" fill="none" stroke="${color}" stroke-width="${0.5 + density * 0.5}" opacity="${0.3 + density * 0.3}"/>`;
  }

  return paths;
}

/**
 * Generate SVG grid pattern
 * Creates a technical grid layout
 */
function generateGridPattern(color: string, density: number): string {
  const spacing = 80 - density * 20;
  let paths = '';

  const cols = Math.ceil(1200 / spacing) + 1;
  const rows = Math.ceil(800 / spacing) + 1;

  // Vertical lines
  for (let i = 0; i < cols; i++) {
    paths += `<line x1="${i * spacing}" y1="0" x2="${i * spacing}" y2="800" stroke="${color}" stroke-width="0.5" opacity="${0.2 + density * 0.2}"/>`;
  }

  // Horizontal lines
  for (let j = 0; j < rows; j++) {
    paths += `<line x1="0" y1="${j * spacing}" x2="1200" y2="${j * spacing}" stroke="${color}" stroke-width="0.5" opacity="${0.2 + density * 0.2}"/>`;
  }

  // Add some nodes at intersections
  for (let i = 0; i < cols; i += 2) {
    for (let j = 0; j < rows; j += 2) {
      if (Math.random() > 0.6) {
        paths += `<circle cx="${i * spacing}" cy="${j * spacing}" r="2" fill="${color}" opacity="${0.4 + density * 0.2}"/>`;
      }
    }
  }

  return paths;
}

/**
 * Generate mixed pattern combining multiple elements
 */
function generateMixedPattern(color: string, density: number): string {
  const nodes = generateNodesPattern(color, density * 0.6);
  const lines = generateLinesPattern(color, density * 0.4);
  return nodes + lines;
}

/**
 * Main function to generate SVG pattern
 */
export function generateBackgroundSVG(
  type: PatternType,
  color: string,
  density: number,
  width = 1200,
  height = 800
): string {
  let patternContent = '';

  switch (type) {
    case 'nodes':
      patternContent = generateNodesPattern(color, density);
      break;
    case 'circuits':
      patternContent = generateCircuitsPattern(color, density);
      break;
    case 'lines':
      patternContent = generateLinesPattern(color, density);
      break;
    case 'grid':
      patternContent = generateGridPattern(color, density);
      break;
    case 'mixed':
      patternContent = generateMixedPattern(color, density);
      break;
  }

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="background-pattern">
    <defs>
      <style>
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .pattern-element {
          animation: float 6s ease-in-out infinite;
        }
      </style>
    </defs>
    ${patternContent}
  </svg>`;
}

/**
 * Get pattern configuration for a specific section
 */
export function getSectionPatternConfig(section: SectionType): SectionPatternConfig {
  return SECTION_PATTERNS[section];
}

/**
 * Generate complete background for a section
 */
export function generateSectionBackground(
  section: SectionType
): { svg: string; color: string; opacity: number } {
  const config = getSectionPatternConfig(section);
  const svg = generateBackgroundSVG(config.pattern, config.color, config.density);

  return {
    svg,
    color: config.color,
    opacity: config.opacity,
  };
}
