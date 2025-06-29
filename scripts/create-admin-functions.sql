-- Admin Functions for Database Management
-- These functions provide safe admin operations

-- Function to check database health
CREATE OR REPLACE FUNCTION check_database_health()
RETURNS JSON AS $$
DECLARE
    result JSON;
    tables_count INTEGER;
    policies_count INTEGER;
    functions_count INTEGER;
    triggers_count INTEGER;
    total_rows INTEGER := 0;
    table_row_count INTEGER;
    health_status TEXT := 'healthy';
    issues TEXT[] := ARRAY[]::TEXT[];
BEGIN
    -- Count tables
    SELECT COUNT(*) INTO tables_count
    FROM information_schema.tables 
    WHERE table_schema = 'public'
        AND table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics');

    -- Count RLS policies
    SELECT COUNT(*) INTO policies_count
    FROM pg_policies
    WHERE schemaname = 'public'
        AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics');

    -- Count custom functions
    SELECT COUNT(*) INTO functions_count
    FROM information_schema.routines
    WHERE routine_schema = 'public'
        AND routine_name IN ('handle_new_user', 'handle_updated_at', 'update_user_analytics');

    -- Count triggers
    SELECT COUNT(*) INTO triggers_count
    FROM information_schema.triggers
    WHERE trigger_schema = 'public'
        AND event_object_table IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics');

    -- Count total rows across all tables
    SELECT COUNT(*) INTO table_row_count FROM public.profiles;
    total_rows := total_rows + table_row_count;
    
    SELECT COUNT(*) INTO table_row_count FROM public.ai_agents;
    total_rows := total_rows + table_row_count;
    
    SELECT COUNT(*) INTO table_row_count FROM public.ai_systems;
    total_rows := total_rows + table_row_count;
    
    SELECT COUNT(*) INTO table_row_count FROM public.chat_conversations;
    total_rows := total_rows + table_row_count;
    
    SELECT COUNT(*) INTO table_row_count FROM public.user_analytics;
    total_rows := total_rows + table_row_count;

    -- Check for issues
    IF tables_count < 5 THEN
        health_status := 'error';
        issues := array_append(issues, 'Missing required tables');
    END IF;

    IF policies_count < 15 THEN
        health_status := 'warning';
        issues := array_append(issues, 'Insufficient RLS policies');
    END IF;

    IF functions_count < 3 THEN
        health_status := 'warning';
        issues := array_append(issues, 'Missing custom functions');
    END IF;

    -- Build result JSON
    result := json_build_object(
        'status', health_status,
        'tables_count', tables_count,
        'total_rows', total_rows,
        'policies_count', policies_count,
        'functions_count', functions_count,
        'triggers_count', triggers_count,
        'issues', issues,
        'checked_at', NOW()
    );

    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to execute admin queries safely
CREATE OR REPLACE FUNCTION execute_admin_query(query TEXT)
RETURNS JSON AS $$
DECLARE
    result JSON;
    query_result RECORD;
    row_data JSON;
    results JSON[] := ARRAY[]::JSON[];
BEGIN
    -- Security check - only allow SELECT statements for safety
    IF UPPER(TRIM(query)) NOT LIKE 'SELECT%' THEN
        RETURN json_build_object(
            'success', false,
            'error', 'Only SELECT queries are allowed for security reasons'
        );
    END IF;

    -- Execute the query
    FOR query_result IN EXECUTE query LOOP
        row_data := row_to_json(query_result);
        results := array_append(results, row_data);
    END LOOP;

    result := json_build_object(
        'success', true,
        'data', results,
        'row_count', array_length(results, 1)
    );

    RETURN result;
EXCEPTION
    WHEN OTHERS THEN
        RETURN json_build_object(
            'success', false,
            'error', SQLERRM
        );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get table statistics
