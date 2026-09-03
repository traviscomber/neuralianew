"use client"

import { useState } from "react"
import { CheckCircle2, Copy, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface EmailContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const EMAIL_TEMPLATE = `Hola N3uralia,

Me gustaría conversar sobre un proyecto de software, automatización o IA para una operación real.

Contexto: [Describe brevemente la empresa o equipo]
Proceso a mejorar: [Qué hoy vive entre planillas, correos, PDFs o herramientas desconectadas]
Objetivo: [Qué decisión, tiempo o resultado debería mejorar]
Timeline: [Cuándo les gustaría partir]
Contacto: [Tu nombre y teléfono]

¿Podemos agendar un diagnóstico?

Saludos,
[Tu nombre]`

export function EmailContactDialog({ open, onOpenChange }: EmailContactDialogProps) {
  const [copied, setCopied] = useState(false)
  const [showDirectSend, setShowDirectSend] = useState(true)
  const [senderEmail, setSenderEmail] = useState("")
  const [senderName, setSenderName] = useState("")
  const [senderMessage, setSenderMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_TEMPLATE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("[contact] copy error:", error)
    }
  }

  const handleDirectSend = async () => {
    if (!senderEmail || !senderName) {
      setSendResult({
        success: false,
        message: "Por favor, completa tu nombre y email.",
      })
      return
    }

    setSending(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: senderMessage,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setSendResult({
          success: false,
          message: data.error || "No se pudo enviar el email. Por favor, intenta nuevamente.",
        })
        setSending(false)
        return
      }

      setSendResult({
        success: true,
        message: "Email enviado. Nos pondremos en contacto pronto.",
      })

      setTimeout(() => {
        setSenderEmail("")
        setSenderName("")
        setSenderMessage("")
        setShowDirectSend(true)
        setSendResult(null)
        onOpenChange(false)
      }, 2000)
    } catch (error) {
      console.error("[contact] send email error:", error)
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
      <DialogContent className="max-w-2xl border-[rgba(168,217,216,.24)] bg-[var(--n3-deep)] text-[var(--n3-text-light)] shadow-none">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 font-[var(--font-rajdhani)] text-xl font-normal uppercase tracking-[.14em] text-[var(--n3-text-light)]">
            <Mail className="h-5 w-5 text-[var(--n3-teal-soft)]" />
            Contacta con N3uralia
          </DialogTitle>
          <DialogDescription className="text-[13px] leading-6 text-[var(--n3-text-muted)]">
            Elige cómo prefieres escribirnos: envío directo o template para tu cliente de email.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="flex gap-6 border-b border-[rgba(118,214,214,.16)]">
            <button
              type="button"
              onClick={() => setShowDirectSend(true)}
              className={`min-h-11 border-b px-1 pb-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[.14em] transition-colors ${
                showDirectSend
                  ? "border-[var(--n3-teal)] text-[var(--n3-teal-soft)]"
                  : "border-transparent text-[var(--n3-text-muted)] hover:text-[var(--n3-text-light)]"
              }`}
            >
              Envío directo
            </button>
            <button
              type="button"
              onClick={() => setShowDirectSend(false)}
              className={`min-h-11 border-b px-1 pb-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[.14em] transition-colors ${
                !showDirectSend
                  ? "border-[var(--n3-teal)] text-[var(--n3-teal-soft)]"
                  : "border-transparent text-[var(--n3-text-muted)] hover:text-[var(--n3-text-light)]"
              }`}
            >
              Template de email
            </button>
          </div>

          {!showDirectSend ? (
            <>
              <div className="border border-[rgba(118,214,214,.16)] bg-[var(--n3-dark-surface)] p-4">
                <p className="mb-2 text-[12px] text-[var(--n3-text-muted)]">Enviar a:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 border border-[rgba(168,217,216,.18)] bg-[var(--n3-black)] p-3 font-mono text-[12px] text-[var(--n3-text-light)]">
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
                    className="h-11 flex-shrink-0 rounded-none border-[rgba(168,217,216,.28)] bg-transparent text-[var(--n3-teal-soft)] hover:bg-[rgba(168,217,216,.07)] hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[12px] text-[var(--n3-text-muted)]">Copia el siguiente mensaje:</p>
                <textarea
                  value={EMAIL_TEMPLATE}
                  readOnly
                  className="h-52 w-full resize-none border border-[rgba(168,217,216,.2)] bg-[var(--n3-black)] p-4 font-mono text-[12px] leading-6 text-[var(--n3-text-light)] focus:border-[var(--n3-teal)] focus:outline-none"
                />
              </div>

              <div className="border border-[rgba(118,214,214,.16)] bg-[var(--n3-dark-surface)] p-4">
                <h4 className="mb-3 flex items-center gap-2 font-[var(--font-rajdhani)] text-sm font-normal uppercase tracking-[.12em] text-[var(--n3-text-light)]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--n3-teal-soft)]" />
                  Pasos
                </h4>
                <ol className="list-inside list-decimal space-y-2 text-[12px] leading-6 text-[var(--n3-text-muted)]">
                  <li>Copia el mensaje.</li>
                  <li>Abre tu cliente de email.</li>
                  <li>Envía a info@n3uralia.com.</li>
                  <li>Responderemos con contexto y siguiente paso sugerido.</li>
                </ol>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <button type="button" onClick={handleCopy} className="retro-button retro-button-primary flex-1 gap-2">
                  {copied ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copiar mensaje
                    </>
                  )}
                </button>
                <button type="button" onClick={() => onOpenChange(false)} className="retro-button flex-1">
                  Cerrar
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-2 block font-[var(--font-rajdhani)] text-xs uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">Tu nombre</label>
                <Input
                  type="text"
                  placeholder="Nombre y apellido"
                  value={senderName}
                  onChange={(event) => setSenderName(event.target.value)}
                  disabled={sending}
                  className="h-12 w-full rounded-none border-[rgba(168,217,216,.22)] bg-[var(--n3-black)] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus-visible:ring-[var(--n3-teal)]"
                />
              </div>

              <div>
                <label className="mb-2 block font-[var(--font-rajdhani)] text-xs uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">Tu email</label>
                <Input
                  type="email"
                  placeholder="tu.email@empresa.com"
                  value={senderEmail}
                  onChange={(event) => setSenderEmail(event.target.value)}
                  disabled={sending}
                  className="h-12 w-full rounded-none border-[rgba(168,217,216,.22)] bg-[var(--n3-black)] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus-visible:ring-[var(--n3-teal)]"
                />
              </div>

              <div>
                <label className="mb-2 block font-[var(--font-rajdhani)] text-xs uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">
                  Cuéntanos tu proyecto
                </label>
                <textarea
                  placeholder="Describe industria, proceso a mejorar, herramientas actuales y urgencia."
                  value={senderMessage}
                  onChange={(event) => setSenderMessage(event.target.value)}
                  disabled={sending}
                  className="h-32 w-full resize-none border border-[rgba(168,217,216,.22)] bg-[var(--n3-black)] p-3 text-[13px] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
                />
              </div>

              {sendResult ? (
                <div
                  className={`border p-4 ${
                    sendResult.success
                      ? "border-[rgba(168,217,216,.32)] bg-[rgba(168,217,216,.06)]"
                      : "border-red-400/35 bg-red-950/15"
                  }`}
                >
                  <p className="text-[12px] font-medium text-[var(--n3-text-light)]">{sendResult.message}</p>
                </div>
              ) : null}

              <button
                type="button"
                onClick={handleDirectSend}
                disabled={sending || !senderName || !senderEmail}
                className="retro-button retro-button-primary w-full gap-2 disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <Mail className="h-4 w-4" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-[var(--n3-text-muted)]">
                Respondemos normalmente dentro de 1 día hábil.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
