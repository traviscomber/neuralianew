import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your first AI agent?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Join thousands of developers and businesses already building with Neuralia.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  AI Agent Builder
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Developers</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  SDKs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="flex items-center space-x-6">
              <div className="text-xl font-bold text-white">Neuralia</div>
              <p className="text-sm text-gray-400">© 2024 Neuralia. All rights reserved.</p>
            </div>

            <div className="mt-6 flex space-x-6 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">Privacy Policy • Terms of Service • Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
