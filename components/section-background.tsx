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
}

/**
 * Section Background Component
 * Wraps content with a dynamically generated technical background pattern
 * Based on brandbook colors and section-specific styling
 */
export function SectionBackground({
  section,
  children,
  className = '',
  animated = true,
}: SectionBackgroundProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [opacity, setOpacity] = useState<number>(0.25);

  useEffect(() => {
    const background = generateSectionBackground(section);
    setSvgContent(background.svg);
    setColor(background.color);
    setOpacity(background.opacity);
  }, [section]);

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        backgroundColor: '#FAFAFA',
      }}
    >
      {/* Background Pattern Layer */}
      <div
        className={`absolute inset-0 pointer-events-none ${animated ? 'animate-float' : ''}`}
        style={{
          opacity: opacity,
          mixBlendMode: 'multiply',
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="w-full h-full"
          style={{
            filter: `drop-shadow(0 0 30px ${color}15)`,
          }}
        />
      </div>

      {/* Secondary Pattern Layer for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${color}05 0%, transparent 50%),
                       radial-gradient(circle at 80% 80%, ${color}05 0%, transparent 50%)`,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Hero Background Component
 * Specialized version for hero sections with enhanced visual hierarchy
 */
export function HeroBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SectionBackground section="hero" className={className} animated={true}>
      {children}
    </SectionBackground>
  );
}

/**
 * Capabilities Background Component
 * More intense pattern for feature showcase
 */
export function CapabilitiesBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SectionBackground
      section="capabilities"
      className={className}
      animated={true}
    >
      {children}
    </SectionBackground>
  );
}

/**
 * Solutions Background Component
 * Flowing pattern for solutions showcase
 */
export function SolutionsBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SectionBackground section="solutions" className={className} animated={true}>
      {children}
    </SectionBackground>
  );
}

/**
 * Workflow Background Component
 * Dynamic mixed pattern for process sections
 */
export function WorkflowBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SectionBackground section="workflow" className={className} animated={true}>
      {children}
    </SectionBackground>
  );
}

/**
 * Blog Background Component
 * Subtle grid pattern for content sections
 */
export function BlogBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SectionBackground section="blog" className={className} animated={false}>
      {children}
    </SectionBackground>
  );
}

/**
 * FAQ Background Component
 * Interactive node pattern for Q&A sections
 */
export function FAQBackground({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SectionBackground section="faq" className={className} animated={true}>
      {children}
    </SectionBackground>
  );
}
