import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Zap, Brain, Shield, BarChart3 } from 'lucide-react'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isES = params.locale === 'es'
  
  return {
    title: isES 
      ? 'N3uralia | Sistemas Agenticos en Producción - IA Aumentada Chile'
      : 'N3uralia | Agentic AI Systems in Production - Augmented Intelligence',
    description: isES
      ? 'Plataforma de sistemas agenticos listos para producción. Inteligencia aumentada que trabaja con humanos, sin reemplazar.'
      : 'Production-ready agentic AI systems. Augmented intelligence that works with humans, not replacing them.',
  }
}

export default function HomePage({ params }: PageProps) {
  const isES = params.locale === 'es'
  const locale = params.locale as 'es' | 'en'

  const href = (path: string) => `/${locale}${path}`

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              {isES ? 'Sistemas Agenticos' : 'Agentic Systems'}<br />
              <span className="text-primary">{isES ? 'en Producción' : 'in Production'}</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              {isES
                ? 'Inteligencia aumentada que trabaja con humanos, sin reemplazar'
                : 'Augmented intelligence that works with humans, not replacing them'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={href('/contact')}>
              <Button size="lg" className="gap-2">
                {isES ? 'Comenzar Ahora' : 'Get Started'} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={href('/capabilities')}>
              <Button size="lg" variant="outline">
                {isES ? 'Explorar Capacidades' : 'Explore Capabilities'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {isES ? 'Por qué N3uralia' : 'Why N3uralia'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>{isES ? 'Producción' : 'Production'}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {isES
                  ? 'Sistemas agenticos completamente funcionales desde el día uno'
                  : 'Fully functional agentic systems from day one'}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="w-8 h-8 text-primary mb-2" />
                <CardTitle>{isES ? 'Inteligencia' : 'Intelligence'}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {isES
                  ? 'Arquitectura multiagente con gobernanza y memoria persistente'
                  : 'Multi-agent architecture with governance and persistent memory'}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>{isES ? 'Seguridad' : 'Security'}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {isES
                  ? 'Cumplimiento de estándares empresariales y regulatorios'
                  : 'Enterprise and regulatory compliance'}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>{isES ? 'Resultados' : 'Results'}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {isES
                  ? 'Medible impacto en operaciones y revenue'
                  : 'Measurable impact on operations and revenue'}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            {isES ? 'Listo para transformar tu negocio?' : 'Ready to transform your business?'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isES
              ? 'Hablemos sobre cómo los sistemas agenticos pueden optimizar tus operaciones'
              : 'Let\'s talk about how agentic systems can optimize your operations'}
          </p>
          <Link href={href('/contact')}>
            <Button size="lg" className="gap-2">
              {isES ? 'Contáctanos Hoy' : 'Contact Us Today'} <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
