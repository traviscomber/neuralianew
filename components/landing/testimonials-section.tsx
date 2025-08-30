import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow",
      avatar: "/placeholder-user.jpg",
      content:
        "Neuralia AI executives reduced our operational overhead by 75%. They handle complex decisions I used to spend hours on.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, GrowthLabs",
      avatar: "/placeholder-user.jpg",
      content:
        "The strategic thinking capability is incredible. Our AI executive identified market opportunities we completely missed.",
    },
    {
      name: "Emily Watson",
      role: "VP Operations, ScaleUp",
      avatar: "/placeholder-user.jpg",
      content:
        "Finally, AI that actually understands business context. It's like having a senior executive available 24/7.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Forward-Thinking Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how executives are transforming their operations with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
