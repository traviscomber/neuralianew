"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Users, Code, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description:
      "Our AI agents learn and adapt to your specific needs, providing personalized solutions that get smarter over time.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with vibe coding principles for optimal performance. Get results in seconds, not hours.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption. Your data stays private and protected.",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description: "Technology that feels natural. Our vibe coding approach prioritizes user experience above all.",
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows. No complex setup required.",
  },
  {
    icon: Sparkles,
    title: "Vibe Coding Magic",
    description: "Our unique development methodology creates AI that just works, intuitively and reliably.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Neuralia?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with our signature vibe coding approach to deliver solutions that
              are both powerful and intuitive.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
