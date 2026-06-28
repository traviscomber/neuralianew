import { BrandMark, BrandWordmark } from '@/components/brand'

export default function Loading() {
  return (
    <div className='grid min-h-screen place-items-center bg-[radial-gradient(circle_at_50%_26%,#d9e3e0_0,transparent_34%),#fbfbfa] px-6 text-[#173634]'>
      <div className='text-center'>
        <div className='relative mx-auto grid h-24 w-24 place-items-center rounded-[2rem] border border-[#b8d1cc] bg-white shadow-[0_28px_80px_-58px_#173634]'>
          <div className='absolute inset-0 rounded-[2rem] border border-[#789b96] opacity-40 animate-ping' />
          <BrandMark className='h-14 w-14 rounded-2xl text-[#789b96]' />
        </div>
        <BrandWordmark className='mx-auto mt-8 text-4xl text-[#789b96]' />
        <p className='mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#789b96]'>Preparando sistema</p>
        <p className='mt-3 text-base leading-7 text-[#65706d]'>Cargando N3uralia...</p>
      </div>
    </div>
  )
}
