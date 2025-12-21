"use client"
import { CheckCircle } from "lucide-react"

const WhyChooseNeuraliaSection = () => {
  const features = [
    {
      title: "Personalized Approach",
      description: "Tailored AI solutions designed to fit your business needs.",
    },
    {
      title: "Cutting-Edge Technology",
      description: "Leveraging the latest advancements in artificial intelligence.",
    },
    {
      title: "Experienced Team",
      description: "Experts in AI, data science, and software engineering.",
    },
    {
      title: "Measurable Results",
      description: "Data-driven outcomes with clear metrics and ROI.",
    },
    {
      title: "Seamless Integration",
      description: "Effortless implementation with existing systems.",
    },
    {
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and updates.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose N3uralia?</h2>
          <p className="text-lg text-gray-600">
            We provide expert-driven solutions to address all your AI needs with quantifiable impacts and continuous
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseNeuraliaSection
