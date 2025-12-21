"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Mail, Phone, CheckCircle } from "lucide-react"

export function ContactFormChile() {
  const { language } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's build something extraordinary together",
      name: "Full Name",
      email: "Email",
      company: "Company",
      message: "Message",
      cta: "Send Message",
      whatsapp: "Chat on WhatsApp",
      phone: "+56 9 4094 6660",
      thanks: "Thanks for reaching out! We'll be in touch soon.",
    },
    es: {
      title: "Contáctanos",
      subtitle: "Construyamos algo extraordinario juntos",
      name: "Nombre Completo",
      email: "Correo",
      company: "Empresa",
      message: "Mensaje",
      cta: "Enviar Mensaje",
      whatsapp: "Chatear por WhatsApp",
      phone: "+56 9 4094 6660",
      thanks: "¡Gracias por contactarnos! Nos comunicaremos pronto.",
    },
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const contactCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
    hover: {
      y: -4,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        className="text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          {t.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-slate-600">
          {t.subtitle}
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: false }}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Input
              placeholder={t.name}
              className="bg-white border-slate-200 focus:border-blue-500 transition-colors"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Input
              placeholder={t.email}
              type="email"
              className="bg-white border-slate-200 focus:border-blue-500 transition-colors"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Input
              placeholder={t.company}
              className="bg-white border-slate-200 focus:border-blue-500 transition-colors"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Textarea
              placeholder={t.message}
              rows={4}
              className="bg-white border-slate-200 focus:border-blue-500 transition-colors"
              required
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-3 rounded-lg font-semibold"
              >
                <CheckCircle className="w-5 h-5" />
                {t.thanks}
              </motion.div>
            ) : (
              <motion.div key="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  {t.cta}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: false }}
        >
          {/* WhatsApp Card */}
          <motion.div
            variants={contactCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            whileHover="hover"
            className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 group cursor-pointer"
            onClick={() => window.open("https://wa.me/56940946660", "_blank")}
          >
            <motion.div
              className="flex items-center gap-3 mb-3"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
            >
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-slate-900">WhatsApp</h3>
            </motion.div>
            <p className="text-sm text-slate-600 mb-4 group-hover:text-slate-700 transition-colors">
              {language === "en" ? "Chat with us directly on WhatsApp" : "Chatea con nosotros directamente en WhatsApp"}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="w-full bg-green-600 hover:bg-green-700">{t.whatsapp}</Button>
            </motion.div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            variants={contactCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            whileHover="hover"
            className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 group"
          >
            <motion.div
              className="flex items-center gap-3 mb-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <h3 className="font-semibold text-slate-900">{language === "en" ? "Phone" : "Teléfono"}</h3>
            </motion.div>
            <p className="text-lg font-semibold text-slate-900 mb-4">{t.phone}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="w-full border-emerald-300 text-emerald-700 bg-transparent">
                <a href="tel:+56940946660">{language === "en" ? "Call Us" : "Llámanos"}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={contactCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            whileHover="hover"
            className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-indigo-200 group"
          >
            <motion.div
              className="flex items-center gap-3 mb-3"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Mail className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">{language === "en" ? "Email" : "Correo"}</h3>
            </motion.div>
            <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors">hello@n3uralia.com</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="w-full border-indigo-300 text-indigo-700 bg-transparent">
                <a href="mailto:hello@n3uralia.com">{language === "en" ? "Email Us" : "Envíanos un Email"}</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
