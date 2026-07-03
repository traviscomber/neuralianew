export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L15.09 8.26H22L16.45 12.32L18.54 18.58L12 14.52L5.46 18.58L7.55 12.32L2 8.26H8.91L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`font-bold text-xl tracking-tight ${className}`}>
      N3uralia
    </div>
  )
}
