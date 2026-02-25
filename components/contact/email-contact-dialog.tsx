"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, CheckCircle2, Mail, Send } from "lucide-react"
import { sendDirectEmail } from "@/app/actions/email"
import { Input } from "@/components/ui/input"

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
  const [showDirectSend, setShowDirectSend] = useState(false)
  const [senderEmail, setSenderEmail] = useState("")
  const [senderName, setSenderName] = useState("")
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_TEMPLATE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("[v0] Copy error:", error)
    }
  }

  const handleDirectSend = async () => {
    if (!senderEmail || !senderName) {
      setSendResult({
        success: false,
        message: "Por favor, completa tu nombre y email",
      })
      return
    }

    setSending(true)
    try {
      const result = await sendDirectEmail(senderEmail, senderName)
      setSendResult(result)

      if (result.success) {
        setTimeout(() => {
          setSenderEmail("")
          setSenderName("")
          setShowDirectSend(false)
          setSendResult(null)
          onOpenChange(false)
        }, 2000)
      }
    } catch (error) {
      console.error("[v0] Send email error:", error)
      setSendResult({
        success: false,
        message: "Error al enviar. Por favor, intenta nuevamente.",
      })
    } finally {
      setSending(false)
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
            Elige cómo prefieres contactarnos: envía un email directo o copia nuestro template
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Tab-like buttons to switch views */}
          <div className="flex gap-2 border-b border-border">
            <button
              onClick={() => setShowDirectSend(false)}
              className={`pb-2 px-4 font-medium text-sm transition-colors ${
                !showDirectSend
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Template de Email
            </button>
            <button
              onClick={() => setShowDirectSend(true)}
              className={`pb-2 px-4 font-medium text-sm transition-colors ${
                showDirectSend
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Envío Directo
            </button>
          </div>

          {!showDirectSend ? (
            <>
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
                  <li>
                    Nuevo email → Para:{" "}
                    <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-xs font-mono">
                      info@n3uralia.com
                    </code>
                  </li>
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
            </>
          ) : (
            <>
              {/* Direct Send Form */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tu Nombre</label>
                  <Input
                    type="text"
                    placeholder="Juan Pérez"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    disabled={sending}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tu Email</label>
                  <Input
                    type="email"
                    placeholder="tu.email@empresa.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    disabled={sending}
                    className="w-full"
                  />
                </div>

                {sendResult && (
                  <div
                    className={`p-4 rounded-lg border ${
                      sendResult.success
                        ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        sendResult.success
                          ? "text-green-900 dark:text-green-100"
                          : "text-red-900 dark:text-red-100"
                      }`}
                    >
                      {sendResult.message}
                    </p>
                  </div>
                )}

                <Button
                  onClick={handleDirectSend}
                  disabled={sending || !senderName || !senderEmail}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {sending ? (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Nos pondremos en contacto en menos de 1 hora
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
