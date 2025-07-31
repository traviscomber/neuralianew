"use client"

import { Brain, Mail, MessageCircle, Shield, FileText, Users, Zap } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Neural Agents", href: "#agents" },
    { name: "Pricing", href: "#pricing" },
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "/integrations" },
    { name: "API Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
  ],
  company: [
    { name: "About Us", href: "#team" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Blog", href: "/blog" },
    { name: "Investors", href: "/investors" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "System Status", href: "/status" },
    { name: "Community", href: "/community" },
    { name: "Training", href: "/training" },
    { name: "Consulting", href: "/consulting" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Security", href: "/security" },
    { name: "Compliance", href: "/compliance" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
}

const complianceBadges = [
  { name: "SOC 2 Type II", icon: Shield },
  { name: "ISO 27001", icon: FileText },
  { name: "GDPR Compliant", icon: Users },
  { name: "99.9% Uptime", icon: Zap },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Neuralia</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Deploy quantum-inspired AI executives that make strategic decisions with the intelligence of Fortune 500
              leadership teams.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:hello@neuralia.ai" className="text-gray-300 hover:text-white transition-colors">
                  hello@neuralia.ai
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <a href="https://t.me/neuralia_support" className="text-gray-300 hover:text-white transition-colors">
                  @neuralia_support
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-semibold text-white mb-4">Security & Compliance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{badge.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* USDT Payment Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-white mb-4">Neural Network Upgrade Payment</h3>
            <p className="text-gray-400 mb-4">
              Upgrade your Neural AI Executives with USDT payment for unlimited processing power and advanced
              capabilities.
            </p>
            <div className="bg-gray-900 rounded p-4 font-mono text-sm text-green-400 break-all">
              TQn9Y2khEsLMG73Zyy56JdKHD8rQQzaUvr
            </div>
            <p className="text-xs text-gray-500 mt-2">
              TRC20 Network • Instant activation • Enterprise support included
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Neuralia Inc. All rights reserved. • Series A funded • SOC 2 Type II certified
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>San Francisco, CA</span>
            <span>•</span>
            <span>500+ Enterprise Clients</span>
            <span>•</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
