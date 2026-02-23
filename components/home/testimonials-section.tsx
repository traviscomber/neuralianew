"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/app/constants/content"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const testimonial = testimonials[current]

  return (
    <section className="py-20 px-4 bg-card border-y border-border/40">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Qué Dicen Nuestros Clientes?
          </h2>
          <p className="text-muted-foreground">
            Historias reales de empresas que transformaron su operación con N3uralia.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative border border-border/60 rounded-lg p-8 md:p-12 bg-background hover:border-primary/30 transition-colors"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Quote Icon */}
          <Quote className="w-12 h-12 text-primary/20 mb-6" />

          {/* Quote Text */}
          <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
            "{testimonial.quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role} • {testimonial.company}
              </p>
              <p className="text-xs text-primary font-medium">{testimonial.industry}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i)
                    setAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Ir a testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"
              aria-label="Siguiente testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Counter */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            {current + 1} de {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
