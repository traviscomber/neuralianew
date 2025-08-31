import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">🚀 Ready to Transform Your Business?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your AI Journey Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Neuralia's AI agents to automate processes, improve customer
              experience, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Neuralia</h3>
            <p className="text-blue-100 mb-6 max-w-md">
              Fullstack AI ecosystem built by Neuralia, copiloted by AI. We empower businesses to create intelligent
              agents that understand, learn, and deliver exceptional results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-blue-100">
                <Mail className="h-5 w-5" />
                <span>contact@neuralia.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <MapPin className="h-5 w-5" />
                <span>San Francisco, CA & Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  EcosueloLab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Despega tu Carrera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ParrotfyIA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-blue-100">Get the latest AI insights and product updates.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100 text-sm">
            © 2024 Neuralia. All rights reserved. Built with ❤️ for the future of AI.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
