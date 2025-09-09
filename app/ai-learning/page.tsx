"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Brain,
  TrendingUp,
  Award,
  Users,
  Zap,
  Target,
  Lightbulb,
  Activity,
  BarChart3,
  Eye,
  Sparkles,
  Rocket,
  Shield,
  Clock,
  Globe,
} from "lucide-react"
import { AILearningDashboard } from "@/components/monitoring/ai-learning-dashboard"

export default function AILearningPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-10 h-10 text-blue-600" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Learning Intelligence
          </h1>
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Experience the future of performance monitoring with self-improving AI that learns from every interaction,
          continuously enhancing its recommendations and adapting to your unique environment.
        </p>
      </div>

      {/* AI Learning Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-full">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-700">Self-Learning</div>
                <div className="text-sm text-blue-600">Continuous Improvement</div>
              </div>
            </div>
            <p className="text-sm text-blue-700 mt-3">
              AI models automatically improve accuracy and effectiveness through continuous learning from real-world
              outcomes.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-600 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-700">Adaptive</div>
                <div className="text-sm text-green-600">Pattern Recognition</div>
              </div>
            </div>
            <p className="text-sm text-green-700 mt-3">
              Recognizes and adapts to your specific performance patterns, seasonal trends, and business requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-600 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-700">Personalized</div>
                <div className="text-sm text-purple-600">Custom Insights</div>
              </div>
            </div>
            <p className="text-sm text-purple-700 mt-3">
              Delivers increasingly personalized recommendations tailored to your specific infrastructure and usage
              patterns.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-red-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-600 rounded-full">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-700">Proactive</div>
                <div className="text-sm text-orange-600">Predictive Alerts</div>
              </div>
            </div>
            <p className="text-sm text-orange-700 mt-3">
              Predicts and prevents issues before they impact users through advanced pattern analysis and forecasting.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Learning Process Visualization */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Activity className="w-6 h-6 text-blue-600" />
            How AI Learning Works
          </CardTitle>
          <p className="text-muted-foreground">
            Understanding the continuous learning cycle that powers intelligent recommendations
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">1. Data Collection</h3>
              <p className="text-sm text-muted-foreground">
                Continuously monitors recommendation outcomes, user feedback, and system performance metrics.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">2. Pattern Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms identify patterns, correlations, and trends in the collected data.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">3. Model Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Machine learning models are automatically updated and optimized based on new insights.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Rocket className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold">4. Enhanced Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Improved models generate more accurate and relevant recommendations for your environment.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold">Continuous Learning Cycle</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This process runs continuously in the background, ensuring that your AI assistant becomes smarter and more
              effective with every interaction. The more you use the system, the better it becomes at understanding your
              specific needs and environment.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 font-medium">Learning Active</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            Advanced Learning Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">Performance Tracking</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Tracks model accuracy, precision, recall, and F1 scores to ensure optimal performance across all AI
                components.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold">Feedback Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Incorporates user feedback and implementation outcomes to refine recommendation algorithms and improve
                accuracy.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-purple-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Temporal Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Analyzes time-based patterns to optimize recommendations for different periods, seasons, and business
                cycles.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-orange-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold">Risk Assessment</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Continuously evaluates and minimizes risks associated with recommendations to prevent alert fatigue and
                system issues.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-red-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold">Context Awareness</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Considers environmental factors like system load, geographic distribution, and business context for
                better recommendations.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-yellow-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-600" />
                <h3 className="font-semibold">Real-time Adaptation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Adapts recommendations in real-time based on current system performance and changing conditions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard */}
      <AILearningDashboard />

      {/* Benefits Summary */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Award className="w-5 h-5 text-indigo-600" />
            Why AI Learning Matters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-900">For Performance Optimization</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Continuous Improvement:</span> Models get more accurate over time,
                    leading to better performance optimization
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Precision Tuning:</span> Thresholds become increasingly precise,
                    reducing false positives
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Proactive Insights:</span> Predictive capabilities improve, enabling
                    proactive issue prevention
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-900">For Operational Excellence</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Reduced Manual Work:</span> Automated optimization reduces the need
                    for manual threshold tuning
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Risk Mitigation:</span> Learning from past outcomes helps avoid
                    problematic configurations
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="font-medium">Faster Response:</span> Improved accuracy leads to faster issue
                    identification and resolution
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="text-center space-y-4">
            <h3 className="font-semibold text-indigo-900">Experience the Future of Intelligent Monitoring</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join the next generation of performance monitoring with AI that learns, adapts, and continuously improves
              to provide the most relevant and effective recommendations for your unique environment.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Brain className="w-4 h-4 mr-2" />
                Explore AI Learning
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/ai-suggestions")}>
                <Sparkles className="w-4 h-4 mr-2" />
                View AI Suggestions
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
