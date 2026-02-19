'use client';

import React, { useState } from 'react';
import { SectionBackground } from '@/components/section-background';

/**
 * Background Settings Demo Page
 * Allows users to test and adjust background intensity in real-time
 */
export default function BackgroundDemo() {
  const [heroIntensity, setHeroIntensity] = useState<'subtle' | 'normal' | 'bold'>('normal');
  const [capIntensity, setCapIntensity] = useState<'subtle' | 'normal' | 'bold'>('normal');
  const [solIntensity, setSolIntensity] = useState<'subtle' | 'normal' | 'bold'>('normal');
  const [workIntensity, setWorkIntensity] = useState<'subtle' | 'normal' | 'bold'>('normal');
  const [blogIntensity, setBlogIntensity] = useState<'subtle' | 'normal' | 'bold'>('subtle');
  const [faqIntensity, setFaqIntensity] = useState<'subtle' | 'normal' | 'bold'>('normal');

  const sections = [
    {
      name: 'Hero',
      value: heroIntensity,
      onChange: setHeroIntensity,
      section: 'hero' as const,
    },
    {
      name: 'Capabilities',
      value: capIntensity,
      onChange: setCapIntensity,
      section: 'capabilities' as const,
    },
    {
      name: 'Solutions',
      value: solIntensity,
      onChange: setSolIntensity,
      section: 'solutions' as const,
    },
    {
      name: 'Workflow',
      value: workIntensity,
      onChange: setWorkIntensity,
      section: 'workflow' as const,
    },
    {
      name: 'Blog',
      value: blogIntensity,
      onChange: setBlogIntensity,
      section: 'blog' as const,
    },
    {
      name: 'FAQ',
      value: faqIntensity,
      onChange: setFaqIntensity,
      section: 'faq' as const,
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Settings Panel */}
      <section className="py-12 px-4 border-b border-border bg-card">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Background Intensity Settings</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.name}
                className="p-4 rounded-lg border border-border bg-background"
              >
                <label className="block text-sm font-semibold text-foreground mb-3">
                  {section.name}
                </label>
                <div className="flex gap-2">
                  {(['subtle', 'normal', 'bold'] as const).map((intensity) => (
                    <button
                      key={intensity}
                      onClick={() => section.onChange(intensity)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        section.value === intensity
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Previews */}
      <div className="space-y-0">
        {/* Hero Preview */}
        <SectionBackground
          section="hero"
          intensity={heroIntensity}
          className="min-h-[300px] flex items-center justify-center border-b border-border"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Hero Section</h2>
            <p className="text-muted-foreground">Intensity: {heroIntensity}</p>
          </div>
        </SectionBackground>

        {/* Capabilities Preview */}
        <SectionBackground
          section="capabilities"
          intensity={capIntensity}
          className="min-h-[300px] flex items-center justify-center border-b border-border"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Capabilities Section</h2>
            <p className="text-muted-foreground">Intensity: {capIntensity}</p>
          </div>
        </SectionBackground>

        {/* Solutions Preview */}
        <SectionBackground
          section="solutions"
          intensity={solIntensity}
          className="min-h-[300px] flex items-center justify-center border-b border-border"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Solutions Section</h2>
            <p className="text-muted-foreground">Intensity: {solIntensity}</p>
          </div>
        </SectionBackground>

        {/* Workflow Preview */}
        <SectionBackground
          section="workflow"
          intensity={workIntensity}
          className="min-h-[300px] flex items-center justify-center border-b border-border"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Workflow Section</h2>
            <p className="text-muted-foreground">Intensity: {workIntensity}</p>
          </div>
        </SectionBackground>

        {/* Blog Preview */}
        <SectionBackground
          section="blog"
          intensity={blogIntensity}
          className="min-h-[300px] flex items-center justify-center border-b border-border"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">Blog Section</h2>
            <p className="text-muted-foreground">Intensity: {blogIntensity}</p>
          </div>
        </SectionBackground>

        {/* FAQ Preview */}
        <SectionBackground
          section="faq"
          intensity={faqIntensity}
          className="min-h-[300px] flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">FAQ Section</h2>
            <p className="text-muted-foreground">Intensity: {faqIntensity}</p>
          </div>
        </SectionBackground>
      </div>

      {/* Info Section */}
      <section className="py-16 px-4 bg-card border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Use</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Adjust the intensity levels above to see how backgrounds change across different sections.
            </p>
            <p>
              Each section uses a unique pattern optimized for its purpose:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Hero:</strong> Nodes pattern - creates visual interest and energy</li>
              <li><strong>Capabilities:</strong> Circuit pattern - emphasizes technical nature</li>
              <li><strong>Solutions:</strong> Flow pattern - suggests movement and progress</li>
              <li><strong>Workflow:</strong> Dense nodes - shows complexity and coordination</li>
              <li><strong>Blog:</strong> Grid pattern - maintains readability for content</li>
              <li><strong>FAQ:</strong> Sparse nodes - keeps focus on questions and answers</li>
            </ul>
            <p className="mt-4">
              To use these backgrounds in your pages, import and wrap sections with the appropriate component:
            </p>
            <pre className="bg-background p-3 rounded text-sm overflow-x-auto mt-2">
              {`<SectionBackground 
  section="hero" 
  intensity="normal"
  className="py-20"
>
  {/* Your content here */}
</SectionBackground>`}
            </pre>
          </div>
        </div>
      </section>
    </main>
  );
}
