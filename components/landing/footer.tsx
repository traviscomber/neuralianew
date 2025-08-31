import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to build your first AI agent?</h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of companies using Neuralia to transform their business with AI.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  API
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Sales Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Lead Generation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  HR & Recruiting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  E-commerce
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-white">Neuralia</div>
              <div className="text-sm text-gray-400">Building the future of conversational AI</div>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-gray-400">© 2024 Neuralia. All rights reserved.</p>
            <div className="mt-4 lg:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
