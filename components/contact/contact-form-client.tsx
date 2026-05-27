"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setResult(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setResult({
          success: true,
          message: "Mensaje enviado exitosamente. Nos pondremos en contacto pronto.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        setResult({
          success: false,
          message: data.error || "Error al enviar el mensaje. Intenta nuevamente.",
        })
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      setResult({
        success: false,
        message: "Error al enviar el mensaje. Por favor intenta más tarde.",
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Nombre completo *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Juan Pérez"
          value={formData.name}
          onChange={handleChange}
          disabled={sending}
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu.email@empresa.com"
          value={formData.email}
          onChange={handleChange}
          disabled={sending}
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Empresa
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          placeholder="Tu empresa"
          value={formData.company}
          onChange={handleChange}
          disabled={sending}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Cuéntanos tu proyecto *
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe brevemente tu proyecto, desafíos, timeline y presupuesto estimado..."
          value={formData.message}
          onChange={handleChange}
          disabled={sending}
          required
          rows={6}
          className="w-full p-3 border border-border rounded-lg bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {result && (
        <div
          className={`p-4 rounded-lg border ${
            result.success
              ? "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
          }`}
        >
          <p
            className={`text-sm font-medium ${
              result.success ? "text-green-900 dark:text-green-100" : "text-red-900 dark:text-red-100"
            }`}
          >
            {result.message}
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={sending || !formData.name || !formData.email || !formData.message}
        className="w-full bg-primary hover:bg-primary/90"
      >
        {sending ? (
          <>
            <Send className="w-4 h-4 mr-2" />
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
        Responderemos a tu consulta en menos de 1 hora
      </p>
    </form>
  )
}
