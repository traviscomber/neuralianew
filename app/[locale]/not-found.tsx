import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Página no encontrada
          </h1>
          <p className="text-lg text-muted-foreground">
            La página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/es"
            className="inline-block w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/es/contact"
            className="inline-block w-full px-6 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
          >
            Contactar soporte
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Si crees que esto es un error, por favor contacta con nosotros.
        </p>
      </div>
    </div>
  )
}
