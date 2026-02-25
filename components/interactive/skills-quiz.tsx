"use client"

import { useState } from "react"
import { CheckCircle2, RotateCw, ArrowRight } from "lucide-react"
import Link from "next/link"

interface QuizQuestion {
  id: number
  question: string
  options: Array<{ text: string; correct: boolean }>
  explanation: string
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "¿Cuál es el mayor beneficio de un sistema multi-agente?",
    options: [
      { text: "Pueden trabajar juntos de forma coordinada sin intervención humana", correct: true },
      { text: "Son más rápidos que un solo agente", correct: false },
      { text: "Reducen costos de infraestructura", correct: false },
      { text: "Necesitan menos datos para entrenar", correct: false },
    ],
    explanation: "Los sistemas multi-agente permiten que especialistas trabajen coordinadamente, resolviendo problemas complejos que un agente individual no podría manejar.",
  },
  {
    id: 2,
    question: "¿Qué es un 'Living Agent'?",
    options: [
      { text: "Un agente que solo responde preguntas", correct: false },
      { text: "Un agente que evoluciona y aprende de cada interacción", correct: true },
      { text: "Un agente que cuesta menos que otros", correct: false },
      { text: "Un agente sin memoria", correct: false },
    ],
    explanation: "Los Living Agents son sistemas de IA que mejoran continuamente, adaptándose a patrones y optimizando su comportamiento basado en experiencias pasadas.",
  },
  {
    id: 3,
    question: "¿Cuál es el foco principal de N3uralia?",
    options: [
      { text: "Vender software genérico de IA", correct: false },
      { text: "Construir sistemas agenticos listos para producción desde día uno", correct: true },
      { text: "Ofrecer consultoría general", correct: false },
      { text: "Entrenar modelos de IA", correct: false },
    ],
    explanation: "N3uralia se especializa en ingeniería de sistemas agenticos listos para producción, integrados con tu infraestructura existente.",
  },
  {
    id: 4,
    question: "¿Qué significa 'infraestructura agnóstica'?",
    options: [
      { text: "Solo funciona con OpenAI", correct: false },
      { text: "Funciona con cualquier proveedor de IA (OpenAI, Gemini, Anthropic, etc.)", correct: true },
      { text: "No necesita IA", correct: false },
      { text: "Cuesta mucho dinero", correct: false },
    ],
    explanation: "La arquitectura agnóstica de N3uralia permite usar el mejor modelo para cada caso de uso, sin dependencia de un solo proveedor.",
  },
  {
    id: 5,
    question: "¿Cuál es el ROI típico esperado?",
    options: [
      { text: "No hay ROI claro", correct: false },
      { text: "Solo en 2-3 años", correct: false },
      { text: "Entre 6-12 meses típicamente", correct: true },
      { text: "Nunca se recupera la inversión", correct: false },
    ],
    explanation: "Según nuestros casos de éxito, el payback period típico es entre 6-12 meses, con ahorros sostenidos después.",
  },
]

export function SkillsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswerSelect = (optionIndex: number) => {
    if (answered) return

    setSelectedAnswer(optionIndex)
    setAnswered(true)

    if (quizQuestions[currentQuestion].options[optionIndex].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
    setSelectedAnswer(null)
    setQuizComplete(false)
  }

  const percentage = Math.round((score / quizQuestions.length) * 100)

  if (quizComplete) {
    return (
      <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h2 className="section-heading mb-4">Quiz Completado</h2>
            <p className="section-subheading">
              Tu resultado
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border p-12 mb-8">
            <div className="text-6xl font-bold text-primary mb-4">
              {percentage}%
            </div>
            <p className="text-xl text-muted-foreground mb-2">
              {score} de {quizQuestions.length} respuestas correctas
            </p>
            {percentage === 100 && (
              <p className="text-lg text-primary font-semibold">¡Experto en sistemas agenticos! 🎉</p>
            )}
            {percentage >= 80 && percentage < 100 && (
              <p className="text-lg text-green-600 font-semibold">¡Muy bien! Entiendes los conceptos clave.</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-lg text-amber-600 font-semibold">Buen progreso. Hay temas para profundizar.</p>
            )}
            {percentage < 60 && (
              <p className="text-lg text-orange-600 font-semibold">Revisa los conceptos y vuelve a intentar.</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="px-8 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all text-center flex items-center justify-center gap-2"
            >
              <RotateCw className="w-4 h-4" />
              Intentar de Nuevo
            </button>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Conversar con el Equipo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-heading text-2xl">Quiz Interactivo</h2>
            <span className="text-sm font-semibold text-muted-foreground">
              {currentQuestion + 1}/{quizQuestions.length}
            </span>
          </div>
          <div className="w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = option.correct
              const showResult = answered

              let borderClass = "border-border"
              let bgClass = "bg-card"
              let hoverClass = answered ? "" : "hover:border-primary/60 hover:bg-primary/5 cursor-pointer"

              if (showResult) {
                if (isCorrect) {
                  borderClass = "border-green-500/60"
                  bgClass = "bg-green-500/10"
                } else if (isSelected && !isCorrect) {
                  borderClass = "border-red-500/60"
                  bgClass = "bg-red-500/10"
                }
              } else if (isSelected) {
                borderClass = "border-primary/60"
                bgClass = "bg-primary/5"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answered}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${borderClass} ${bgClass} ${hoverClass}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        showResult && isCorrect
                          ? "border-green-500 bg-green-500"
                          : showResult && isSelected && !isCorrect
                            ? "border-red-500 bg-red-500"
                            : isSelected
                              ? "border-primary"
                              : "border-border"
                      }`}
                    >
                      {showResult && isCorrect && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>
                    <span className="font-medium text-foreground">{option.text}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {answered && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">Explicación:</p>
              <p className="text-sm text-blue-800 dark:text-blue-200">{question.explanation}</p>
            </div>
          )}
        </div>

        {answered && (
          <button
            onClick={handleNextQuestion}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            {currentQuestion === quizQuestions.length - 1 ? "Ver Resultados" : "Siguiente Pregunta"}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </section>
  )
}
