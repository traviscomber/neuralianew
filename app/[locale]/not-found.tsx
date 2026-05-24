'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function NotFound() {
  const params = useParams()
  const locale = (params?.locale as string) || 'es'
  const isES = locale === 'es'

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isES ? 'Página no encontrada' : 'Page not found'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isES 
              ? 'La página que buscas no existe o ha sido movida.'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href={`/${locale}`}
            className="inline-block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            {isES ? 'Volver al inicio' : 'Back to home'}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-block w-full px-6 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
          >
            {isES ? 'Contactar soporte' : 'Contact support'}
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          {isES 
            ? 'Si crees que esto es un error, por favor contacta con nosotros.'
            : 'If you think this is an error, please contact us.'}
        </p>
      </div>
    </div>
  )
}
