"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { isValidLocale } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const params = useParams()
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : "es"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Abrir chat"
        type="button"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border border-background" />
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 right-6 z-50 w-96 bg-card border border-border rounded-lg shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-foreground">Contacta con N3uralia</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Cuéntanos sobre tu proyecto y nos pondremos en contacto pronto.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center font-semibold hover:bg-primary/90 transition-colors"
            >
              Abrir formulario de contacto
            </Link>
          </div>
        </>
      )}
    </>
  )
}
