"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, MessageCircle, Crown, TrendingUp, Zap, Network, Minimize2, Maximize2, Lightbulb } from "lucide-react"

interface Agent {
  id: string
  name: string
  role: string
  description: string
  icon: React.ReactNode
  color: string
  responses: {
    greeting: string
    capabilities: string[]
    sampleQuestions: string[]
  }
}

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  type?: "greeting" | "response" | "suggestion"
}

interface ChatWidgetProps {
  agent: Agent | null
  isOpen: boolean
  onClose: () => void
  maxQuestions?: number
}

const getDirectorResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase()

  // Coordination and orchestration responses
  if (lowerQuestion.includes("coordinate") || lowerQuestion.includes("orchestrat")) {
    return `🧠 **NEURAL DIRECTOR READY FOR COORDINATION**

I'll coordinate our executive team to address this comprehensively:

**🎯 EXECUTIVE DELEGATION:**
• **CEO**: Strategic framework and leadership oversight
• **CMO**: Customer impact and market positioning  
• **CTO**: Technical architecture and implementation

**📋 COORDINATION PLAN:**
1. **Strategic Alignment** - CEO establishes vision and priorities
2. **Market Integration** - CMO ensures customer-centric approach
3. **Technical Execution** - CTO provides scalable solutions
4. **Unified Delivery** - I synthesize all perspectives for optimal results

**⚡ NEXT STEPS:**
Would you like me to dive deeper into any specific executive's perspective, or shall I provide the complete coordinated strategy across all three domains?

*The power of Neural Director lies in seamless executive orchestration.*`
  }

  // Digital transformation responses
  if (lowerQuestion.includes("digital") && lowerQuestion.includes("transformation")) {
    return `🚀 **COORDINATED DIGITAL TRANSFORMATION STRATEGY**

**NEURAL DIRECTOR ORCHESTRATION:**

**👑 CEO STRATEGIC FRAMEWORK:**
• Change management and organizational readiness
• Investment prioritization and ROI planning
• Stakeholder alignment and communication strategy
• Risk assessment and mitigation planning

**📈 CMO CUSTOMER EXPERIENCE:**
• Omnichannel customer journey mapping
• Digital touchpoint optimization
• Brand positioning in digital landscape
• Customer adoption and engagement strategies

**⚡ CTO TECHNICAL ARCHITECTURE:**
• Legacy system modernization roadmap
• Cloud infrastructure and scalability planning
• Data integration and analytics platform
• Cybersecurity and compliance framework

**🎯 UNIFIED EXECUTION PLAN:**
1. **Phase 1**: Foundation (CEO leads organizational prep, CTO establishes infrastructure)
2. **Phase 2**: Integration (CMO launches customer experience, CTO deploys systems)
3. **Phase 3**: Optimization (All executives collaborate on performance tuning)

**📊 SUCCESS METRICS:**
• 40% faster implementation through coordination
• 95% cross-functional alignment
• $2.3M cost savings through unified approach

Ready to dive deeper into any specific phase or executive perspective?`
  }

  // Market expansion responses
  if (lowerQuestion.includes("market") && lowerQuestion.includes("expansion")) {
    return `🌍 **COORDINATED MARKET EXPANSION STRATEGY**

**NEURAL DIRECTOR ORCHESTRATION:**

**👑 CEO STRATEGIC LEADERSHIP:**
• Market opportunity analysis and prioritization
• Competitive positioning and differentiation
• Partnership and acquisition strategies
• Resource allocation and investment planning

**📈 CMO MARKET PENETRATION:**
• Local market research and customer insights
• Brand localization and messaging strategy
• Channel partner identification and development
• Marketing campaign planning and execution

**⚡ CTO TECHNICAL ENABLEMENT:**
• Infrastructure scaling for new markets
• Localization and compliance requirements
• Integration with local systems and partners
• Performance monitoring and optimization

**🎯 COORDINATED EXECUTION:**
1. **Market Assessment** - CEO analyzes opportunities, CMO researches customers, CTO evaluates technical requirements
2. **Entry Strategy** - CEO finalizes approach, CMO develops go-to-market, CTO prepares infrastructure
3. **Launch Coordination** - All executives execute synchronized market entry
4. **Optimization** - Continuous improvement based on unified feedback

**📊 PROJECTED OUTCOMES:**
• 60% faster market entry through coordination
• 85% higher success rate with unified approach
• $12M revenue potential in first year

Which market or executive perspective would you like me to elaborate on?`
  }

  // Crisis management responses
  if (lowerQuestion.includes("crisis") || lowerQuestion.includes("emergency")) {
    return `🛡️ **UNIFIED CRISIS MANAGEMENT PROTOCOL**

**NEURAL DIRECTOR EMERGENCY COORDINATION:**

**👑 CEO CRISIS LEADERSHIP:**
• Stakeholder communication and transparency
• Strategic decision-making under pressure
• Resource reallocation and cost management
• Leadership team coordination and morale

**📈 CMO BRAND PROTECTION:**
• Crisis communication and messaging
• Customer retention and loyalty programs
• Reputation management and PR strategy
• Market perception monitoring and response

**⚡ CTO OPERATIONAL CONTINUITY:**
• System stability and disaster recovery
• Remote work infrastructure scaling
• Data security and compliance maintenance
• Technology-enabled business continuity

**🎯 INTEGRATED RESPONSE PLAN:**
1. **Immediate Response** (0-24 hours) - CEO leads crisis team, CMO manages communications, CTO ensures systems
2. **Stabilization** (1-7 days) - Coordinated damage control and immediate fixes
3. **Recovery** (1-4 weeks) - Unified strategy for business restoration
4. **Strengthening** (1-6 months) - Building resilience for future challenges

**📊 CRISIS METRICS:**
• 75% faster crisis resolution through coordination
• 60% reduction in reputation damage
• 40% better stakeholder confidence retention

What specific crisis scenario would you like me to address with our coordinated approach?`
  }

  // Product launch responses
  if (lowerQuestion.includes("product") && lowerQuestion.includes("launch")) {
    return `🚀 **COORDINATED PRODUCT LAUNCH STRATEGY**

**NEURAL DIRECTOR LAUNCH ORCHESTRATION:**

**👑 CEO STRATEGIC OVERSIGHT:**
• Launch timeline and milestone management
• Cross-functional team coordination
• Investor and stakeholder communication
• Success metrics and KPI definition

**📈 CMO MARKET ACTIVATION:**
• Go-to-market strategy and positioning
• Customer segmentation and targeting
• Marketing campaign development and execution
• Sales enablement and channel preparation

**⚡ CTO TECHNICAL DELIVERY:**
• Product development and quality assurance
• Infrastructure scaling and performance optimization
• Integration and compatibility testing
• Post-launch monitoring and support systems

**🎯 SYNCHRONIZED LAUNCH PHASES:**
1. **Pre-Launch** (8-12 weeks) - CEO sets strategy, CMO builds awareness, CTO finalizes product
2. **Launch Preparation** (2-4 weeks) - Coordinated final preparations across all functions
3. **Launch Execution** (Launch week) - Unified go-live with all executives coordinating
4. **Post-Launch** (4-8 weeks) - Coordinated optimization and scaling

**📊 LAUNCH SUCCESS METRICS:**
• 90% on-time delivery through coordination
• 150% higher adoption rates with unified approach
• 45% faster time-to-market optimization

Which aspect of the product launch would you like me to coordinate in more detail?`
  }

  // Competitive analysis responses
  if (lowerQuestion.includes("competitive") || lowerQuestion.includes("competitor")) {
    return `🎯 **COMPREHENSIVE COMPETITIVE ANALYSIS**

**NEURAL DIRECTOR INTELLIGENCE COORDINATION:**

**👑 CEO STRATEGIC INTELLIGENCE:**
• Competitive landscape mapping and positioning
• Strategic threat assessment and opportunities
• Market share analysis and growth potential
• Merger & acquisition implications

**📈 CMO MARKET INTELLIGENCE:**
• Competitor marketing strategies and messaging
• Customer perception and brand comparison
• Pricing strategies and value proposition analysis
• Channel and partnership competitive dynamics

**⚡ CTO TECHNICAL BENCHMARKING:**
• Technology stack and capability comparison
• Innovation pipeline and R&D investments
• Technical performance and scalability analysis
• Cybersecurity and compliance positioning

**🎯 INTEGRATED ANALYSIS FRAMEWORK:**
1. **Data Collection** - Each executive gathers domain-specific intelligence
2. **Analysis Synthesis** - I coordinate cross-functional insights
3. **Strategic Implications** - Unified assessment of competitive threats/opportunities
4. **Action Planning** - Coordinated response strategy across all functions

**📊 COMPETITIVE ADVANTAGES:**
• 360-degree competitive view through multi-executive analysis
• 70% more accurate threat assessment
• 85% faster competitive response time

What specific competitor or competitive aspect would you like our coordinated analysis to focus on?`
  }

  // Customer retention responses
  if (lowerQuestion.includes("customer") && lowerQuestion.includes("retention")) {
    return `💎 **UNIFIED CUSTOMER RETENTION STRATEGY**

**NEURAL DIRECTOR RETENTION ORCHESTRATION:**

**👑 CEO STRATEGIC RETENTION:**
• Customer lifetime value optimization
• Retention investment and ROI planning
• Executive customer relationship management
• Organizational culture focused on customer success

**📈 CMO CUSTOMER EXPERIENCE:**
• Customer journey optimization and personalization
• Loyalty program development and management
• Customer feedback systems and response protocols
• Brand experience and emotional connection building

**⚡ CTO TECHNICAL ENABLEMENT:**
• Customer data platform and analytics
• Predictive retention modeling and early warning systems
• Customer portal and self-service optimization
• Integration of customer touchpoints and systems

**🎯 COORDINATED RETENTION APPROACH:**
1. **Customer Intelligence** - CTO provides data, CMO analyzes behavior, CEO sets priorities
2. **Experience Optimization** - CMO leads experience design, CTO enables technology, CEO ensures resources
3. **Proactive Intervention** - Coordinated outreach and retention campaigns
4. **Continuous Improvement** - Unified feedback loop and optimization

**📊 RETENTION OUTCOMES:**
• 85% improvement in customer retention through coordination
• 120% increase in customer lifetime value
• 65% reduction in churn through proactive intervention

Which customer segment or retention challenge would you like me to address with our coordinated approach?`
  }

  // Default coordinated response
  return `🧠 **NEURAL DIRECTOR COORDINATION READY**

I'm analyzing your request and preparing a coordinated response from our executive team:

**🎯 EXECUTIVE COORDINATION APPROACH:**
• **CEO**: Strategic framework and leadership perspective
• **CMO**: Customer and market impact analysis  
• **CTO**: Technical implementation and innovation angle

**⚡ COORDINATION CAPABILITIES:**
• Multi-perspective strategic analysis
• Cross-functional solution development
• Unified execution planning
• Real-time executive collaboration

**📋 SUGGESTED COORDINATION AREAS:**
• Digital transformation initiatives
• Market expansion strategies
• Crisis management and recovery
• Product launch coordination
• Competitive analysis and response
• Customer retention optimization

Would you like me to coordinate a specific business challenge across all executives, or dive deeper into any particular area?

*Ask me to "coordinate" any business initiative for comprehensive executive collaboration.*`
}

const getCEOResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("strategy") || lowerQuestion.includes("strategic")) {
    return `👑 **CEO STRATEGIC PERSPECTIVE**

As your Chief Executive Officer, I'll provide strategic leadership on this matter:

**🎯 STRATEGIC FRAMEWORK:**
• Market positioning and competitive advantage
• Resource allocation and investment priorities
• Risk assessment and mitigation strategies
• Stakeholder alignment and communication

**📊 EXECUTIVE DECISION-MAKING:**
• Long-term vision and short-term execution balance
• Cross-functional coordination and accountability
• Performance metrics and success indicators
• Organizational capability development

**🚀 STRATEGIC RECOMMENDATIONS:**
Based on current market conditions and organizational capabilities, I recommend focusing on sustainable growth initiatives that align with our core competencies while building future market leadership.

Would you like me to dive deeper into any specific strategic area or discuss implementation planning?`
  }

  if (lowerQuestion.includes("market") || lowerQuestion.includes("expansion")) {
    return `🌍 **CEO MARKET EXPANSION STRATEGY**

**STRATEGIC MARKET ANALYSIS:**
• Total addressable market (TAM) assessment
• Competitive landscape and positioning opportunities
• Entry barriers and success factors
• Investment requirements and ROI projections

**🎯 EXPANSION FRAMEWORK:**
1. **Market Prioritization** - Data-driven market selection
2. **Entry Strategy** - Partnership vs. organic growth analysis
3. **Resource Allocation** - Investment and team deployment
4. **Success Metrics** - KPIs and milestone tracking

**📈 GROWTH OPPORTUNITIES:**
I see significant potential in adjacent markets where our core competencies provide competitive advantages. The key is strategic patience combined with decisive execution.

What specific markets or expansion strategies would you like me to analyze further?`
  }

  return `👑 **CEO EXECUTIVE GUIDANCE**

As your Chief Executive Officer, I'm here to provide strategic leadership and executive decision-making support.

**🎯 MY CORE CAPABILITIES:**
• Strategic planning and execution
• Market analysis and competitive intelligence
• Executive decision-making and risk assessment
• Organizational development and leadership

**📊 STRATEGIC FOCUS AREAS:**
• Long-term vision and strategic planning
• Market expansion and growth strategies
• Merger & acquisition opportunities
• Stakeholder management and investor relations

How can I help drive your business forward with strategic leadership and executive expertise?`
}

const getCMOResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("marketing") || lowerQuestion.includes("campaign")) {
    return `📈 **CMO MARKETING STRATEGY**

As your Chief Marketing Officer, I'll develop a comprehensive marketing approach:

**🎯 MARKETING FRAMEWORK:**
• Target audience segmentation and personas
• Brand positioning and messaging strategy
• Channel optimization and media planning
• Campaign development and execution

**📊 GROWTH MARKETING:**
• Customer acquisition cost (CAC) optimization
• Lifetime value (LTV) maximization
• Conversion funnel optimization
• Performance marketing and attribution

**🚀 CAMPAIGN RECOMMENDATIONS:**
Focus on integrated campaigns that combine digital and traditional channels, with emphasis on data-driven personalization and customer journey optimization.

What specific marketing challenge or opportunity would you like me to address?`
  }

  if (lowerQuestion.includes("brand") || lowerQuestion.includes("positioning")) {
    return `🎨 **CMO BRAND STRATEGY**

**BRAND POSITIONING FRAMEWORK:**
• Market differentiation and unique value proposition
• Brand personality and voice development
• Visual identity and brand experience design
• Brand architecture and portfolio strategy

**📈 BRAND BUILDING:**
• Brand awareness and recognition campaigns
• Customer perception and sentiment monitoring
• Brand equity measurement and optimization
• Competitive brand analysis and positioning

**🎯 POSITIONING STRATEGY:**
I recommend developing a distinctive brand position that resonates with your target audience while differentiating from competitors through authentic value delivery.

How can I help strengthen your brand position and market presence?`
  }

  return `📈 **CMO GROWTH EXPERTISE**

As your Chief Marketing Officer, I'm focused on driving growth through strategic marketing and customer acquisition.

**🎯 MY CORE CAPABILITIES:**
• Marketing strategy and campaign development
• Brand development and positioning
• Customer acquisition and retention
• Digital marketing and automation

**📊 GROWTH FOCUS AREAS:**
• Customer acquisition optimization
• Brand building and market positioning
• Marketing automation and personalization
• Performance analytics and ROI optimization

How can I help accelerate your growth through strategic marketing initiatives?`
}

const getCTOResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase()

  if (lowerQuestion.includes("technology") || lowerQuestion.includes("tech")) {
    return `⚡ **CTO TECHNOLOGY STRATEGY**

As your Chief Technology Officer, I'll provide technical leadership and innovation strategy:

**🔧 TECHNOLOGY FRAMEWORK:**
• System architecture and scalability planning
• Technology stack evaluation and optimization
• Innovation pipeline and R&D strategy
• Technical team building and development

**🛡️ TECHNICAL EXCELLENCE:**
• Cybersecurity and risk management
• Infrastructure optimization and cloud strategy
• Data architecture and analytics platform
• API design and integration strategy

**🚀 INNOVATION ROADMAP:**
Focus on scalable, secure, and innovative technology solutions that enable business growth while maintaining operational excellence and competitive advantage.

What specific technology challenge or innovation opportunity would you like me to address?`
  }

  if (lowerQuestion.includes("security") || lowerQuestion.includes("cybersecurity")) {
    return `🛡️ **CTO CYBERSECURITY STRATEGY**

**SECURITY FRAMEWORK:**
• Threat assessment and risk analysis
• Security architecture and defense systems
• Compliance and regulatory requirements
• Incident response and recovery planning

**🔒 SECURITY IMPLEMENTATION:**
• Zero-trust security model deployment
• Multi-factor authentication and access controls
• Data encryption and privacy protection
• Security monitoring and threat detection

**⚡ SECURITY RECOMMENDATIONS:**
Implement a comprehensive security strategy that balances protection with operational efficiency, focusing on proactive threat prevention and rapid incident response.

How can I help strengthen your cybersecurity posture and technical infrastructure?`
  }

  return `⚡ **CTO TECHNICAL LEADERSHIP**

As your Chief Technology Officer, I provide technical leadership and innovation strategy to transform your technology landscape.

**🔧 MY CORE CAPABILITIES:**
• Technology strategy and architecture
• Digital transformation initiatives
• Cybersecurity and compliance
• Innovation and emerging tech adoption

**🚀 TECHNICAL FOCUS AREAS:**
• System architecture and scalability
• Cloud infrastructure optimization
• Data strategy and analytics
• Technical team development

How can I help drive your technical innovation and digital transformation initiatives?`
}

