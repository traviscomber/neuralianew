'use client';

import React, { useEffect, useState } from 'react';
import {
  generateSectionBackground,
  type SectionType,
} from '@/lib/background-patterns';

interface SectionBackgroundProps {
  section: SectionType;
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
  intensity?: 'subtle' | 'normal' | 'bold';
}

/**
 * Professional Section Background Component
 * Renders dynamically generated technical patterns with proper layering
 */
export function SectionBackground({
  section,
  children,
  className = '',
  animated = true,
  intensity = 'normal',
}: SectionBackgroundProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(0.25);

  // Adjust opacity based on intensity
  const intensityMultiplier = {
    subtle: 0.6,
    normal: 1,
    bold: 1.4,
  };

  useEffect(() => {
    const background = generateSectionBackground(section);
    setSvgContent(background.svg);
    setColor(background.color);
    setOpacity(background.opacity * intensityMultiplier[intensity]);
  }, [section, intensity]);

  return (
    <div
      className={`relative w-full overflow-hidden bg-background ${className}`}
    >
      {/* Base gradient layer */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-background via-transparent to-background opacity-30" />

      {/* Main pattern layer - optimized SVG rendering */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: Math.min(opacity, 0.5),
          mixBlendMode: 'overlay',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          className={animated ? 'animate-subtle-float' : ''}
          style={{
            filter: `drop-shadow(0 0 20px ${color}10)`,
          }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>

      {/* Accent glow layer for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 600px at 50% 0%, ${color}08 0%, transparent 70%)`,
        }}
      />

      {/* Content layer with proper stacking context */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}


/**
 * Specialized section background components for common sections
 * Each has optimized settings for their specific use case
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
