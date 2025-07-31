"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Mail, MessageCircle, Shield, Award, Globe, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Neuralia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolutionary Neural AI Executives powered by 175B parameter quantum-inspired algorithms. Deploy your AI
              executive team in seconds.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#agents" className="hover:text-white transition-colors">
                  AI Executives
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status Page
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">hello@neuralia.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">@neuralia_support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              <Shield className="mr-1 h-3 w-3" />
              SOC 2 Type II
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              <Award className="mr-1 h-3 w-3" />
              ISO 27001
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              <Globe className="mr-1 h-3 w-3" />
              GDPR Compliant
            </Badge>
            <Badge variant="outline" className="border-gray-600 text-gray-400">
              <Shield className="mr-1 h-3 w-3" />
              99.9% Uptime SLA
            </Badge>
          </div>
        </div>

        {/* Payment Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4">USDT Payment Address</h4>
            <div className="bg-gray-800 rounded-lg p-4 max-w-md mx-auto">
              <code className="text-sm text-blue-400 break-all">TQn9Y2khEsLMWD5uPKisuSiSbzTdEA9DC8</code>
            </div>
            <p className="text-xs text-gray-500 mt-2">Tether (USDT) TRC-20 Network • Verify address before sending</p>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Neuralia Inc. All rights reserved.</div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
