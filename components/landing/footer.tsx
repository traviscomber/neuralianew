"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Shield, Clock, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Neuralia
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Deploy specialized AI executives for strategic leadership, marketing growth, and technical innovation.
              Experience coordinated AI decision-making with the Neural Director.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                <Shield className="h-3 w-3 mr-1" />
                Enterprise Security
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                <Clock className="h-3 w-3 mr-1" />
                24/7 Available
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                <Globe className="h-3 w-3 mr-1" />
                Global Access
              </Badge>
            </div>
          </div>

          {/* AI Executives */}
          <div>
            <h4 className="text-lg font-semibold mb-4">AI Executives</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Neural Director</li>
              <li>Chief Executive Officer</li>
              <li>Chief Marketing Officer</li>
              <li>Chief Technology Officer</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@neuralia.ai"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>hello@neuralia.ai</span>
              </a>
              <a
                href="https://t.me/neuralia_support"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>@neuralia_support</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <h5 className="font-semibold text-white mb-2">Strategic Coordination</h5>
                <p className="text-sm text-gray-300">
                  Neural Director coordinates all AI executives for unified business strategy and execution.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <h5 className="font-semibold text-white mb-2">Specialized Expertise</h5>
                <p className="text-sm text-gray-300">
                  Each AI executive focuses on their domain: strategy, marketing, or technology leadership.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <h5 className="font-semibold text-white mb-2">Real-Time Insights</h5>
                <p className="text-sm text-gray-300">
                  Get immediate strategic guidance and coordinated decision-making support 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 Neuralia. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
