'use client'

import { ArrowRight } from 'lucide-react'

export function MemoryOperatingSystem() {
  const content = {
    title: 'Sistema Operativo de Memoria',
    subtitle: 'El nucleo cognitivo. Inteligencia que recuerda, aprende y evoluciona.',
    description: 'No es solo IA. Es un sistema operativo donde la memoria es la arquitectura central.',
    
    layers: [
      {
        name: 'Memoria Sensorial',
        desc: 'Captura inmediata de cada interaccion y contexto en tiempo real.',
        icon: '01'
      },
      {
        name: 'Memoria Activa',
        desc: 'Procesamiento de patrones y relaciones mientras el sistema opera.',
        icon: '02'
      },
      {
        name: 'Memoria Persistente',
        desc: 'Aprendizaje de largo plazo. Cada experiencia queda codificada.',
        icon: '03'
      },
      {
        name: 'Inteligencia Adaptativa',
        desc: 'Evolucion constante. Se adapta y mejora con cada ciclo.',
        icon: '04'
      }
    ],

    cta: 'Implementa el Sistema en tu Empresa',
    ctaDesc: 'Transforma tu IA en un verdadero sistema operativo de memoria.'
  }

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="h2 text-foreground mb-4">{content.title}</h2>
          <p className="body-lg text-muted-foreground mb-4">{content.subtitle}</p>
          <p className="body text-muted-foreground">{content.description}</p>
        </div>

        {/* 4 Layers - Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {content.layers.map((layer, i) => (
            <div key={i} className="p-6 border border-border rounded-lg hover:border-primary/40 transition-colors bg-card">
              <span className="text-xs font-medium text-primary mb-2 block">{layer.icon}</span>
              <h4 className="text-lg font-semibold text-foreground mb-2">{layer.name}</h4>
              <p className="text-sm text-muted-foreground">{layer.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-8 border border-primary/20 rounded-lg bg-primary/5">
          <h3 className="h3 text-foreground mb-3">{content.cta}</h3>
          <p className="body text-muted-foreground mb-6">{content.ctaDesc}</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
            Contactar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
