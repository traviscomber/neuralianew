import { CaseStudyContent } from "./CaseStudyContent"

const caseStudyData: Record<string, any> = {
  "retail-automation": {
    title: {
      en: "Retail Chain Automation",
      es: "Automatización de Cadena Retail",
    },
    client: "MegaRetail Corp",
    industry: {
      en: "Retail & E-commerce",
      es: "Retail y E-commerce",
    },
    overview: {
      en: "MegaRetail Corp, a leading retail chain with 150+ stores across Latin America, faced significant challenges with inventory management, leading to frequent stockouts and overstock situations. Our AI-powered solution transformed their entire supply chain operation.",
      es: "MegaRetail Corp, una cadena retail líder con 150+ tiendas en Latinoamérica, enfrentaba desafíos significativos con la gestión de inventario, llevando a frecuentes falta de stock y situaciones de sobrestock. Nuestra solución impulsada por IA transformó toda su operación de cadena de suministro.",
    },
    challenge: {
      en: "The client struggled with manual inventory tracking, resulting in 40% stockout rate, $3.2M in lost sales annually, and inefficient warehouse operations across multiple locations.",
      es: "El cliente luchaba con el seguimiento manual de inventario, resultando en 40% de tasa de falta de stock, $3.2M en ventas perdidas anualmente, y operaciones de almacén ineficientes en múltiples ubicaciones.",
    },
    solution: {
      en: "We implemented an AI-powered inventory management system with predictive analytics, automated reordering, and real-time tracking across all store locations.",
      es: "Implementamos un sistema de gestión de inventario impulsado por IA con análisis predictivo, reordenamiento automatizado, y seguimiento en tiempo real en todas las ubicaciones de tiendas.",
    },
    results: [
      {
        metric: "85%",
        label: { en: "Reduction in stockouts", es: "Reducción en falta de stock" },
      },
      {
        metric: "$2.3M",
        label: { en: "Annual cost savings", es: "Ahorro anual de costos" },
      },
      {
        metric: "60%",
        label: { en: "Faster inventory turnover", es: "Rotación de inventario más rápida" },
      },
      {
        metric: "99.2%",
        label: { en: "System uptime", es: "Tiempo de actividad del sistema" },
      },
    ],
    technologies: ["Python", "TensorFlow", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Discovery & Planning", es: "Descubrimiento y Planificación" },
        duration: "4 weeks",
        description: {
          en: "Analyzed current systems, identified pain points, and designed solution architecture",
          es: "Analizamos sistemas actuales, identificamos puntos de dolor, y diseñamos arquitectura de solución",
        },
      },
      {
        phase: { en: "Development & Testing", es: "Desarrollo y Pruebas" },
        duration: "12 weeks",
        description: {
          en: "Built AI models, developed APIs, and conducted extensive testing",
          es: "Construimos modelos de IA, desarrollamos APIs, y realizamos pruebas extensivas",
        },
      },
      {
        phase: { en: "Pilot Implementation", es: "Implementación Piloto" },
        duration: "6 weeks",
        description: {
          en: "Deployed to 10 pilot stores, gathered feedback, and refined the system",
          es: "Desplegamos en 10 tiendas piloto, recopilamos retroalimentación, y refinamos el sistema",
        },
      },
      {
        phase: { en: "Full Rollout", es: "Despliegue Completo" },
        duration: "8 weeks",
        description: {
          en: "Rolled out to all 150+ stores with comprehensive training and support",
          es: "Desplegamos en todas las 150+ tiendas con entrenamiento y soporte integral",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "N3uralia's AI solution has revolutionized our inventory management. We've seen dramatic improvements in stock availability and significant cost savings. Their team's expertise and support throughout the project was exceptional.",
        es: "La solución de IA de N3uralia ha revolucionado nuestra gestión de inventario. Hemos visto mejoras dramáticas en disponibilidad de stock y ahorros significativos de costos. La experiencia y soporte de su equipo durante el proyecto fue excepcional.",
      },
      author: "Maria Rodriguez",
      position: { en: "Chief Operations Officer", es: "Directora de Operaciones" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Retail+Dashboard",
  },
  "healthcare-ai": {
    title: {
      en: "Healthcare AI Diagnosis",
      es: "Diagnóstico de IA en Salud",
    },
    client: "HealthPlus Inc",
    industry: {
      en: "Healthcare",
      es: "Salud",
    },
    overview: {
      en: "HealthPlus Inc aimed to improve patient diagnosis accuracy and reduce healthcare costs through AI-driven diagnostic tools.",
      es: "HealthPlus Inc buscaba mejorar la precisión del diagnóstico de pacientes y reducir los costos de salud a través de herramientas de diagnóstico impulsadas por IA.",
    },
    challenge: {
      en: "Manual diagnosis processes were time-consuming and prone to errors, leading to higher healthcare costs and less accurate patient outcomes.",
      es: "Los procesos de diagnóstico manuales eran tediosos y propensos a errores, llevando a mayores costos de salud y resultados de pacientes menos precisos.",
    },
    solution: {
      en: "We developed an AI-powered diagnostic system that analyzes patient data and provides accurate, quick diagnoses.",
      es: "Desarrollamos un sistema de diagnóstico impulsado por IA que analiza datos de pacientes y proporciona diagnósticos precisos y rápidos.",
    },
    results: [
      {
        metric: "95%",
        label: { en: "Increase in diagnosis accuracy", es: "Aumento en precisión del diagnóstico" },
      },
      {
        metric: "$1.5M",
        label: { en: "Annual cost savings", es: "Ahorro anual de costos" },
      },
      {
        metric: "30%",
        label: { en: "Reduction in patient wait time", es: "Reducción en tiempo de espera de pacientes" },
      },
      {
        metric: "98%",
        label: { en: "System reliability", es: "Fiabilidad del sistema" },
      },
    ],
    technologies: ["Python", "PyTorch", "MongoDB", "AWS", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Data Collection & Analysis", es: "Recopilación y Análisis de Datos" },
        duration: "5 weeks",
        description: {
          en: "Collected and analyzed medical data to train AI models",
          es: "Recopiló y analizó datos médicos para entrenar modelos de IA",
        },
      },
      {
        phase: { en: "Model Development", es: "Desarrollo de Modelo" },
        duration: "10 weeks",
        description: {
          en: "Developed and tested AI diagnostic models",
          es: "Desarrolló y probó modelos de diagnóstico de IA",
        },
      },
      {
        phase: { en: "Integration & Testing", es: "Integración y Pruebas" },
        duration: "8 weeks",
        description: {
          en: "Integrated the AI system with existing healthcare infrastructure and conducted extensive testing",
          es: "Integró el sistema de IA con la infraestructura de salud existente y realizó pruebas extensivas",
        },
      },
      {
        phase: { en: "Deployment & Training", es: "Despliegue y Entrenamiento" },
        duration: "5 weeks",
        description: {
          en: "Deployed the system to hospitals, trained medical staff, and established monitoring systems",
          es: "Desplegó el sistema en hospitales, entrenó al personal médico, y estableció sistemas de monitoreo",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "The AI diagnostic system has been a game-changer for our healthcare facility. Patient outcomes have improved significantly, and we've saved a substantial amount on healthcare costs.",
        es: "El sistema de diagnóstico de IA ha sido un cambio revolucionario para nuestra instalación de salud. Los resultados de los pacientes han mejorado significativamente, y hemos ahorrado una cantidad sustancial en costos de salud.",
      },
      author: "Dr. Ana Lopez",
      position: { en: "Chief Medical Officer", es: "Directora Médica" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Healthcare+AI",
  },
  "financial-services": {
    title: {
      en: "Financial Services AI",
      es: "IA en Servicios Financieros",
    },
    client: "SecureBank International",
    industry: {
      en: "Financial Services",
      es: "Servicios Financieros",
    },
    overview: {
      en: "SecureBank International needed to modernize their customer service operations to handle increasing query volumes while maintaining security standards. Our multilingual AI chatbot solution transformed their customer experience.",
      es: "SecureBank International necesitaba modernizar sus operaciones de servicio al cliente para manejar volúmenes crecientes de consultas mientras mantenía estándares de seguridad. Nuestra solución de chatbot de IA multiidioma transformó su experiencia del cliente.",
    },
    challenge: {
      en: "High call center costs, long wait times averaging 12 minutes, and inability to provide 24/7 support in multiple languages were impacting customer satisfaction.",
      es: "Altos costos de call center, largos tiempos de espera promediando 12 minutos, e incapacidad de proporcionar soporte 24/7 en múltiples idiomas estaban impactando la satisfacción del cliente.",
    },
    solution: {
      en: "We developed a secure, multilingual AI chatbot with natural language processing, integrated with banking systems for real-time account information and transaction capabilities.",
      es: "Desarrollamos un chatbot de IA seguro y multiidioma con procesamiento de lenguaje natural, integrado con sistemas bancarios para información de cuenta en tiempo real y capacidades de transacción.",
    },
    results: [
      {
        metric: "92%",
        label: { en: "Query resolution rate", es: "Tasa de resolución de consultas" },
      },
      {
        metric: "$1.8M",
        label: { en: "Annual operational savings", es: "Ahorro operacional anual" },
      },
      {
        metric: "24/7",
        label: { en: "Service availability", es: "Disponibilidad del servicio" },
      },
      {
        metric: "2.3s",
        label: { en: "Average response time", es: "Tiempo promedio de respuesta" },
      },
    ],
    technologies: ["Node.js", "OpenAI GPT", "MongoDB", "Redis", "Docker", "AWS"],
    timeline: [
      {
        phase: { en: "Requirements Analysis", es: "Análisis de Requisitos" },
        duration: "3 weeks",
        description: {
          en: "Analyzed banking workflows, security requirements, and customer interaction patterns",
          es: "Analizamos flujos de trabajo bancarios, requisitos de seguridad, y patrones de interacción del cliente",
        },
      },
      {
        phase: { en: "AI Model Development", es: "Desarrollo de Modelo de IA" },
        duration: "8 weeks",
        description: {
          en: "Trained custom NLP models, developed conversation flows, and implemented security protocols",
          es: "Entrenamos modelos NLP personalizados, desarrollamos flujos de conversación, e implementamos protocolos de seguridad",
        },
      },
      {
        phase: { en: "Integration & Testing", es: "Integración y Pruebas" },
        duration: "6 weeks",
        description: {
          en: "Integrated with banking systems, conducted security audits, and performed load testing",
          es: "Integramos con sistemas bancarios, realizamos auditorías de seguridad, y ejecutamos pruebas de carga",
        },
      },
      {
        phase: { en: "Deployment & Training", es: "Despliegue y Entrenamiento" },
        duration: "3 weeks",
        description: {
          en: "Deployed to production, trained staff, and established monitoring systems",
          es: "Desplegamos a producción, entrenamos personal, y establecimos sistemas de monitoreo",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "The AI chatbot has exceeded our expectations. Customer satisfaction scores have improved significantly, and we've reduced operational costs while providing better service. N3uralia delivered a world-class solution.",
        es: "El chatbot de IA ha superado nuestras expectativas. Las puntuaciones de satisfacción del cliente han mejorado significativamente, y hemos reducido costos operacionales mientras proporcionamos mejor servicio. N3uralia entregó una solución de clase mundial.",
      },
      author: "Carlos Mendez",
      position: { en: "Head of Digital Banking", es: "Jefe de Banca Digital" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Banking+Chatbot",
  },
  "manufacturing-optimization": {
    title: {
      en: "Manufacturing Process Optimization",
      es: "Optimización de Procesos de Manufactura",
    },
    client: "TechManufacturing Ltd",
    industry: {
      en: "Manufacturing",
      es: "Manufactura",
    },
    overview: {
      en: "TechManufacturing Ltd sought to modernize their production line with IoT sensors and AI analytics to improve efficiency, reduce downtime, and enhance quality control across their manufacturing facilities.",
      es: "TechManufacturing Ltd buscaba modernizar su línea de producción con sensores IoT y análisis de IA para mejorar eficiencia, reducir tiempo de inactividad, y mejorar control de calidad en sus instalaciones de manufactura.",
    },
    challenge: {
      en: "Frequent equipment failures, quality control issues resulting in 15% defect rate, and inefficient production scheduling were impacting profitability and customer satisfaction.",
      es: "Fallas frecuentes de equipos, problemas de control de calidad resultando en 15% de tasa de defectos, y programación de producción ineficiente estaban impactando rentabilidad y satisfacción del cliente.",
    },
    solution: {
      en: "We implemented an IoT-enabled predictive maintenance system with AI-powered quality control and production optimization algorithms to maximize efficiency and minimize defects.",
      es: "Implementamos un sistema de mantenimiento predictivo habilitado por IoT con control de calidad impulsado por IA y algoritmos de optimización de producción para maximizar eficiencia y minimizar defectos.",
    },
    results: [
      {
        metric: "35%",
        label: { en: "Increase in efficiency", es: "Aumento en eficiencia" },
      },
      {
        metric: "$4.2M",
        label: { en: "Annual cost savings", es: "Ahorro anual de costos" },
      },
      {
        metric: "78%",
        label: { en: "Reduction in defects", es: "Reducción en defectos" },
      },
      {
        metric: "90%",
        label: { en: "Reduction in downtime", es: "Reducción en tiempo de inactividad" },
      },
    ],
    technologies: ["Python", "TensorFlow", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Assessment & Design", es: "Evaluación y Diseño" },
        duration: "6 weeks",
        description: {
          en: "Assessed current manufacturing processes, designed IoT architecture, and planned sensor deployment",
          es: "Evaluamos procesos de manufactura actuales, diseñamos arquitectura IoT, y planificamos despliegue de sensores",
        },
      },
      {
        phase: { en: "IoT Implementation", es: "Implementación IoT" },
        duration: "10 weeks",
        description: {
          en: "Installed sensors, developed data collection systems, and established connectivity infrastructure",
          es: "Instalamos sensores, desarrollamos sistemas de recolección de datos, y establecimos infraestructura de conectividad",
        },
      },
      {
        phase: { en: "AI Model Development", es: "Desarrollo de Modelo de IA" },
        duration: "12 weeks",
        description: {
          en: "Built predictive models, developed quality control algorithms, and created optimization systems",
          es: "Construimos modelos predictivos, desarrollamos algoritmos de control de calidad, y creamos sistemas de optimización",
        },
      },
      {
        phase: { en: "Integration & Optimization", es: "Integración y Optimización" },
        duration: "8 weeks",
        description: {
          en: "Integrated all systems, fine-tuned algorithms, and optimized performance across production lines",
          es: "Integramos todos los sistemas, afinamos algoritmos, y optimizamos rendimiento en líneas de producción",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "N3uralia's IoT and AI solution has transformed our manufacturing operations. We've achieved unprecedented efficiency gains and quality improvements. The predictive maintenance alone has saved us millions in potential downtime costs.",
        es: "La solución IoT y de IA de N3uralia ha transformado nuestras operaciones de manufactura. Hemos logrado ganancias de eficiencia sin precedentes y mejoras de calidad. Solo el mantenimiento predictivo nos ha ahorrado millones en costos potenciales de tiempo de inactividad.",
      },
      author: "Roberto Silva",
      position: { en: "Manufacturing Director", es: "Director de Manufactura" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Manufacturing+Analytics",
  },
  "education-platform": {
    title: {
      en: "Education Platform Personalization",
      es: "Personalización de Plataforma Educativa",
    },
    client: "LearnSmart Inc",
    industry: {
      en: "Education",
      es: "Educación",
    },
    overview: {
      en: "LearnSmart Inc aimed to enhance student learning experiences through personalized educational content and AI-driven analytics.",
      es: "LearnSmart Inc buscaba mejorar las experiencias de aprendizaje de los estudiantes a través de contenido educativo personalizado y análisis impulsados por IA.",
    },
    challenge: {
      en: "One-size-fits-all educational approaches were not effective, leading to lower student engagement and achievement.",
      es: "Los enfoques educativos de un solo tamaño no eran efectivos, llevando a menor participación y logro de los estudiantes.",
    },
    solution: {
      en: "We created an AI-powered education platform that personalizes content based on student performance and learning styles.",
      es: "Creamos una plataforma educativa impulsada por IA que personaliza el contenido según el rendimiento y los estilos de aprendizaje de los estudiantes.",
    },
    results: [
      {
        metric: "40%",
        label: { en: "Increase in student engagement", es: "Aumento en participación de estudiantes" },
      },
      {
        metric: "30%",
        label: { en: "Improvement in student achievement", es: "Mejora en logro de estudiantes" },
      },
      {
        metric: "20%",
        label: { en: "Reduction in teacher workload", es: "Reducción en carga de trabajo de profesores" },
      },
      {
        metric: "99%",
        label: { en: "System reliability", es: "Fiabilidad del sistema" },
      },
    ],
    technologies: ["JavaScript", "React", "MongoDB", "AWS", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Requirements Gathering", es: "Recolección de Requisitos" },
        duration: "4 weeks",
        description: {
          en: "Met with educators and students to understand needs and challenges",
          es: "Se reunió con educadores y estudiantes para entender necesidades y desafíos",
        },
      },
      {
        phase: { en: "Platform Development", es: "Desarrollo de Plataforma" },
        duration: "12 weeks",
        description: {
          en: "Built the platform with personalized content delivery and AI analytics",
          es: "Construyó la plataforma con entrega de contenido personalizado y análisis de IA",
        },
      },
      {
        phase: { en: "Testing & Feedback", es: "Pruebas y Retroalimentación" },
        duration: "6 weeks",
        description: {
          en: "Conducted user testing and gathered feedback to refine the platform",
          es: "Realizó pruebas de usuario y recopiló retroalimentación para afinar la plataforma",
        },
      },
      {
        phase: { en: "Deployment & Training", es: "Despliegue y Entrenamiento" },
        duration: "4 weeks",
        description: {
          en: "Deployed the platform to schools, trained educators, and established support systems",
          es: "Desplegó la plataforma en escuelas, entrenó a educadores, y estableció sistemas de soporte",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "The personalized education platform has made a significant difference in our students' learning experiences. Engagement and achievement have improved, and our teachers are more efficient.",
        es: "La plataforma educativa personalizada ha hecho una diferencia significativa en las experiencias de aprendizaje de nuestros estudiantes. La participación y el logro han mejorado, y nuestros profesores son más eficientes.",
      },
      author: "Mr. John Doe",
      position: { en: "Principal", es: "Director" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Education+Platform",
  },
  "logistics-automation": {
    title: {
      en: "Logistics Automation",
      es: "Automatización de Logística",
    },
    client: "GlobalLogistics Inc",
    industry: {
      en: "Logistics",
      es: "Logística",
    },
    overview: {
      en: "GlobalLogistics Inc needed to optimize their logistics operations to reduce costs and improve delivery times. Our AI-powered solution automated various logistics processes.",
      es: "GlobalLogistics Inc necesitaba optimizar sus operaciones de logística para reducir costos e mejorar los tiempos de entrega. Nuestra solución impulsada por IA automatizó varios procesos de logística.",
    },
    challenge: {
      en: "Manual logistics processes were inefficient, leading to higher costs and longer delivery times.",
      es: "Los procesos de logística manuales eran ineficientes, llevando a mayores costos y tiempos de entrega más largos.",
    },
    solution: {
      en: "We implemented an AI-powered logistics automation system that optimizes routes, schedules deliveries, and tracks shipments in real-time.",
      es: "Implementamos un sistema de automatización de logística impulsado por IA que optimiza rutas, programa entregas, y realiza un seguimiento de envíos en tiempo real.",
    },
    results: [
      {
        metric: "25%",
        label: { en: "Reduction in logistics costs", es: "Reducción en costos de logística" },
      },
      {
        metric: "15%",
        label: { en: "Improvement in delivery times", es: "Mejora en tiempos de entrega" },
      },
      {
        metric: "95%",
        label: { en: "Accuracy in shipment tracking", es: "Precisión en seguimiento de envíos" },
      },
      {
        metric: "99.5%",
        label: { en: "System uptime", es: "Tiempo de actividad del sistema" },
      },
    ],
    technologies: ["Python", "TensorFlow", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    timeline: [
      {
        phase: { en: "Analysis & Design", es: "Análisis y Diseño" },
        duration: "5 weeks",
        description: {
          en: "Analyzed logistics workflows and designed automation architecture",
          es: "Analizó flujos de trabajo de logística y diseñó arquitectura de automatización",
        },
      },
      {
        phase: { en: "Model Development", es: "Desarrollo de Modelo" },
        duration: "10 weeks",
        description: {
          en: "Developed AI models for route optimization and delivery scheduling",
          es: "Desarrolló modelos de IA para optimización de rutas y programación de entregas",
        },
      },
      {
        phase: { en: "Integration & Testing", es: "Integración y Pruebas" },
        duration: "8 weeks",
        description: {
          en: "Integrated AI models with logistics systems and conducted extensive testing",
          es: "Integró modelos de IA con sistemas de logística y realizó pruebas extensivas",
        },
      },
      {
        phase: { en: "Deployment & Training", es: "Despliegue y Entrenamiento" },
        duration: "5 weeks",
        description: {
          en: "Deployed the system to warehouses, trained logistics staff, and established monitoring systems",
          es: "Desplegó el sistema en almacenes, entrenó al personal de logística, y estableció sistemas de monitoreo",
        },
      },
    ],
    testimonial: {
      quote: {
        en: "The AI logistics automation system has been a game-changer for our company. We've seen significant reductions in costs and improvements in delivery times.",
        es: "El sistema de automatización de logística de IA ha sido un cambio revolucionario para nuestra empresa. Hemos visto reducciones significativas en costos e mejoras en tiempos de entrega.",
      },
      author: "Ms. Jane Smith",
      position: { en: "Logistics Manager", es: "Gerente de Logística" },
    },
    image: "/placeholder.svg?height=400&width=600&text=Logistics+Automation",
  },
}

// This is the server component that renders the client component
const CaseStudyPage = () => {
  return <CaseStudyContent />
}

export default CaseStudyPage