export function ChatWidget({ agent, isOpen, onClose, maxQuestions = 10 }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (agent && isOpen) {
      // Reset state when opening with a new agent
      setMessages([
        {
          id: "greeting",
          content: agent.responses.greeting,
          sender: "agent",
          timestamp: new Date(),
          type: "greeting",
        },
      ])
      setQuestionCount(0)
      setInputValue("")
      setIsMinimized(false)
    }
  }, [agent, isOpen])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const handleSendMessage = () => {
    if (!inputValue.trim() || !agent || questionCount >= maxQuestions) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setQuestionCount((prev) => prev + 1)

    // Generate agent response based on agent type
    let agentResponse = ""
    if (agent.id === "orchestrator") {
      agentResponse = getDirectorResponse(inputValue)
    } else if (agent.id === "ceo") {
      agentResponse = getCEOResponse(inputValue)
    } else if (agent.id === "cmo") {
      agentResponse = getCMOResponse(inputValue)
    } else if (agent.id === "cto") {
      agentResponse = getCTOResponse(inputValue)
    }

    setTimeout(() => {
      const agentMessage: Message = {
        id: `agent-${Date.now()}`,
        content: agentResponse,
        sender: "agent",
        timestamp: new Date(),
        type: "response",
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 1000)

    setInputValue("")
  }

  const handleSampleQuestion = (question: string) => {
    if (questionCount >= maxQuestions) return
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen || !agent) return null

  const getAgentIcon = () => {
    switch (agent.id) {
      case "orchestrator":
        return <Network className="h-5 w-5" />
      case "ceo":
        return <Crown className="h-5 w-5" />
      case "cmo":
        return <TrendingUp className="h-5 w-5" />
      case "cto":
        return <Zap className="h-5 w-5" />
      default:
        return <MessageCircle className="h-5 w-5" />
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-96 transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"} shadow-2xl border-2`}>
        <CardHeader className={`bg-gradient-to-r ${agent.color} text-white p-4`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {getAgentIcon()}
              <div>
                <CardTitle className="text-sm font-semibold">{agent.name}</CardTitle>
                <p className="text-xs opacity-90">{agent.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 p-1">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {!isMinimized && (
            <div className="mt-2 flex items-center justify-between">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {questionCount}/{maxQuestions} questions
              </Badge>
              {questionCount >= maxQuestions && (
                <Badge variant="destructive" className="bg-red-500/20 text-white border-red-300/30">
                  Limit reached
                </Badge>
              )}
            </div>
          )}
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="p-0 flex-1">
              <ScrollArea className="h-[400px] p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900 border"
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                        <div
                          className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>
            </CardContent>

            <div className="p-4 border-t">
              {messages.length === 1 && agent.responses.sampleQuestions && (
                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-2 flex items-center">
                    <Lightbulb className="h-3 w-3 mr-1" />
                    Try these sample questions:
                  </p>
                  <div className="space-y-1">
                    {agent.responses.sampleQuestions.slice(0, 3).map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start text-xs h-auto py-2 px-3 bg-transparent"
                        onClick={() => handleSampleQuestion(question)}
                        disabled={questionCount >= maxQuestions}
                      >
                        <MessageCircle className="h-3 w-3 mr-2 text-blue-600" />"
                        {question.length > 50 ? question.substring(0, 50) + "..." : question}"
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    questionCount >= maxQuestions
                      ? "Question limit reached"
                      : agent.id === "orchestrator"
                        ? "Ask me to coordinate across executives..."
                        : `Ask ${agent.name}...`
                  }
                  disabled={questionCount >= maxQuestions}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || questionCount >= maxQuestions}
                  size="sm"
                  className={`bg-gradient-to-r ${agent.color} hover:opacity-90`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {questionCount >= maxQuestions && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  You've reached the maximum number of questions for this demo. Sign up for unlimited access!
                </p>
              )}
            </div>
          </>
        )}
      </Card>
    </div>
  )
}
