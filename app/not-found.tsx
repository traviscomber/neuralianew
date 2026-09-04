import Link from 'next/link'
import { headers } from 'next/headers'
import { BrandMark, BrandWordmark } from '@/components/brand'

const copy = {
  es: {
    title: 'Esta ruta no existe.',
    description:
      'Puede que el enlace haya cambiado o que estés buscando una sección antigua. Vuelve al inicio o comienza con un diagnóstico.',
    home: 'Ir al inicio',
    diagnosis: 'Agendar diagnóstico',
    switchLabel: 'Switch to English',
    switchText: 'EN',
  },
  en: {
    title: 'This route does not exist.',
    description:
      'The link may have changed or you may be looking for an older section. Return home or start with a diagnosis.',
    home: 'Go home',
    diagnosis: 'Book diagnosis',
    switchLabel: 'Cambiar a español',
    switchText: 'ES',
  },
} as const

export default async function NotFound() {
  const headerStore = await headers()
  const locale = headerStore.get('x-n3uralia-locale') === 'en' ? 'en' : 'es'
  const text = copy[locale]
  const alternateLocale = locale === 'es' ? 'en' : 'es'

  return (
    <main className='retro-page grid min-h-screen place-items-center bg-[var(--n3-black)] px-6 py-16'>
      <section className='relative w-full max-w-3xl border border-[rgba(168,217,216,.24)] bg-[var(--n3-dark-surface)] p-7 text-center md:p-12'>
        <span aria-hidden className='retro-corners'><i/><i/><i/><i/></span>
        <BrandMark className='mx-auto h-14 w-14 text-[var(--n3-teal-soft)]' />
        <BrandWordmark className='mx-auto mt-6 text-4xl text-[var(--n3-teal-soft)]' />
        <p className='telemetry mt-9'>N3 / 404</p>
        <h1 className='mt-5 text-[clamp(38px,6vw,68px)]'>{text.title}</h1>
        <p className='mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[var(--n3-text-muted)]'>{text.description}</p>
        <div className='mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <Link href={`/${locale}`} className='retro-button w-full sm:w-auto'>
            {text.home}
          </Link>
          <Link href={`/${locale}/diagnostico`} className='retro-button retro-button-primary w-full sm:w-auto'>
            {text.diagnosis}
          </Link>
          <Link
            href={`/${alternateLocale}`}
            aria-label={text.switchLabel}
            className='retro-button w-full sm:w-auto'
          >
            {text.switchText}
          </Link>
        </div>
      </section>
    </main>
  )
}
