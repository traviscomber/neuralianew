'use client'

import { useEffect } from 'react'
import { BrandMark, BrandWordmark } from '@/components/brand'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className='grid min-h-screen place-items-center bg-[radial-gradient(circle_at_18%_16%,#ffffff_0,transparent_30%),linear-gradient(135deg,#fbfbfa_0%,#edf4f1_52%,#fbfbfa_100%)] px-6 text-[#173634]'>
      <div className='w-full max-w-xl rounded-[2.2rem] border border-[#d8e5e2] bg-white/85 p-8 text-center shadow-[0_38px_120px_-86px_#173634] backdrop-blur md:p-10'>
        <BrandMark className='mx-auto h-16 w-16 rounded-2xl text-[#789b96]' />
        <BrandWordmark className='mx-auto mt-7 text-4xl text-[#789b96]' />
        <p className='mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]'>Sistema en pausa</p>
        <h2 className='mt-4 text-4xl font-light leading-tight text-[#173634]'>Algo salió mal al cargar.</h2>
        <p className='mx-auto mt-4 max-w-md text-base leading-8 text-[#65706d]'>La operación debería sentirse clara incluso cuando algo falla. Intenta recargar o vuelve al inicio.</p>

        <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center'>
          <button
            type='button'
            onClick={reset}
            className='inline-flex items-center justify-center rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'
          >
            Intentar de nuevo
          </button>
          <button
            type='button'
            onClick={() => {
              window.location.href = '/es'
            }}
            className='inline-flex items-center justify-center rounded-full border border-[#b9d0cb] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#789b96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'
          >
            Volver al inicio
          </button>
        </div>

        {error.digest ? <p className='mt-6 text-xs text-[#8a9693]'>Error ID: {error.digest}</p> : null}
      </div>
    </div>
  )
}
