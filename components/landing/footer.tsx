"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Neuralia
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Deploy AI executives that think, decide, and execute like your best team members. Built for developers who
              demand more than chatbots.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <p className="text-muted-foreground">Get the latest updates on AI executive capabilities and features.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-sm">
              <Input placeholder="Enter your email" className="rounded-r-none" />
              <Button className="rounded-l-none">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Neuralia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