CREATE OR REPLACE FUNCTION get_table_statistics()
RETURNS TABLE(
    table_name TEXT,
    row_count BIGINT,
    table_size TEXT,
    index_size TEXT,
    total_size TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        t.table_name::TEXT,
        COALESCE(s.n_tup_ins - s.n_tup_del, 0) as row_count,
        pg_size_pretty(pg_total_relation_size(c.oid)) as table_size,
        pg_size_pretty(pg_indexes_size(c.oid)) as index_size,
        pg_size_pretty(pg_total_relation_size(c.oid) + pg_indexes_size(c.oid)) as total_size
    FROM information_schema.tables t
    LEFT JOIN pg_class c ON c.relname = t.table_name
    LEFT JOIN pg_stat_user_tables s ON s.relname = t.table_name
    WHERE t.table_schema = 'public'
        AND t.table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
    ORDER BY t.table_name;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get user activity summary
CREATE OR REPLACE FUNCTION get_user_activity_summary()
RETURNS TABLE(
    user_id UUID,
    email TEXT,
    total_chats BIGINT,
    total_agents BIGINT,
    total_systems BIGINT,
    last_activity TIMESTAMP WITH TIME ZONE,
    subscription_plan TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        p.id as user_id,
        p.email,
        COALESCE(chat_stats.chat_count, 0) as total_chats,
        COALESCE(agent_stats.agent_count, 0) as total_agents,
        COALESCE(system_stats.system_count, 0) as total_systems,
        GREATEST(
            p.updated_at,
            COALESCE(chat_stats.last_chat, p.created_at),
            COALESCE(agent_stats.last_agent, p.created_at),
            COALESCE(system_stats.last_system, p.created_at)
        ) as last_activity,
        p.subscription_plan
    FROM public.profiles p
    LEFT JOIN (
        SELECT 
            user_id,
            COUNT(*) as chat_count,
            MAX(updated_at) as last_chat
        FROM public.chat_conversations
        GROUP BY user_id
    ) chat_stats ON chat_stats.user_id = p.id
    LEFT JOIN (
        SELECT 
            user_id,
            COUNT(*) as agent_count,
            MAX(updated_at) as last_agent
        FROM public.ai_agents
        GROUP BY user_id
    ) agent_stats ON agent_stats.user_id = p.id
    LEFT JOIN (
        SELECT 
            user_id,
            COUNT(*) as system_count,
            MAX(updated_at) as last_system
        FROM public.ai_systems
        GROUP BY user_id
    ) system_stats ON system_stats.user_id = p.id
    ORDER BY last_activity DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to cleanup old data
CREATE OR REPLACE FUNCTION cleanup_old_data(days_old INTEGER DEFAULT 90)
RETURNS JSON AS $$
DECLARE
    deleted_conversations INTEGER := 0;
    deleted_analytics INTEGER := 0;
    result JSON;
BEGIN
    -- Delete old chat conversations (older than specified days)
    DELETE FROM public.chat_conversations 
    WHERE created_at < NOW() - INTERVAL '1 day' * days_old;
    
    GET DIAGNOSTICS deleted_conversations = ROW_COUNT;

    -- Delete old analytics data (keep monthly summaries, delete daily data older than 30 days)
    DELETE FROM public.user_analytics 
    WHERE period_type = 'daily' 
        AND period_start < NOW() - INTERVAL '30 days';
    
    GET DIAGNOSTICS deleted_analytics = ROW_COUNT;

    result := json_build_object(
        'success', true,
        'deleted_conversations', deleted_conversations,
        'deleted_analytics', deleted_analytics,
        'cleanup_date', NOW()
    );

    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permissions to authenticated users (admin check should be done in application)
GRANT EXECUTE ON FUNCTION check_database_health() TO authenticated;
GRANT EXECUTE ON FUNCTION execute_admin_query(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION get_table_statistics() TO authenticated;
GRANT EXECUTE ON FUNCTION get_user_activity_summary() TO authenticated;
GRANT EXECUTE ON FUNCTION cleanup_old_data(INTEGER) TO authenticated;

-- Success message
SELECT 'Admin functions created successfully!' as status;
