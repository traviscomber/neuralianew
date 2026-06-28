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

      <div className="border-t border-[#d8e5e2] bg-[#fbfbfa] px-5 py-6 text-center">
        <p className="mb-3 text-sm text-[#65706d]">
          {isES ? "¿Prefieres contacto directo?" : "Prefer direct contact?"}{" "}
          <a
            href="https://wa.me/56993826127"
            className="font-semibold text-[#789b96] transition-colors hover:text-[#173634]"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp +56 9 9382 6127
          </a>
        </p>
        <p className="text-sm text-[#65706d]">
          {isES ? "O escribe a" : "Or email"}{" "}
          <button
            type="button"
            onClick={() => setEmailDialogOpen(true)}
            className="cursor-pointer font-semibold text-[#789b96] transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
          >
            info@n3uralia.com
          </button>
        </p>
      </div>

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </>
  )
}
