"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: "Elena Rodrigues",
      role: "Company CEO",
      image: "/placeholder-user.jpg",
      quote: "N3uralia is amazing! Team is great. Thank you, helped a lot, literally saved my ass.",
    },
    {
      name: "John Smith",
      role: "Agent",
      image: "/placeholder-user.jpg",
      quote:
        "My overall experience with N3URALIA is really great, because it is user friendly and easy to use marketing automation...",
      readMore: true,
    },
    {
      name: "Sarah Chen",
      role: "Company Manager",
      image: "/placeholder-user.jpg",
      quote:
        "Totally agree with Elena and the other guy. Now with N3uralia's agentic system, I became the best manager of the Company.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 px-4">
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 px-4">
            {language === "en"
              ? "Learn how we've helped businesses leverage AI"
              : "Aprende cómo hemos ayudado a empresas a aprovechar la IA"}
          </p>
        </motion.div>

        {/* Mobile-optimized testimonials */}
        <div className="space-y-6 sm:space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
            >
              <div className="w-full md:w-1/3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={300}
                  height={300}
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl grayscale"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white p-6 sm:p-8 rounded-2xl border border-gray-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{testimonial.role}</p>
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                  {testimonial.quote}
                  {testimonial.readMore && (
                    <button className="text-gray-600 ml-2 underline hover:text-gray-800 transition-colors">
                      ... read more
                    </button>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
