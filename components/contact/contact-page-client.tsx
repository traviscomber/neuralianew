"use client"

import { useState } from "react"
import { ContactConversation } from "@/components/contact/contact-conversation"
import { EmailContactDialog } from "@/components/contact/email-contact-dialog"
import type { Locale } from "@/lib/get-locale"

export function ContactPageClient({ locale }: { locale: Locale }) {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  const isES = locale === "es"

  return (
    <>
      <ContactConversation locale={locale} />

      <div className="border-t border-[rgba(118,214,214,.16)] bg-[var(--n3-deep)] px-5 py-6 text-center">
        <p className="mb-3 text-[12px] text-[var(--n3-text-muted)]">
          {isES ? "¿Prefieres contacto directo?" : "Prefer direct contact?"}{" "}
          <a
            href="https://wa.me/56993826127"
            className="font-medium text-[var(--n3-teal-soft)] transition-colors hover:text-[var(--n3-text-light)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp +56 9 9382 6127
          </a>
        </p>
        <p className="text-[12px] text-[var(--n3-text-muted)]">
          {isES ? "O escribe a" : "Or email"}{" "}
          <button
            type="button"
            onClick={() => setEmailDialogOpen(true)}
            className="cursor-pointer font-medium text-[var(--n3-teal-soft)] transition-colors hover:text-[var(--n3-text-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--n3-teal)]"
          >
            info@n3uralia.com
          </button>
        </p>
      </div>

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </>
  )
}
