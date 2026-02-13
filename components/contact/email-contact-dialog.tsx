"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, CheckCircle2, Mail } from "lucide-react"

interface EmailContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const EMAIL_TEMPLATE = `Hola N3uralia,

Me gustaría conocer más sobre vuestros servicios de arquitectura de sistemas agenticos.

Proyecto: [Describe tu proyecto]
Presupuesto estimado: [Rango]
Timeline: [Cuándo lo necesitas]
Contacto: [Tu nombre y teléfono]

¿Podemos agendar una consulta?

Saludos,
[Tu nombre]`

export function EmailContactDialog({ open, onOpenChange }: EmailContactDialogProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_TEMPLATE)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (error) {
      console.error("[v0] Copy error:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Contacta con N3uralia
          </DialogTitle>
          <DialogDescription>
            Abre tu cliente de email preferido (Gmail, Outlook, Apple Mail, etc) y envía este mensaje a <strong>info@n3uralia.com</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Email Address */}
          <div className="bg-muted p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2">Enviar a:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-background p-2 rounded text-sm font-mono text-foreground border border-border">
                info@n3uralia.com
              </code>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText("info@n3uralia.com")
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                }}
                className="flex-shrink-0"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Email Template */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Copia el siguiente mensaje:</p>
            <textarea
              value={EMAIL_TEMPLATE}
              readOnly
              className="w-full h-48 p-4 border border-border rounded-lg bg-background text-foreground text-sm font-mono resize-none"
            />
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Pasos:
            </h4>
            <ol className="space-y-2 text-sm text-blue-800 dark:text-blue-200 list-decimal list-inside">
              <li>Copia el email que aparece arriba</li>
              <li>Abre tu cliente de email (Gmail, Outlook, etc)</li>
              <li>Nuevo email → Para: <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs font-mono">info@n3uralia.com</code></li>
              <li>Pega el mensaje y completa tus datos</li>
              <li>Envía. Responderemos en menos de 1 hora 🚀</li>
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button onClick={handleCopy} className="flex-1 bg-primary hover:bg-primary/90">
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Mensaje
                </>
              )}
            </Button>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
