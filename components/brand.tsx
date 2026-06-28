type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className = 'h-10 w-10 text-[#8daaa6]' }: BrandMarkProps) {
  return (
    <div
      aria-hidden='true'
      className={`grid place-items-center rounded-full bg-current text-white ${className}`.trim()}
    >
      <span className='text-[0.62em] font-semibold leading-none tracking-[-0.06em]'>N3</span>
    </div>
  )
}

type BrandWordmarkProps = {
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}

export function BrandWordmark({
  className = 'relative',
  imageClassName = '',
  priority = false,
  sizes = '100vw',
}: BrandWordmarkProps) {
  return (
    <div className={`relative ${className}`.trim()} data-priority={priority ? 'true' : 'false'} data-sizes={sizes}>
      <svg
        viewBox='0 0 1200 340'
        aria-label='N3uralia'
        role='img'
        className={`h-full w-full ${imageClassName}`.trim()}
        preserveAspectRatio='xMidYMid meet'
      >
        <defs>
          <linearGradient id='n3uralia-wordmark-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='currentColor' stopOpacity='0.9' />
            <stop offset='100%' stopColor='currentColor' stopOpacity='0.68' />
          </linearGradient>
        </defs>
        <g fill='none' stroke='url(#n3uralia-wordmark-gradient)' strokeLinecap='round' strokeLinejoin='round'>
          <path d='M132 248V92l112 156V92' strokeWidth='24' />
          <path d='M326 104h66c38 0 68 29 68 65s-30 65-68 65h-66v-130Z' strokeWidth='24' />
          <path d='M508 108c0-17 14-31 31-31h84c35 0 63 28 63 63 0 35-28 63-63 63h-67' strokeWidth='24' />
          <path d='M508 212h88c35 0 63 28 63 63 0 35-28 63-63 63h-88' strokeWidth='24' />
          <path d='M768 92v156' strokeWidth='24' />
          <path d='M768 92h92c32 0 58 26 58 58s-26 58-58 58h-92' strokeWidth='24' />
          <path d='M924 92v156h108' strokeWidth='24' />
          <path d='M924 248V92l108 156V92' strokeWidth='24' />
        </g>
      </svg>
    </div>
  )
}
