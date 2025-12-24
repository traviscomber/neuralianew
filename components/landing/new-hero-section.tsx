"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"

export function NewHeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-20">
      <div className="absolute inset-0 -z-10">
        {/* Navy gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-slate-950" />

        {/* Animated emerald glow - top right */}
        <div
          className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-accent/40 via-accent/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />

        {/* Animated gold accent - bottom left */}
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-tertiary/30 via-tertiary/5 to-transparent rounded-full blur-3xl"
          style={{ animation: "float 10s ease-in-out infinite 2s" }}
        />

        {/* Grid pattern subtle */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:50px_50px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-slate-200">{t("hero.badge")}</span>
            </div>

            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-white">{t("hero.title").split(" ").slice(0, 2).join(" ")}</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-emerald-300 to-accent bg-clip-text text-transparent">
                {t("hero.title").split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">{t("hero.subtitle")}</p>

            <div className="flex flex-col gap-4 mb-12">
              {[
                { icon: Shield, text: t("hero.benefit1") },
                { icon: Zap, text: t("hero.benefit2") },
                { icon: Cpu, text: t("hero.benefit3") },
              ].map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div key={i} className="flex items-center gap-3 text-slate-200">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="px-8 bg-accent hover:bg-emerald-500 text-slate-950 font-semibold rounded-full gap-2 shadow-lg hover:shadow-emerald-500/30 transition-all"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-slate-700 text-slate-200 hover:bg-slate-800/50 hover:border-slate-600 rounded-full font-semibold transition-all backdrop-blur-sm bg-transparent"
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Code Panel */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Glow effect behind panel */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-tertiary/20 rounded-xl blur-2xl opacity-50" />

              {/* Code Panel */}
              <div className="relative bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-700 bg-slate-900/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">N3uralia.system</span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-4">
                    {/* Line 1 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600 w-6 text-right">1</span>
                      <div>
                        <span className="text-tertiary">const</span>
                        <span className="text-slate-200"> orchestration = </span>
                        <span className="text-emerald-400">"AI Simplified"</span>
                      </div>
                    </div>

                    {/* Line 2 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600 w-6 text-right">2</span>
                      <div>
                        <span className="text-tertiary">const</span>
                        <span className="text-slate-200"> agents = </span>
                        <span className="text-tertiary">[</span>
                      </div>
                    </div>

                    {/* Line 3 */}
                    <div className="flex gap-4 pl-8">
                      <span className="text-slate-600 w-6 text-right">3</span>
                      <div>
                        <span className="text-emerald-400">"Conversational"</span>
                        <span className="text-slate-400">,</span>
                      </div>
                    </div>

                    {/* Line 4 */}
                    <div className="flex gap-4 pl-8">
                      <span className="text-slate-600 w-6 text-right">4</span>
                      <div>
                        <span className="text-emerald-400">"Autonomous"</span>
                        <span className="text-slate-400">,</span>
                      </div>
                    </div>

                    {/* Line 5 */}
                    <div className="flex gap-4 pl-8">
                      <span className="text-slate-600 w-6 text-right">5</span>
                      <div>
                        <span className="text-emerald-400">"Predictive"</span>
                      </div>
                    </div>

                    {/* Line 6 */}
                    <div className="flex gap-4">
                      <span className="text-slate-600 w-6 text-right">6</span>
                      <span className="text-tertiary">]</span>
                    </div>

                    {/* Line 7 */}
                    <div className="flex gap-4 pt-2">
                      <span className="text-slate-400">{">"}</span>
                      <span className="w-2 h-5 bg-accent animate-pulse" />
                    </div>
                  </div>

                  {/* Cursor blink */}
                  <div className="mt-4 flex gap-2">
                    <span className="text-slate-400">{">"}</span>
                    <span className="w-2 h-5 bg-accent animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -bottom-12 -left-12 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-lg p-4 shadow-2xl">
                <div className="text-tertiary text-2xl font-bold">500+</div>
                <div className="text-slate-300 text-xs">{t("hero.badge")}</div>
              </div>

              <div className="absolute -top-6 -right-12 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-lg p-4 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-slate-200 text-sm font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
        
        @keyframes grid {
          0% { opacity: 0.03; }
          50% { opacity: 0.08; }
          100% { opacity: 0.03; }
        }

        .bg-grid-slate-900 {
          background-image: linear-gradient(rgba(15, 23, 42, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.4) 1px, transparent 1px);
        }

        .bg-gradient-radial {
          background-image: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}
