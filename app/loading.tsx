import { BrandMark, BrandWordmark } from '@/components/brand'

export default function Loading() {
  return (
    <div className='retro-page grid min-h-screen place-items-center bg-[var(--n3-black)] px-6'>
      <div className='text-center'>
        <div className='relative mx-auto grid h-20 w-20 place-items-center border border-[rgba(168,217,216,.24)] bg-[var(--n3-dark-surface)]'>
          <span className='absolute inset-0 border border-[var(--n3-teal)] opacity-30 animate-ping' />
          <BrandMark className='h-12 w-12 text-[var(--n3-teal-soft)]' />
        </div>
        <BrandWordmark className='mx-auto mt-7 text-4xl text-[var(--n3-teal-soft)]' />
        <p className='telemetry mt-6'>N3 / SYSTEM PREPARATION</p>
        <p className='mt-3 text-[14px] leading-7 text-[var(--n3-text-muted)]'>Loading N3uralia...</p>
      </div>
    </div>
  )
}
