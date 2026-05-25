'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import { isValidLocale } from '@/lib/get-locale';
import type { Locale } from '@/content/dictionaries';

const faqData = {
  es: {
    title: "Preguntas Frecuentes",
    intro: "Todo lo que necesitas saber sobre nuestras capacidades, metodología, y cómo implementamos soluciones.",
    cta: "¿Aún tienes preguntas?",
    ctaSubtext: "Explora nuestras capacidades técnicas, lee sobre nuestra metodología de implementación, o mira nuestros casos de estudio reales.",
    viewMethodology: "Ver Metodología 5 Fases",
    contactTeam: "Hablar con Equipo",
    items: [
      {
        id: 'q1',
        question: '¿Qué es N3uralia?',
        answer: 'N3uralia es una plataforma que construye agentes de IA vivientes—sistemas inteligentes que aprenden y evolucionan con cada interacción. A diferencia de bots estáticos basados en reglas, los Living Agents de N3uralia mejoran continuamente, entienden el contexto de tu negocio, y se integran profundamente con tus sistemas existentes. Somos la plataforma elegida por empresas chilenas para automatizar procesos complejos sin reemplazar su infraestructura existente.',
      },
      {
        id: 'q2',
        question: '¿Cómo se diferencian los Living Agents de bots estándar?',
        answer: 'Los bots estándar funcionan con reglas predefinidas: si sucede X, haz Y. Son predecibles pero rígidos. Los Living Agents de N3uralia aprenden: cada interacción les enseña. Con el tiempo, mejoran automáticamente sus respuestas, entienden excepciones, y se adaptan a nuevas situaciones. Es la diferencia entre un empleado que solo conoce su manual de procedimientos y un empleado experimentado que entiende el contexto y toma mejores decisiones cada día.',
      },
      {
        id: 'q3',
        question: '¿Cuál es el tiempo de implementación típico?',
        answer: 'Para startups y procesos simples: 5-14 días. Para empresas con integraciones complejas: 30-60 días. La diferencia depende de cuántos sistemas necesitamos conectar. Lo importante es que N3uralia maneja la complejidad—no necesitas un ejército de desarrolladores. Comenzamos con un piloto en una área específica, validamos resultados, y escalamos de allí.',
      },
      {
        id: 'q4',
        question: '¿Qué empresas chilenas usan N3uralia?',
        answer: 'Trabaja con nosotros empresas en finanzas, retail, manufactura, seguros y tecnología. Desde startups de 5 personas hasta empresas de 5,000+. Si tu proceso es manual, repetitivo, o requiere decisiones basadas en datos, probablemente podemos ayudarte. Mira nuestras casos de estudio para ejemplos específicos de tu industria.',
      },
      {
        id: 'q5',
        question: '¿Cómo garantiza N3uralia la seguridad de datos?',
        answer: 'La seguridad es foundational, no una característica adicional. Ofrecemos: encriptación end-to-end, acceso de rol basado, auditoría completa de cada decisión que toma un agente, cumplimiento con normativas chilenas, y control total sobre dónde viven tus datos. Para empresas reguladas (banca, seguros), trabajamos con tus CISO desde el inicio. Cada decisión del agente es trazable—fundamental para governance.',
      },
      {
        id: 'q6',
        question: '¿Cuánto cuesta una solución N3uralia?',
        answer: 'No hay precio único porque no hay dos procesos iguales. Ofrecemos tres modelos: (1) Por agente: $X/mes por agent deployed, (2) Por resultado: Pagas basado en transacciones procesadas o ahorro logrado, (3) Híbrido: Combinamos ambos. Para startups, comenzamos con trial gratuito. Para empresas, hacemos estimación personalizada después de entender tu scope. Solicita una demo para presupuesto específico.',
      },
      {
        id: 'q7',
        question: '¿Qué tipo de procesos pueden automatizar?',
        answer: 'Cualquier proceso que sea: (1) Repetitivo (se hace igual cada vez), (2) Basado en datos (hay reglas claras), (3) Escalable (harías más si tuvieras recursos). Ejemplos: calificación de leads, procesamiento de documentos, respuestas a clientes, validación de datos, coordinación entre sistemas, reportes automáticos, detección de anomalías. Si puedes describirlo, probablemente podemos automatizarlo.',
      },
      {
        id: 'q8',
        question: '¿N3uralia requiere capacitación especial?',
        answer: 'No. Los Living Agents trabajan en background. Tu equipo ve resultados mejorados y menos trabajo manual. Para configuración inicial, proporcionamos documentación clara y soporte de onboarding. No necesitas aprender a programar ni a usar herramientas complejas. El objetivo es que N3uralia se vea simple desde el lado del usuario final—la complejidad técnica la manejamos nosotros.',
      },
      {
        id: 'q9',
        question: '¿Cómo se integra N3uralia con sistemas heredados?',
        answer: 'Aquí es donde N3uralia brilla. Podemos orquestar entre sistemas antiguos y nuevos simultáneamente. Si tienes un ERP de 20 años y Salesforce, podemos hacer que hablen entre sí inteligentemente. Nos conectamos vía API, webhooks, SQL directo, o incluso interfaces de usuario (si es necesario). El punto: no necesitas reemplazar tu stack existente. N3uralia se adapta a tu arquitectura, no al revés.',
      },
      {
        id: 'q10',
        question: '¿Qué soporte reciben los clientes?',
        answer: 'Soporte técnico en español, en tu zona horaria. Incluye: onboarding guiado, monitoreo de agentes 24/7, actualizaciones automáticas, acceso a ingenieros de N3uralia (no solo support agents), y reportes mensuales de desempeño. Para empresas críticas, ofrecemos SLA garantizado. Nuestro objetivo es que tu investment en N3uralia genere cada vez más valor con el tiempo, no que sea un costo fijo.',
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    intro: "Everything you need to know about our capabilities, methodology, and how we implement solutions.",
    cta: "Still have questions?",
    ctaSubtext: "Explore our technical capabilities, read about our implementation methodology, or check out our real case studies.",
    viewMethodology: "View 5-Phase Methodology",
    contactTeam: "Talk to Our Team",
    items: [
      {
        id: 'q1',
        question: 'What is N3uralia?',
        answer: 'N3uralia is a platform that builds living AI agents—intelligent systems that learn and evolve with every interaction. Unlike static rule-based bots, N3uralia\'s Living Agents improve continuously, understand your business context, and integrate deeply with your existing systems. We\'re the platform chosen by enterprises to automate complex processes without replacing their existing infrastructure.',
      },
      {
        id: 'q2',
        question: 'How do Living Agents differ from standard bots?',
        answer: 'Standard bots work with predefined rules: if X happens, do Y. They\'re predictable but rigid. N3uralia\'s Living Agents learn: every interaction teaches them. Over time, they automatically improve their responses, understand exceptions, and adapt to new situations. It\'s the difference between an employee who only knows their procedure manual and an experienced employee who understands context and makes better decisions every day.',
      },
      {
        id: 'q3',
        question: 'What is the typical implementation timeline?',
        answer: 'For startups and simple processes: 5-14 days. For enterprises with complex integrations: 30-60 days. The difference depends on how many systems we need to connect. The key is that N3uralia handles the complexity—you don\'t need an army of developers. We start with a pilot in a specific area, validate results, and scale from there.',
      },
      {
        id: 'q4',
        question: 'What companies use N3uralia?',
        answer: 'We work with companies in finance, retail, manufacturing, insurance, and technology. From 5-person startups to 5,000+ enterprises. If your process is manual, repetitive, or requires data-driven decisions, we can probably help. Check our case studies for industry-specific examples.',
      },
      {
        id: 'q5',
        question: 'How does N3uralia guarantee data security?',
        answer: 'Security is foundational, not an add-on feature. We offer: end-to-end encryption, role-based access, complete audit trail of every agent decision, compliance with international standards, and full control over where your data lives. For regulated companies (banking, insurance), we work with your CISO from day one. Every agent decision is traceable—fundamental for governance.',
      },
      {
        id: 'q6',
        question: 'How much does an N3uralia solution cost?',
        answer: 'There\'s no one-size-fits-all price because no two processes are identical. We offer three models: (1) Per agent: $X/month per deployed agent, (2) Per outcome: Pay based on transactions processed or savings achieved, (3) Hybrid: We combine both. For startups, we begin with a free trial. For enterprises, we provide custom pricing after understanding your scope. Request a demo for specific pricing.',
      },
      {
        id: 'q7',
        question: 'What types of processes can you automate?',
        answer: 'Any process that is: (1) Repetitive (done the same way each time), (2) Data-driven (clear rules exist), (3) Scalable (you\'d do more with more resources). Examples: lead qualification, document processing, customer responses, data validation, cross-system coordination, automated reports, anomaly detection. If you can describe it, we can probably automate it.',
      },
      {
        id: 'q8',
        question: 'Does N3uralia require special training?',
        answer: 'No. Living Agents work in the background. Your team sees improved results and less manual work. For initial setup, we provide clear documentation and onboarding support. You don\'t need to learn to code or use complex tools. The goal is for N3uralia to feel simple from the user side—we handle the technical complexity.',
      },
      {
        id: 'q9',
        question: 'How does N3uralia integrate with legacy systems?',
        answer: 'This is where N3uralia shines. We can orchestrate between old and new systems simultaneously. If you have a 20-year-old ERP and Salesforce, we can make them talk to each other intelligently. We connect via APIs, webhooks, direct SQL, or even user interfaces if needed. The point: you don\'t need to replace your existing stack. N3uralia adapts to your architecture, not the other way around.',
      },
      {
        id: 'q10',
        question: 'What support do customers receive?',
        answer: 'Technical support in your timezone. Includes: guided onboarding, 24/7 agent monitoring, automatic updates, access to N3uralia engineers (not just support agents), and monthly performance reports. For critical enterprises, we offer guaranteed SLAs. Our goal is for your N3uralia investment to generate increasing value over time, not be a fixed cost.',
      },
    ],
  },
};

export function FaqPageClient() {
  const params = useParams();
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : 'es';
  const isES = locale === 'es';
  
  const data = faqData[locale];
  // Track individual open items
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    return new Set(['q1', 'q2', 'q3']); // Start with first 3 open
  });

  const handleExpandAll = () => {
    const allIds = new Set(data.items.map(item => item.id));
    setOpenItems(allIds);
  };

  const handleCollapseAll = () => {
    setOpenItems(new Set());
  };

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            {data.title}
          </h1>
          <p className="mb-6 text-muted-foreground">
            {data.intro}
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Expand/Collapse All Buttons */}
          <div className="mb-8 flex gap-3 justify-center sm:justify-start">
            <button
              onClick={handleExpandAll}
              className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
            >
              {isES ? 'Expandir Todo' : 'Expand All'}
            </button>
            <button
              onClick={handleCollapseAll}
              className="px-4 py-2 text-sm font-medium border border-muted-foreground text-muted-foreground rounded-lg hover:bg-muted/50 transition-colors"
            >
              {isES ? 'Contraer Todo' : 'Collapse All'}
            </button>
          </div>

          <div className="mb-8 space-y-4">
            {data.items.map((faq) => {
              const isOpen = openItems.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg bg-card transition-all"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-6 py-4 bg-muted/20">
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer CTA - More Resources */}
          <section className="mt-16 border-t border-border pt-16">
            <div className="rounded-lg bg-muted/50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                {data.cta}
              </h2>
              <p className="mb-6 text-muted-foreground">
                {data.ctaSubtext}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Link
                  href={`/${locale}/capabilities`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  {data.viewMethodology}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  {data.contactTeam}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
