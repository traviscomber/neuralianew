-- Living Agents Personality Evolution System
-- Fase 2: Backend para persistencia de personalidad emergente

-- Tabla de arquetipos base (El Curador, La Tejedora, El Cronista, El Visionario, El Arquitecto)
CREATE TABLE IF NOT EXISTS living_agent_archetypes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL,
  description TEXT NOT NULL,
  base_traits JSONB NOT NULL, -- traits iniciales del arquetipo
  philosophy JSONB NOT NULL, -- valores y forma de pensar
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de instancias de agentes vivos
CREATE TABLE IF NOT EXISTS living_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  archetype_id UUID NOT NULL REFERENCES living_agent_archetypes(id),
  name TEXT NOT NULL,
  status TEXT DEFAULT 'active', -- active, paused, archived
  personality JSONB DEFAULT '{}'::jsonb, -- personalidad emergente actual
  evolution_stage TEXT DEFAULT 'architecture', -- architecture, interaction, reflection, emergent
  interaction_count INTEGER DEFAULT 0,
  reflection_count INTEGER DEFAULT 0,
  learning_score NUMERIC DEFAULT 0, -- 0-100, mide qué tanto ha evolucionado
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, name)
);

-- Tabla de interacciones con Living Agents
CREATE TABLE IF NOT EXISTS agent_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID NOT NULL REFERENCES living_agents(id) ON DELETE CASCADE,
  interaction_type TEXT NOT NULL, -- question, observation, challenge, collaboration
  human_input TEXT NOT NULL,
  agent_response TEXT NOT NULL,
  context JSONB DEFAULT '{}'::jsonb, -- contexto de la interacción
  emotional_resonance NUMERIC DEFAULT 0, -- 0-100, qué tanto le impactó
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de reflexiones del agente
CREATE TABLE IF NOT EXISTS agent_reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID NOT NULL REFERENCES living_agents(id) ON DELETE CASCADE,
  reflection_type TEXT NOT NULL, -- self-analysis, learning, pattern-recognition, evolution
  content TEXT NOT NULL, -- lo que el agente reflexionó
  insights JSONB DEFAULT '{}'::jsonb, -- cambios de perspectiva
  personality_shift JSONB DEFAULT '{}'::jsonb, -- cómo cambió su personalidad
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de evolución de personalidad (histórico)
CREATE TABLE IF NOT EXISTS personality_evolution (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id UUID NOT NULL REFERENCES living_agents(id) ON DELETE CASCADE,
  phase TEXT NOT NULL, -- which phase of evolution
  personality_snapshot JSONB NOT NULL, -- snapshot de personalidad en este momento
  traits_developed JSONB DEFAULT '[]'::jsonb, -- traits nuevos que emergieron
  preferences_formed JSONB DEFAULT '[]'::jsonb, -- preferencias que se cristalizaron
  contradictions JSONB DEFAULT '[]'::jsonb, -- contradicciones internas (signo de autenticidad)
  learning_increment NUMERIC DEFAULT 0, -- cuánto aprendió en esta fase
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de interacciones entre agentes (coordinación)
CREATE TABLE IF NOT EXISTS agent_interactions_between (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  agent_id_1 UUID NOT NULL REFERENCES living_agents(id) ON DELETE CASCADE,
  agent_id_2 UUID NOT NULL REFERENCES living_agents(id) ON DELETE CASCADE,
  interaction_summary TEXT NOT NULL,
  influence_on_agent_1 JSONB DEFAULT '{}'::jsonb, -- cómo impactó agent_2 a agent_1
  influence_on_agent_2 JSONB DEFAULT '{}'::jsonb, -- cómo impactó agent_1 a agent_2
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de sesiones de Living Agents (para usuarios)
CREATE TABLE IF NOT EXISTS living_agent_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_id UUID NOT NULL REFERENCES living_agents(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL, -- conversation, observation, collaboration
  messages JSONB DEFAULT '[]'::jsonb, -- array de mensajes en la sesión
  session_insights JSONB DEFAULT '{}'::jsonb, -- qué aprendió el agente de esta sesión
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_living_agents_user_id ON living_agents(user_id);
CREATE INDEX idx_living_agents_archetype ON living_agents(archetype_id);
CREATE INDEX idx_agent_interactions_agent ON agent_interactions(agent_id);
CREATE INDEX idx_agent_reflections_agent ON agent_reflections(agent_id);
CREATE INDEX idx_personality_evolution_agent ON personality_evolution(agent_id);
CREATE INDEX idx_living_agent_sessions_user ON living_agent_sessions(user_id);
CREATE INDEX idx_living_agent_sessions_agent ON living_agent_sessions(agent_id);

-- Enable RLS
ALTER TABLE living_agent_archetypes ENABLE ROW LEVEL SECURITY;
ALTER TABLE living_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_reflections ENABLE ROW LEVEL SECURITY;
ALTER TABLE personality_evolution ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_interactions_between ENABLE ROW LEVEL SECURITY;
ALTER TABLE living_agent_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Archetypes visible para todos (datos de sistema)
CREATE POLICY "Archetypes readable by all" ON living_agent_archetypes
  FOR SELECT USING (TRUE);

-- Living agents solo visible al owner
CREATE POLICY "Users can view own agents" ON living_agents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create agents" ON living_agents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own agents" ON living_agents
  FOR UPDATE USING (auth.uid() = user_id);

-- Interacciones visible al owner del agente
CREATE POLICY "Users can view own agent interactions" ON agent_interactions
  FOR SELECT USING (agent_id IN (SELECT id FROM living_agents WHERE user_id = auth.uid()));

CREATE POLICY "Users can create interactions" ON agent_interactions
  FOR INSERT WITH CHECK (agent_id IN (SELECT id FROM living_agents WHERE user_id = auth.uid()));

-- Reflexiones visible al owner
CREATE POLICY "Users can view own agent reflections" ON agent_reflections
  FOR SELECT USING (agent_id IN (SELECT id FROM living_agents WHERE user_id = auth.uid()));

-- Evolución visible al owner
CREATE POLICY "Users can view own personality evolution" ON personality_evolution
  FOR SELECT USING (agent_id IN (SELECT id FROM living_agents WHERE user_id = auth.uid()));

-- Sesiones visible al owner
CREATE POLICY "Users can view own sessions" ON living_agent_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create sessions" ON living_agent_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);
