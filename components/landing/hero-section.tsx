import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build AI Agents That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Actually Work
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Neuralia's fullstack ecosystem lets you create, deploy, and manage AI agents with unprecedented ease. From
            simple chatbots to complex business automation - all powered by cutting-edge AI technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                500+ Active Agents
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Deployed across industries, handling millions of interactions daily
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                  <Users className="h-6 w-6 text-white" />
                </div>
                10,000+ Users
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Developers and businesses trust our platform worldwide
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                99.9% Uptime
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Enterprise-grade reliability you can count on</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
