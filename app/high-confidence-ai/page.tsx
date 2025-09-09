import type { Metadata } from "next"
import { HighConfidenceAIPanel } from "@/components/monitoring/high-confidence-ai-panel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Award, Brain, Sparkles, Target, Shield, Zap, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "High-Confidence AI Recommendations | N3uralia",
  description:
    "Premium AI-powered threshold recommendations with 90%+ confidence scores for optimal performance monitoring",
}

export default function HighConfidenceAIPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-gold-600" />
          <h1 className="text-3xl font-bold">High-Confidence AI Recommendations</h1>
          <Badge className="bg-gold-100 text-gold-800 border-gold-200">90%+ Confidence</Badge>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Premium AI-powered threshold recommendations with exceptional accuracy and reliability for optimal performance
          monitoring
        </p>
      </div>

      {/* Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-gold-200 bg-gold-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Award className="w-5 h-5 text-gold-600" />
              Premium Quality
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gold-700">
              Only recommendations with 90%+ confidence scores, ensuring maximum reliability and minimal false
              positives.
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Brain className="w-5 h-5 text-blue-600" />
              Smart Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700">
              Advanced AI algorithms analyze performance patterns, business context, and technical infrastructure.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="w-5 h-5 text-green-600" />
              Optimal Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-green-700">
              AI-calculated optimal performance targets tailored to your specific environment and requirements.
            </p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Zap className="w-5 h-5 text-purple-600" />
              Auto-Apply
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-700">
              One-click application of multiple high-confidence recommendations for instant optimization.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            How High-Confidence AI Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold">1. Data Analysis</h3>
              <p className="text-sm text-muted-foreground">
                AI analyzes your performance data, identifying patterns, trends, and optimization opportunities with
                advanced algorithms.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold">2. Confidence Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Each recommendation receives a confidence score based on data quality, pattern strength, and historical
                accuracy.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold">3. Premium Selection</h3>
              <p className="text-sm text-muted-foreground">
                Only recommendations with 90%+ confidence are presented, ensuring exceptional quality and reliability.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            Benefits of High-Confidence AI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-800">For Your Business</h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Reduced false positives and alert fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Improved system reliability and uptime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Better user experience and performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Faster issue detection and resolution</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-800">For Your Team</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Time savings through automated optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Data-driven decision making</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Consistent monitoring standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Reduced manual threshold tuning</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notice */}
      <Alert className="border-blue-200 bg-blue-50">
        <Brain className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <div className="space-y-2">
            <div className="font-medium">AI Learning Requirements</div>
            <div className="text-sm">
              High-confidence recommendations require sufficient performance data for accurate analysis. The AI system
              works best with:
            </div>
            <ul className="text-sm list-disc list-inside space-y-1 ml-4">
              <li>At least 50+ logo loading samples for good recommendations</li>
              <li>100+ samples for excellent AI accuracy</li>
              <li>24-48 hours of monitoring data for pattern recognition</li>
              <li>Diverse usage scenarios and performance conditions</li>
            </ul>
          </div>
        </AlertDescription>
      </Alert>

      {/* Main Panel */}
      <HighConfidenceAIPanel />
    </div>
  )
}
