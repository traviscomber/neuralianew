type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className = 'h-10 w-10 text-[#8ea9a5]' }: BrandMarkProps) {
  return (
    <div
      aria-hidden='true'
      className={`grid place-items-center border border-current bg-white ${className}`.trim()}
    >
      <span className='text-[0.48em] font-medium leading-none text-current'>N3</span>
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
  className = 'text-4xl text-[#8ea9a5]',
}: BrandWordmarkProps) {
  return (
    <div className={`font-light leading-none text-current ${className}`.trim()} aria-label='N3uralia'>
      N3uralia
    </div>
  )
}
