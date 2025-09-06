"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function LogoTestPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Component */}
      <Navigation />

      {/* Test Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Logo Responsiveness Test</h1>
            <p className="text-xl text-slate-600">Testing the N3uralia logo across different screen sizes</p>
          </div>

          {/* Screen Size Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">Mobile</Badge>
              <div className="text-sm text-slate-600">
                <div className="block sm:hidden">
                  <div className="text-green-600 font-semibold">✓ Active</div>
                  <div>Logo: 48x48px</div>
                </div>
                <div className="hidden sm:block text-slate-400">Not active</div>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">Tablet</Badge>
              <div className="text-sm text-slate-600">
                <div className="hidden sm:block md:hidden">
                  <div className="text-green-600 font-semibold">✓ Active</div>
                  <div>Logo: 64x64px</div>
                </div>
                <div className="block sm:hidden md:block text-slate-400">Not active</div>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Desktop</Badge>
              <div className="text-sm text-slate-600">
                <div className="hidden md:block lg:hidden">
                  <div className="text-green-600 font-semibold">✓ Active</div>
                  <div>Logo: 64x64px</div>
                </div>
                <div className="block md:hidden lg:block text-slate-400">Not active</div>
              </div>
            </Card>

            <Card className="p-6 text-center">
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">Large Desktop</Badge>
              <div className="text-sm text-slate-600">
                <div className="hidden lg:block">
                  <div className="text-green-600 font-semibold">✓ Active</div>
                  <div>Logo: 64x64px</div>
                </div>
                <div className="block lg:hidden text-slate-400">Not active</div>
              </div>
            </Card>
          </div>

          {/* Logo Size Comparison */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Logo Size Comparison</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="relative w-8 h-8 mx-auto mb-2">
                  <Image src="/n3uralia-logo-new.png" alt="32px Logo" fill className="object-contain" />
                </div>
                <div className="text-sm text-slate-600">32x32px</div>
                <div className="text-xs text-slate-400">Too Small</div>
              </div>

              <div className="text-center">
                <div className="relative w-12 h-12 mx-auto mb-2">
                  <Image src="/n3uralia-logo-new.png" alt="48px Logo" fill className="object-contain" />
                </div>
                <div className="text-sm text-slate-600">48x48px</div>
                <div className="text-xs text-green-600 font-semibold">Mobile ✓</div>
              </div>

              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <Image src="/n3uralia-logo-new.png" alt="64px Logo" fill className="object-contain" />
                </div>
                <div className="text-sm text-slate-600">64x64px</div>
                <div className="text-xs text-green-600 font-semibold">Desktop ✓</div>
              </div>

              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <Image src="/n3uralia-logo-new.png" alt="80px Logo" fill className="object-contain" />
                </div>
                <div className="text-sm text-slate-600">80x80px</div>
                <div className="text-xs text-slate-400">Too Large</div>
              </div>
            </div>
          </Card>

          {/* Navigation Bar Mockups */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Navigation Bar Mockups</h2>

            {/* Mobile Mockup */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Mobile View</h3>
              <div className="bg-white border border-slate-200 rounded-lg p-4 max-w-sm mx-auto">
                <div className="flex items-center justify-between">
                  <div className="relative w-12 h-12">
                    <Image src="/n3uralia-logo-new.png" alt="Mobile Logo" fill className="object-contain" />
                  </div>
                  <div className="w-6 h-6 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>

            {/* Desktop Mockup */}
            <div>
              <h3 className="text-lg font-semibold text-slate-700 mb-4">Desktop View</h3>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="relative w-16 h-16">
                    <Image src="/n3uralia-logo-new.png" alt="Desktop Logo" fill className="object-contain" />
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="w-16 h-4 bg-slate-200 rounded"></div>
                    <div className="w-20 h-4 bg-slate-200 rounded"></div>
                    <div className="w-12 h-4 bg-slate-200 rounded"></div>
                    <div className="w-16 h-4 bg-slate-200 rounded"></div>
                    <div className="w-24 h-8 bg-slate-900 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Visual Balance Test */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Visual Balance Assessment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Logo Visibility</h3>
                <p className="text-sm text-slate-600">Logo is clearly visible and recognizable at all screen sizes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Navigation Balance</h3>
                <p className="text-sm text-slate-600">
                  Logo doesn't overwhelm navigation elements or create layout issues
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Touch Targets</h3>
                <p className="text-sm text-slate-600">
                  Logo maintains appropriate touch target size for mobile interaction
                </p>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Recommendations</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Current Size is Optimal</h3>
                  <p className="text-slate-600">
                    64x64px for desktop and 48x48px for mobile provides excellent visibility without overwhelming the
                    navigation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Clean Branding</h3>
                  <p className="text-slate-600">
                    Removing the text and keeping only the logo creates a cleaner, more professional appearance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Responsive Design</h3>
                  <p className="text-slate-600">
                    The logo scales appropriately across all breakpoints while maintaining visual hierarchy
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
