"use client"

import { useEffect } from "react"

const RUNTIME_CSS = `
section[aria-labelledby="capabilities-title"] [data-n3-scroll-glow] {
  --n3-scroll-energy: 0;
}

section[aria-labelledby="capabilities-title"] article[data-n3-scroll-glow] [class*="capabilityNum"] {
  filter: drop-shadow(
    0 0 calc(5px + (var(--n3-scroll-energy) * 20px))
    rgba(32,231,223,calc(.16 + (var(--n3-scroll-energy) * .78)))
  ) brightness(calc(1 + (var(--n3-scroll-energy) * .38))) !important;
  transition: filter 70ms linear !important;
}

section[aria-labelledby="capabilities-title"] article[data-n3-scroll-glow] [class*="capabilityNum"]::after {
  opacity: calc(.68 + (var(--n3-scroll-energy) * .32)) !important;
  box-shadow:
    0 0 calc(8px + (var(--n3-scroll-energy) * 24px))
    rgba(32,231,223,calc(.30 + (var(--n3-scroll-energy) * .65))) !important;
  transition: opacity 70ms linear, box-shadow 70ms linear !important;
}

section[aria-labelledby="capabilities-title"] a[data-n3-scroll-glow]::before {
  filter: drop-shadow(
    0 0 calc(5px + (var(--n3-scroll-energy) * 22px))
    rgba(32,231,223,calc(.18 + (var(--n3-scroll-energy) * .78)))
  ) brightness(calc(1 + (var(--n3-scroll-energy) * .42))) !important;
  box-shadow:
    0 0 calc(7px + (var(--n3-scroll-energy) * 22px))
    rgba(32,231,223,calc(.20 + (var(--n3-scroll-energy) * .70))) !important;
  transition: filter 70ms linear, box-shadow 70ms linear !important;
}

section[aria-labelledby="capabilities-title"] a[data-n3-scroll-glow]::after {
  box-shadow:
    0 0 calc(4px + (var(--n3-scroll-energy) * 11px))
    rgba(32,231,223,calc(.18 + (var(--n3-scroll-energy) * .55))) !important;
  transition: box-shadow 70ms linear !important;
}

@media (prefers-reduced-motion: reduce) {
  section[aria-labelledby="capabilities-title"] [data-n3-scroll-glow] {
    --n3-scroll-energy: 0 !important;
  }
}
`

export function SolutionsCapabilityScrollGlow() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(
      'section[aria-labelledby="capabilities-title"]',
    )

    if (!section) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const rows = Array.from(
      section.querySelectorAll<HTMLElement>('article[class*="capabilityRow"]'),
    )
    const cta = section.querySelector<HTMLElement>('a[href="#combine-title"]')
    const targets = cta ? [...rows, cta] : rows

    if (!targets.length) return

    targets.forEach((target) => {
      target.dataset.n3ScrollGlow = ""
    })

    let frame = 0

    const render = () => {
      frame = 0

      if (reduceMotion.matches) {
        targets.forEach((target) => {
          target.style.setProperty("--n3-scroll-energy", "0")
        })
        return
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const focusY = viewportHeight * 0.56
      const influenceRadius = Math.max(viewportHeight * 0.34, 240)

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const distance = Math.abs(center - focusY)
        const raw = Math.max(0, Math.min(1, 1 - distance / influenceRadius))
        const smooth = raw * raw * (3 - 2 * raw)
        target.style.setProperty("--n3-scroll-energy", smooth.toFixed(3))
      })
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(render)
    }

    render()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    reduceMotion.addEventListener?.("change", schedule)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      reduceMotion.removeEventListener?.("change", schedule)
      targets.forEach((target) => {
        delete target.dataset.n3ScrollGlow
        target.style.removeProperty("--n3-scroll-energy")
      })
    }
  }, [])

  return <style>{RUNTIME_CSS}</style>
}
