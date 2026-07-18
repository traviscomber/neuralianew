import Image from 'next/image'

type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className = 'h-10 w-10' }: BrandMarkProps) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`.trim()} aria-hidden='true'>
      <Image
        src='/n3uralia-brand/n3uralia-mark-new.webp'
        alt=''
        fill
        sizes='48px'
        className='brand-mark-image object-contain'
      />
    </span>
  )
}

type BrandWordmarkProps = {
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}

export function BrandWordmark({
  className = 'h-8 w-40',
  imageClassName = '',
  priority = false,
  sizes = '160px',
}: BrandWordmarkProps) {
  return (
    <span className={`relative inline-block ${className}`.trim()} aria-label='N3uralia'>
      <Image
        src='/n3uralia-brand/n3uralia-wordmark-new.webp'
        alt='N3uralia'
        fill
        priority={priority}
        sizes={sizes}
        className={`brand-wordmark-image object-contain object-left ${imageClassName}`.trim()}
      />
    </span>
  )
}
