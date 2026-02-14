-- Fix all remaining "role mutable search_path" security vulnerabilities
-- These functions need explicit search_path to prevent SQL injection attacks

-- Fix 1: create_profile_for_user
CREATE OR REPLACE FUNCTION public.create_profile_for_user(user_id UUID, full_name TEXT DEFAULT NULL)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, created_at, updated_at)
  VALUES (user_id, full_name, now(), now())
  ON CONFLICT (id) DO NOTHING;
END;
$$;

-- Fix 2: update_conversion_flag
CREATE OR REPLACE FUNCTION public.update_conversion_flag()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.converted = TRUE;
  RETURN NEW;
END;
$$;

-- Fix 3: update_page_view_count
CREATE OR REPLACE FUNCTION public.update_page_view_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.page_views
  SET view_count = view_count + 1
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$;

-- Fix 4: handle_agent_analytics
CREATE OR REPLACE FUNCTION public.handle_agent_analytics()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_events (event_type, event_data, created_at)
  VALUES ('agent_interaction', jsonb_build_object('agent_id', NEW.id), now());
  RETURN NEW;
END;
$$;

-- Fix 5: get_analytics_summary
CREATE OR REPLACE FUNCTION public.get_analytics_summary(user_id_param UUID)
RETURNS TABLE (
  total_conversions BIGINT,
  total_page_views BIGINT,
  total_events BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*)::BIGINT as total_conversions,
    (SELECT COUNT(*)::BIGINT FROM public.page_views WHERE user_id = user_id_param) as total_page_views,
    (SELECT COUNT(*)::BIGINT FROM public.user_events WHERE user_id = user_id_param) as total_events
  FROM public.conversion_events
  WHERE user_id = user_id_param;
END;
$$;

-- Fix 6: get_conversion_funnel
CREATE OR REPLACE FUNCTION public.get_conversion_funnel(user_id_param UUID)
RETURNS TABLE (
  step TEXT,
  count BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    conversion_type::TEXT as step,
    COUNT(*)::BIGINT as count
  FROM public.conversion_events
  WHERE user_id = user_id_param
  GROUP BY conversion_type
  ORDER BY count DESC;
END;
$$;

-- Verify all functions now have explicit search_path
SELECT 
  routine_name,
  routine_type,
  routine_definition
FROM information_schema.routines
WHERE routine_schema = 'public'
  AND (routine_name LIKE '%conversion%' 
    OR routine_name LIKE '%page_view%' 
    OR routine_name LIKE '%profile%'
    OR routine_name LIKE '%analytics%'
    OR routine_name LIKE '%agent%')
ORDER BY routine_name;
