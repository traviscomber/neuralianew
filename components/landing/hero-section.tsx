import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build AI Agents That
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Transform Business
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Neuralia's fullstack ecosystem empowers you to create, deploy, and scale intelligent AI agents. Copiloted by
            AI, powered by innovation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Bot className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-600">AI Agents Deployed</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
