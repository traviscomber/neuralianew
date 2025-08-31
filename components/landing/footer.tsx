"use client"

import { Badge } from "@/components/ui/badge"
import { Brain, Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Brain className="h-10 w-10 text-blue-400" />
              <span className="ml-3 text-2xl font-bold gradient-text">Neuralia</span>
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white border-0">
                Vibe Coding
              </Badge>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Smart AI agents built with vibe coding. Simple, powerful, effective.
            </p>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  🌱 EcosueloLab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  🚀 Career Coach
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  🦜 ParrotfyIA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  🏢 Enterprise AI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@neuralia.ai" className="hover:text-white">
                  hello@neuralia.ai
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Neuralia. Built with vibe coding.</p>
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mt-4 md:mt-0">
            Made with ❤️ in Chile
          </Badge>
        </div>
      </div>
    </footer>
  )
}
