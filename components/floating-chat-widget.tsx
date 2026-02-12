"use client"

import React, { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { ContactConversation } from "@/components/contact/contact-conversation"

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Abrir chat de soporte"
        type="button"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border border-background" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-end md:justify-end p-4 pointer-events-none">
          <div
            className="w-full md:w-96 h-[80vh] md:h-[600px] bg-card border border-border rounded-lg shadow-2xl flex flex-col pointer-events-auto animate-in slide-in-from-bottom-5 fade-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h2 className="font-bold text-foreground">Soporte N3uralia</h2>
                <p className="text-xs text-muted-foreground">Respuesta rápida en horario laboral</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded transition-colors"
                aria-label="Cerrar chat"
                type="button"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex-1 overflow-y-auto">
              <ContactConversation />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
