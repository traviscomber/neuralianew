'use client';

import React from 'react';

interface SectionBackgroundProps {
  section: 'hero' | 'capabilities' | 'solutions' | 'workflow' | 'blog' | 'faq';
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  intensity?: 'subtle' | 'normal' | 'bold';
}

const sectionConfig = {
  hero: {
    color: '#5CAAA5',
    opacity: 0.15,
    gradient: 'radial-gradient(ellipse 800px 500px at 50% -10%, rgba(92, 170, 165, 0.06) 0%, transparent 80%)',
    bgImage: '/backgrounds/hero-bg.jpg',
    bgOpacity: 0.08,
  },
  capabilities: {
    color: '#3F2F28',
    opacity: 0.2,
    gradient: 'radial-gradient(ellipse 900px 600px at 50% 50%, rgba(63, 47, 40, 0.04) 0%, transparent 85%)',
    bgImage: '/backgrounds/capabilities-bg.jpg',
    bgOpacity: 0.07,
  },
  solutions: {
    color: '#697A8A',
    opacity: 0.12,
    gradient: 'linear-gradient(180deg, rgba(105, 122, 138, 0.03) 0%, transparent 60%, rgba(92, 170, 165, 0.03) 100%)',
    bgImage: '/backgrounds/results-bg.jpg',
    bgOpacity: 0.06,
  },
  workflow: {
    color: '#5CAAA5',
    opacity: 0.14,
    gradient: 'radial-gradient(ellipse 700px 400px at 50% 50%, rgba(92, 170, 165, 0.04) 0%, rgba(105, 122, 138, 0.02) 100%)',
    bgImage: '/backgrounds/methodology-bg.jpg',
    bgOpacity: 0.07,
  },
  blog: {
    color: '#3F2F28',
    opacity: 0.08,
    gradient: 'linear-gradient(135deg, rgba(63, 47, 40, 0.015) 0%, rgba(92, 170, 165, 0.015) 100%)',
    bgImage: '/backgrounds/footer-bg.jpg',
    bgOpacity: 0.05,
  },
  faq: {
    color: '#5CAAA5',
    opacity: 0.12,
    gradient: 'radial-gradient(ellipse 600px 350px at 50% 30%, rgba(92, 170, 165, 0.03) 0%, transparent 85%)',
    bgImage: '/backgrounds/footer-bg.jpg',
    bgOpacity: 0.06,
  },
};

const intensityMultiplier = {
  subtle: 0.6,
  normal: 1,
  bold: 1.4,
};

/**
 * Professional Section Background Component
 * Renders branded technical backgrounds with proper layering
 */
export function SectionBackground({
  section,
  children,
  className = '',
  animated = true,
  intensity = 'normal',
}: SectionBackgroundProps) {
  const config = sectionConfig[section];
  const finalOpacity = Math.min(config.opacity * intensityMultiplier[intensity], 0.3);

  return (
    <div className={`relative w-full overflow-hidden bg-background ${className}`}>
      {/* Background image layer */}
      {config.bgImage && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('${config.bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: config.bgOpacity,
          }}
        />
      )}

      {/* Base gradient layer */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background via-transparent to-background opacity-30" />

      {/* Main pattern layer */}
      <div
        className={`absolute inset-0 pointer-events-none ${animated ? 'animate-subtle-float' : ''}`}
        style={{
          background: config.gradient,
          opacity: finalOpacity,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Accent glow layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${config.color}08 0%, transparent 70%)`,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Specialized section background components
 */

export function HeroBackground({
  children,
  className = '',
  intensity = 'normal',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'normal' | 'bold';
}) {
  return (
    <SectionBackground 
      section="hero" 
      className={className} 
      animated={true}
      intensity={intensity}
    >
      {children}
    </SectionBackground>
  );
}

export function CapabilitiesBackground({
  children,
  className = '',
  intensity = 'normal',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'normal' | 'bold';
}) {
  return (
    <SectionBackground
      section="capabilities"
      className={className}
      animated={true}
      intensity={intensity}
    >
      {children}
    </SectionBackground>
  );
}

export function SolutionsBackground({
  children,
  className = '',
  intensity = 'normal',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'normal' | 'bold';
}) {
  return (
    <SectionBackground 
      section="solutions" 
      className={className} 
      animated={true}
      intensity={intensity}
    >
      {children}
    </SectionBackground>
  );
}

export function WorkflowBackground({
  children,
  className = '',
  intensity = 'normal',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'normal' | 'bold';
}) {
  return (
    <SectionBackground 
      section="workflow" 
      className={className} 
      animated={true}
      intensity={intensity}
    >
      {children}
    </SectionBackground>
  );
}

export function BlogBackground({
  children,
  className = '',
  intensity = 'subtle',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'normal' | 'bold';
}) {
  return (
    <SectionBackground 
      section="blog" 
      className={className} 
      animated={false}
      intensity={intensity}
    >
      {children}
    </SectionBackground>
  );
}

export function FAQBackground({
  children,
  className = '',
  intensity = 'normal',
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'normal' | 'bold';
}) {
  return (
    <SectionBackground 
      section="faq" 
      className={className} 
      animated={true}
      intensity={intensity}
    >
      {children}
    </SectionBackground>
  );
}
