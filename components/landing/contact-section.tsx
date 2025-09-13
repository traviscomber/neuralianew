"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Shield } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "contact@n3uralia.com",
      href: "mailto:contact@n3uralia.com",
      description: t("contact.info.emailDesc"),
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+56 9 4094 6660",
      href: "tel:+56940946660",
      description: t("contact.info.phoneDesc"),
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: "Santiago, Chile",
      href: "#",
      description: t("contact.info.locationDesc"),
    },
  ]

  return (
    <section id="contact" className="bg-gray-50 py-20 sm:py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge className="bg-white text-gray-700 border border-gray-200 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-6 lg:mb-8 font-medium">
            {t("contact.badge")}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {t("contact.title")}
            <br />
            <span className="font-bold text-black">{t("contact.titleBold")}</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border border-gray-200 rounded-3xl shadow-sm">
              <CardContent className="p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-8 lg:mb-10">
                  {t("contact.form.title")}
                </h3>

                <form className="space-y-6 lg:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium mb-3 block text-base lg:text-lg">
                        {t("contact.form.name")}
                      </Label>
                      <Input
                        id="name"
                        className="border-2 border-gray-200 focus:border-gray-400 rounded-xl h-12 lg:h-14 text-base lg:text-lg"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium mb-3 block text-base lg:text-lg">
                        {t("contact.form.email")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="border-2 border-gray-200 focus:border-gray-400 rounded-xl h-12 lg:h-14 text-base lg:text-lg"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium mb-3 block text-base lg:text-lg">
                      {t("contact.form.subject")}
                    </Label>
                    <Input
                      id="subject"
                      className="border-2 border-gray-200 focus:border-gray-400 rounded-xl h-12 lg:h-14 text-base lg:text-lg"
                      placeholder={t("contact.form.subjectPlaceholder")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium mb-3 block text-base lg:text-lg">
                      {t("contact.form.message")}
                    </Label>
                    <Textarea
                      id="message"
                      className="border-2 border-gray-200 focus:border-gray-400 rounded-xl min-h-[140px] lg:min-h-[160px] resize-none text-base lg:text-lg"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                    <Button
                      type="submit"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-medium px-8 py-4 lg:py-5 rounded-xl h-auto text-base lg:text-lg transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      {t("contact.form.send")}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-4 lg:py-5 rounded-xl h-auto text-base lg:text-lg transition-all duration-300 hover:scale-105"
                    >
                      <MessageSquare className="w-5 h-5 mr-3" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-10"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 mb-8 lg:mb-10">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-6 lg:space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 lg:gap-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm flex-shrink-0">
                      <info.icon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm lg:text-base text-gray-500 font-medium mb-1">{info.title}</p>
                      <a
                        href={info.href}
                        className="text-lg lg:text-xl text-gray-800 font-medium hover:text-gray-600 transition-colors block mb-2"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm lg:text-base text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-gray-600" />
                  <h4 className="text-xl lg:text-2xl font-medium text-gray-800">{t("contact.hours.title")}</h4>
                </div>

                <div className="space-y-3 text-gray-600">
                  <p className="text-base lg:text-lg">
                    <span className="font-medium">{t("contact.hours.weekdays")}</span> 9:00 AM - 6:00 PM (CLT)
                  </p>
                  <p className="text-base lg:text-lg">
                    <span className="font-medium">{t("contact.hours.saturday")}</span> 10:00 AM - 2:00 PM (CLT)
                  </p>
                  <p className="text-base lg:text-lg">
                    <span className="font-medium">{t("contact.hours.sunday")}</span> {t("contact.hours.closed")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="bg-gray-800 text-white rounded-2xl shadow-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  <h4 className="text-xl lg:text-2xl font-medium">{t("contact.emergency.title")}</h4>
                </div>

                <p className="text-gray-300 mb-6 lg:mb-8 font-light text-base lg:text-lg leading-relaxed">
                  {t("contact.emergency.desc")}
                </p>

                <Button
                  onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                  className="bg-white text-gray-800 hover:bg-gray-100 font-medium px-6 lg:px-8 py-3 lg:py-4 rounded-xl text-base lg:text-lg transition-all duration-300 hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  {t("contact.emergency.button")}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
