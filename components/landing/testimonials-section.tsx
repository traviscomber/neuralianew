"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how companies are transforming their operations with AI executives that actually deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Our AI executive reduced customer acquisition costs by 40% while increasing conversion rates. It's like
                having a seasoned marketing director working 24/7."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SJ</span>
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The AI executive identified market opportunities we completely missed. It's strategic thinking at a
                level that rivals our best human executives."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">MC</span>
                </div>
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">CTO, DataFlow Solutions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Finally, an AI solution that understands business context. Our AI executive manages our entire sales
                pipeline and consistently exceeds targets."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">ER</span>
                </div>
                <div>
                  <p className="font-semibold">Emily Rodriguez</p>
                  <p className="text-sm text-muted-foreground">VP Sales, InnovateCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The ROI was immediate. Our AI executive optimized our operations and reduced costs by 30% in the first
                quarter alone."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">DK</span>
                </div>
                <div>
                  <p className="font-semibold">David Kim</p>
                  <p className="text-sm text-muted-foreground">COO, ScaleUp Ventures</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Integration was seamless and the AI executive started delivering value from day one. It's transformed
                how we approach strategic planning."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">AL</span>
                </div>
                <div>
                  <p className="font-semibold">Anna Liu</p>
                  <p className="text-sm text-muted-foreground">Head of Strategy, FutureTech</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 relative">
            <CardContent className="p-8">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "The level of strategic insight is remarkable. Our AI executive identified new revenue streams that
                increased our quarterly earnings by 25%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">RT</span>
                </div>
                <div>
                  <p className="font-semibold">Robert Taylor</p>
                  <p className="text-sm text-muted-foreground">CFO, GrowthCorp</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
