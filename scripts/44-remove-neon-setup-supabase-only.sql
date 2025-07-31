-- ============================================================================
-- CONFIGURACIÓN ÚNICA CON SUPABASE
-- Elimina referencias a Neon y configura todo en Supabase
-- ============================================================================

-- Verificar conexión a Supabase
SELECT 'Conectado a Supabase' as status, current_database() as database_name;

-- Crear extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Verificar si las tablas ya existen
SELECT 
  table_name,
  CASE WHEN table_name IS NOT NULL THEN '✅ Existe' ELSE '❌ No existe' END as status
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('profiles', 'deployed_agents', 'ai_agents', 'chat_conversations', 'user_analytics')
ORDER BY table_name;

-- Crear tabla profiles si no existe
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    company_name TEXT,
    subscription_plan TEXT DEFAULT 'free',
    subscription_status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear tabla deployed_agents si no existe
CREATE TABLE IF NOT EXISTS public.deployed_agents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    agent_id TEXT NOT NULL,
    name TEXT NOT NULL,
    agent_name TEXT,
    description TEXT,
    agent_description TEXT,
    agent_type TEXT DEFAULT 'neural-executive',
    icon TEXT DEFAULT '🤖',
    status TEXT DEFAULT 'trial',
    deployment_date TIMESTAMPTZ DEFAULT NOW(),
    trial_start TIMESTAMPTZ DEFAULT NOW(),
    trial_end TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Verificar estructura actual de ai_agents
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
  AND table_name = 'ai_agents'
ORDER BY ordinal_position;

-- Crear tabla ai_agents con estructura completa
DROP TABLE IF EXISTS public.ai_agents CASCADE;
CREATE TABLE public.ai_agents (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT DEFAULT 'neural-executive',
    icon TEXT DEFAULT '🤖',
    price DECIMAL DEFAULT 0,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deployed_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para profiles
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas RLS para deployed_agents
DROP POLICY IF EXISTS "Users can view own deployed agents" ON public.deployed_agents;
CREATE POLICY "Users can view own deployed agents" ON public.deployed_agents
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own deployed agents" ON public.deployed_agents;
CREATE POLICY "Users can insert own deployed agents" ON public.deployed_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own deployed agents" ON public.deployed_agents;
CREATE POLICY "Users can update own deployed agents" ON public.deployed_agents
    FOR UPDATE USING (auth.uid() = user_id);

-- Políticas RLS para ai_agents (marketplace - todos pueden ver)
DROP POLICY IF EXISTS "Anyone can view marketplace agents" ON public.ai_agents;
CREATE POLICY "Anyone can view marketplace agents" ON public.ai_agents
    FOR SELECT TO authenticated USING (true);

-- Función para crear perfil automáticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para crear perfil automáticamente
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insertar agentes de ejemplo en el marketplace
INSERT INTO public.ai_agents (id, name, description, type, icon, price, status) VALUES
('ceo-agent', 'CEO Agent', 'Agente ejecutivo para liderazgo estratégico y toma de decisiones', 'neural-executive', '👔', 299, 'active'),
('cmo-agent', 'CMO Agent', 'Agente de marketing para estrategias y campañas', 'neural-marketing', '📈', 199, 'active'),
('cto-agent', 'CTO Agent', 'Agente técnico para arquitectura y desarrollo', 'neural-technical', '💻', 249, 'active'),
('cfo-agent', 'CFO Agent', 'Agente financiero para análisis y planificación', 'neural-financial', '💰', 229, 'active'),
('sales-agent', 'Sales Director Agent', 'Agente de ventas para crecimiento de ingresos', 'neural-sales', '🎯', 179, 'active'),
('hr-agent', 'HR Director Agent', 'Agente de recursos humanos para gestión de talento', 'neural-hr', '👥', 159, 'active')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    updated_at = NOW();

-- Verificar configuración final
SELECT 
    'Configuración completada' as status,
    (SELECT COUNT(*) FROM public.profiles) as profiles_count,
    (SELECT COUNT(*) FROM public.deployed_agents) as deployed_agents_count,
    (SELECT COUNT(*) FROM public.ai_agents) as marketplace_agents_count;

-- Mostrar agentes disponibles en marketplace
SELECT 
    '🤖 Agentes disponibles:' as marketplace,
    name,
    description,
    icon,
    price
FROM public.ai_agents 
WHERE status = 'active'
ORDER BY name;
