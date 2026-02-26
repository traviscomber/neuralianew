"use client"

import { useState } from "react"
import type { Locale } from "@/lib/get-locale"
import { ContactConversation } from "@/components/contact/contact-conversation"
import { EmailContactDialog } from "@/components/contact/email-contact-dialog"

interface ContactPageClientProps {
  locale: Locale
}

export function ContactPageClient({ locale }: ContactPageClientProps) {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  const isES = locale === 'es'

  return (
    <>
      <ContactConversation />

      <div className="mt-12 pt-12 border-t border-border text-center">
        <p className="text-sm text-muted-foreground mb-4">
          {isES ? "¿Prefieres contacto directo? " : "Prefer direct contact? "}{" "}
          <a href="https://web.whatsapp.com/send/?phone=56993826127&text=Hola+N3uralia%2C+me+gustaría+conocer+más+sobre+vuestras+soluciones+de+IA&type=phone_number&app_absent=0" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
            WhatsApp +56 9 9382 6127
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          {isES ? "O envía un email a " : "Or send an email to "}{" "}
          <button 
            onClick={() => setEmailDialogOpen(true)}
            className="text-primary font-semibold hover:underline cursor-pointer"
          >
            info@n3uralia.com
          </button>
        </p>
      </div>

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </>
  )
}
