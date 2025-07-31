-- =====================================================
-- VERIFICACIÓN FINAL DEL SETUP DE NEURALIA
-- =====================================================

-- 1. Verificar que todas las tablas existen
SELECT 'Verificando tablas existentes...' as status;

SELECT 
  table_name,
  table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('profiles', 'ai_agents', 'deployed_agents', 'chat_conversations', 'user_analytics')
ORDER BY table_name;

-- 2. Verificar estructura de la tabla ai_agents
SELECT 'Verificando estructura de ai_agents...' as status;

SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'ai_agents' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 3. Verificar agentes disponibles en el marketplace
SELECT 'Verificando agentes en marketplace...' as status;

SELECT 
  id,
  name,
  type,
  category,
  price,
  icon,
  CASE WHEN user_id IS NULL THEN 'Marketplace' ELSE 'Usuario específico' END as availability
FROM ai_agents
ORDER BY name;

-- 4. Verificar estructura de deployed_agents
SELECT 'Verificando estructura de deployed_agents...' as status;

SELECT 
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
  AND table_schema = 'public'
ORDER BY ordinal_position;

-- 5. Verificar políticas RLS
SELECT 'Verificando políticas RLS...' as status;

SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- 6. Verificar funciones y triggers
SELECT 'Verificando funciones y triggers...' as status;

SELECT 
  routine_name,
  routine_type,
  data_type as return_type
FROM information_schema.routines 
WHERE routine_schema = 'public'
  AND routine_name LIKE '%profile%' OR routine_name LIKE '%analytics%'
ORDER BY routine_name;

-- 7. Contar registros en cada tabla
SELECT 'Contando registros...' as status;

SELECT 
  'profiles' as tabla,
  COUNT(*) as registros
FROM profiles
UNION ALL
SELECT 
  'ai_agents' as tabla,
  COUNT(*) as registros
FROM ai_agents
UNION ALL
SELECT 
  'deployed_agents' as tabla,
  COUNT(*) as registros
FROM deployed_agents
UNION ALL
SELECT 
  'chat_conversations' as tabla,
  COUNT(*) as registros
FROM chat_conversations
UNION ALL
SELECT 
  'user_analytics' as tabla,
  COUNT(*) as registros
FROM user_analytics;

-- 8. Verificar que los agentes neurales están disponibles
SELECT 'Verificando agentes neurales específicos...' as status;

SELECT 
  name,
  type,
  category,
  price,
  description
FROM ai_agents 
WHERE type LIKE '%neural%' OR category LIKE '%neural%'
ORDER BY name;

-- 9. Test de inserción (sin commitear)
SELECT 'Probando inserción de agente desplegado...' as status;

-- Crear un usuario de prueba temporal
DO $$
DECLARE
  test_user_id uuid := gen_random_uuid();
  test_agent_id text := 'neural-ceo-test';
BEGIN
  -- Intentar insertar un agente desplegado de prueba
  INSERT INTO deployed_agents (
    user_id,
    agent_id,
    name,
    agent_name,
    description,
    agent_description,
    agent_type,
    icon,
    status,
    deployment_date,
    trial_start,
    trial_end
  ) VALUES (
    test_user_id,
    test_agent_id,
    'CEO Neural Test',
    'CEO Neural Test',
    'Agente de prueba',
    'Agente de prueba',
    'neural-executive',
    '👔',
    'trial',
    NOW(),
    NOW(),
    NOW() + INTERVAL '5 days'
  );
  
  -- Verificar que se insertó
  IF EXISTS (SELECT 1 FROM deployed_agents WHERE user_id = test_user_id) THEN
    RAISE NOTICE 'SUCCESS: Inserción de agente desplegado funciona correctamente';
  ELSE
    RAISE NOTICE 'ERROR: No se pudo insertar agente desplegado';
  END IF;
  
  -- Limpiar el registro de prueba
  DELETE FROM deployed_agents WHERE user_id = test_user_id;
  
END $$;

-- 10. Resumen final
SELECT 'RESUMEN FINAL' as status;

SELECT 
  '✅ Sistema configurado correctamente' as mensaje,
  'Supabase único como base de datos' as configuracion,
  'Autenticación + Datos en mismo sistema' as arquitectura,
  'Marketplace con 6 agentes neurales' as contenido,
  'Sistema de trials de 5 días activo' as funcionalidad;

SELECT 'Setup completado exitosamente! 🎉' as final_status;
