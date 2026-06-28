import Image from 'next/image'

type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className = 'h-10 w-10 text-[#8aa8a4]' }: BrandMarkProps) {
  return (
    <div
      aria-hidden='true'
      className={`grid place-items-center rounded-full bg-[#23363a] text-[#9ebbb5] ${className}`.trim()}
    >
      <span className='text-[0.62em] font-semibold leading-none tracking-[-0.08em]'>N3</span>
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
    <div className={`relative ${className}`.trim()}>
      <Image
        src='/n3uralia-logo.png'
        alt='N3uralia'
        fill
        priority={priority}
        sizes={sizes}
        className={`object-contain ${imageClassName}`.trim()}
      />
    </div>
  )
}
