import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Zap, Clock, Building2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"

export const metadata: Metadata = {
  title: "Blackswan Facility Core Case Study | N3uralia - Luxury Property Management System",
  description:
    "How Blackswan Facility Core transformed fragmented operations into unified management. Email + Sheets + WhatsApp → BFCS integration. Projecting 80% operational efficiency gain.",
  keywords:
    "blackswan, facility management, property management, luxury rentals, N3uralia, fullstack development, operational automation, case study",
  alternates: {
    canonical: "https://n3uralia.com/en/case-studies/blackswan-facility-core",
    languages: {
      es: "https://n3uralia.com/es/case-studies/blackswan-facility-core",
      "en-US": "https://n3uralia.com/en/case-studies/blackswan-facility-core",
    },
  },
  openGraph: {
    title: "Blackswan Facility Core: Enterprise Property Management Platform",
    description: "From email chaos to unified operations. Luxury facility management built on N3uralia architecture.",
    type: "article",
    locale: "en_US",
  },
}

export default function BlackswanCaseStudy() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <SectionBackground section="hero" className="border-b border-border">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                Property Management + Fullstack
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Enterprise Facility Management Unified
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Blackswan moved from fragmented systems to integrated operations. Email + Google Sheets + WhatsApp → BFCS platform. Early wins: 40% operational time savings observed.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Industry</p>
                <p className="font-semibold text-foreground">Luxury Properties</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Development</p>
                <p className="font-semibold text-foreground">60 days</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-semibold text-foreground">Live + Growing</p>
              </div>
            </div>

            <Link
              href="/en/case-studies"
              className="text-primary hover:underline font-semibold flex items-center gap-2"
            >
              ← Back to Case Studies
            </Link>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">The Challenge</h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Blackswan manages luxury properties across multiple locations. Before BFCS, operations were fragmented across 4+ systems: Email for inquiries, Google Sheets for availability, WhatsApp for guest communication, separate tools for maintenance and billing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">200+ Hours/Month</h3>
                  <p className="text-muted-foreground text-sm">
                    Staff spent time on duplicate data entry, manual coordination, and context switching
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Multiple Properties</h3>
                  <p className="text-muted-foreground text-sm">
                    Managing 8+ properties with disconnected systems meant no unified view
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Slow Response</h3>
                  <p className="text-muted-foreground text-sm">
                    Guest inquiries took 4-8 hours to answer. Booking delays = lost revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">The Solution</h2>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                N3uralia built Blackswan Facility Core (BFCS) from the ground up: a unified platform combining inquiry management, availability coordination, guest communication, maintenance tracking, and billing. Single source of truth. All systems talking.
              </p>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h3 className="font-semibold text-foreground mb-6">Technical Architecture</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">1</span>
                    <div>
                      <p className="font-semibold text-foreground">Unified Database</p>
                      <p className="text-sm text-muted-foreground">Single source of truth: properties, guests, bookings, staff, transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">2</span>
                    <div>
                      <p className="font-semibold text-foreground">Inquiry & Booking Engine</p>
                      <p className="text-sm text-muted-foreground">Automated routing: emails → BFCS → staff workflow. Real-time availability sync.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">3</span>
                    <div>
                      <p className="font-semibold text-foreground">Guest Communication Hub</p>
                      <p className="text-sm text-muted-foreground">WhatsApp + Email unified. One place to manage all guest touchpoints.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">4</span>
                    <div>
                      <p className="font-semibold text-foreground">Operations Dashboard</p>
                      <p className="text-sm text-muted-foreground">Real-time view of all properties: occupancy, maintenance, staff assignments, revenue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">5</span>
                    <div>
                      <p className="font-semibold text-foreground">Agentic Orchestration</p>
                      <p className="text-sm text-muted-foreground">N3uralia agents handle routine tasks: check-in reminders, maintenance requests, billing cycles.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
                <p className="font-mono text-sm text-foreground">
                  React Frontend → Node.js/Express Backend → PostgreSQL DB → N3uralia Orchestration → Multiple Channel Integrations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Impact & Early Wins</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Operational Efficiency</p>
                <p className="text-2xl font-bold text-foreground">-40%</p>
                <p className="text-xs text-muted-foreground mt-2">Time spent on manual coordination (early measurement)</p>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Response Time</p>
                <p className="text-2xl font-bold text-foreground">4h → 15min</p>
                <p className="text-xs text-muted-foreground mt-2">Guest inquiry to response time reduced</p>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Data Accuracy</p>
                <p className="text-2xl font-bold text-foreground">99.9%</p>
                <p className="text-xs text-muted-foreground mt-2">Single source of truth eliminates errors</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Projected Full Impact (3-6 months)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>80% operational time savings:</strong> fewer manual tasks, more automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>3x faster bookings:</strong> from inquiry to confirmation in minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>Revenue increase:</strong> faster responses + better availability = more bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>Scalability:</strong> 8 properties today, 20+ properties tomorrow with same team</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Learnings</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">1. Fragmentation = Hidden Cost</h3>
                <p className="text-muted-foreground">
                  Blackswan didn't realize how much time was wasted on context switching and duplicate data entry. A unified system exposed inefficiencies and eliminated them automatically.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">2. Build vs. Cobble: Strategic Difference</h3>
                <p className="text-muted-foreground">
                  Instead of connecting 4 separate tools (each with limitations), N3uralia built BFCS as a cohesive system. This allowed for intelligent features (agentic automation) that wouldn't work across fragmented platforms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">3. Agents Enable Scale Without Growth</h3>
                <p className="text-muted-foreground">
                  Before BFCS, managing 8 properties required 2-3 staff. With agents handling routine tasks (reminders, check-in scheduling, billing), Blackswan can scale to 15+ properties with the same team.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">4. Live System = Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  BFCS is live and growing. Every booking, every guest interaction, every operation feeds back into the system. N3uralia's agents learn what works and continuously optimize.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 px-4 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Technical Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Core Modules</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Property Management Hub</li>
                  <li>✓ Booking & Inquiry Engine</li>
                  <li>✓ Guest Communication (WhatsApp + Email)</li>
                  <li>✓ Maintenance Tracking</li>
                  <li>✓ Billing & Revenue</li>
                  <li>✓ Staff Scheduling & Tasks</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Infrastructure</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Uptime: 99.9%</li>
                  <li>✓ Response time: &lt;200ms</li>
                  <li>✓ Concurrent users: 50+</li>
                  <li>✓ Data backup: hourly</li>
                  <li>✓ Monitoring: real-time alerts</li>
                  <li>✓ Scalability: horizontally scaled</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Facing Similar Operational Chaos?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Multiple systems, manual coordination, wasted time. N3uralia builds unified platforms that scale with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/en/capabilities"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>
        </section>
        </SectionBackground>

      </main>

      <Footer />
    </>
  )
}
