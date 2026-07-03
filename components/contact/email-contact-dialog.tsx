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
      <DialogContent className="max-w-2xl border-[#d8e5e2] bg-[#fbfbfa] text-[#243331]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-[#173634]">
            <Mail className="h-5 w-5 text-[#789b96]" />
            Contacta con N3uralia
          </DialogTitle>
          <DialogDescription className="text-[#65706d]">
            Elige cómo prefieres escribirnos: envío directo o template para tu cliente de email.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="flex gap-2 border-b border-[#d8e5e2]">
            <button
              type="button"
              onClick={() => setShowDirectSend(true)}
              className={`px-4 pb-3 text-sm font-semibold transition-colors ${
                showDirectSend
                  ? "border-b-2 border-[#789b96] text-[#173634]"
                  : "text-[#7b8582] hover:text-[#173634]"
              }`}
            >
              Envío directo
            </button>
            <button
              type="button"
              onClick={() => setShowDirectSend(false)}
              className={`px-4 pb-3 text-sm font-semibold transition-colors ${
                !showDirectSend
                  ? "border-b-2 border-[#789b96] text-[#173634]"
                  : "text-[#7b8582] hover:text-[#173634]"
              }`}
            >
              Template de email
            </button>
          </div>

          {!showDirectSend ? (
            <>
              <div className="rounded-[1.1rem] border border-[#d8e5e2] bg-white p-4">
                <p className="mb-2 text-sm text-[#65706d]">Enviar a:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 rounded-lg border border-[#d8e5e2] bg-[#f7faf8] p-2 font-mono text-sm text-[#243331]">
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
                    className="flex-shrink-0 border-[#b9d0cb] text-[#526e69] hover:bg-[#eef5f2]"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-[#65706d]">Copia el siguiente mensaje:</p>
                <textarea
                  value={EMAIL_TEMPLATE}
                  readOnly
                  className="h-52 w-full resize-none rounded-[1.1rem] border border-[#d8e5e2] bg-white p-4 font-mono text-sm text-[#243331]"
                />
              </div>

              <div className="rounded-[1.1rem] border border-[#d8e5e2] bg-[#eef5f2] p-4">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#173634]">
                  <CheckCircle2 className="h-4 w-4 text-[#789b96]" />
                  Pasos
                </h4>
                <ol className="space-y-2 text-sm leading-6 text-[#65706d] list-decimal list-inside">
                  <li>Copia el mensaje.</li>
                  <li>Abre tu cliente de email.</li>
                  <li>Envía a info@n3uralia.com.</li>
                  <li>Responderemos con contexto y siguiente paso sugerido.</li>
                </ol>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleCopy} className="flex-1 bg-[#173634] text-white hover:bg-[#244946]">
                  {copied ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copiar mensaje
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={() => onOpenChange(false)} className="border-[#b9d0cb] text-[#526e69] hover:bg-[#eef5f2]">
                  Cerrar
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#243331]">Tu nombre</label>
                <Input
                  type="text"
                  placeholder="Nombre y apellido"
                  value={senderName}
                  onChange={(event) => setSenderName(event.target.value)}
                  disabled={sending}
                  className="w-full border-[#d8e5e2] bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#243331]">Tu email</label>
                <Input
                  type="email"
                  placeholder="tu.email@empresa.com"
                  value={senderEmail}
                  onChange={(event) => setSenderEmail(event.target.value)}
                  disabled={sending}
                  className="w-full border-[#d8e5e2] bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#243331]">
                  Cuéntanos tu proyecto
                </label>
                <textarea
                  placeholder="Describe industria, proceso a mejorar, herramientas actuales y urgencia."
                  value={senderMessage}
                  onChange={(event) => setSenderMessage(event.target.value)}
                  disabled={sending}
                  className="h-32 w-full resize-none rounded-lg border border-[#d8e5e2] bg-white p-3 text-sm text-[#243331] focus:outline-none focus:ring-2 focus:ring-[#789b96]"
                />
              </div>

              {sendResult ? (
                <div
                  className={`rounded-[1.1rem] border p-4 ${
                    sendResult.success
                      ? "border-[#b8d1cc] bg-[#eef5f2]"
                      : "border-[#e0c8c0] bg-[#fbf3f0]"
                  }`}
                >
                  <p className="text-sm font-semibold text-[#243331]">{sendResult.message}</p>
                </div>
              ) : null}

              <Button
                onClick={handleDirectSend}
                disabled={sending || !senderName || !senderEmail}
                className="w-full bg-[#173634] text-white hover:bg-[#244946] disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-[#7b8582]">
                Respondemos normalmente dentro de 1 día hábil.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
