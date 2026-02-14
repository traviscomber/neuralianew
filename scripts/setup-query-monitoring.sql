-- ===== PHASE 5: CONFIGURE QUERY PERFORMANCE MONITORING =====
-- This script sets up query monitoring and enables Supabase query logs

-- Enable query logging for performance analysis
ALTER SYSTEM SET log_min_duration_statement = 100; -- Log queries > 100ms
ALTER SYSTEM SET log_statement = 'all'; -- Log all statements
ALTER SYSTEM SET log_connections = on; -- Log connection events
ALTER SYSTEM SET log_disconnections = on; -- Log disconnection events

-- Create a monitoring function to track slow queries
CREATE OR REPLACE FUNCTION public.get_slow_queries()
RETURNS TABLE(
  query text,
  calls bigint,
  avg_time numeric,
  max_time numeric,
  min_time numeric
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    query,
    calls,
    ROUND(mean_exec_time::numeric, 2) as avg_time,
    ROUND(max_exec_time::numeric, 2) as max_time,
    ROUND(min_exec_time::numeric, 2) as min_time
  FROM pg_stat_statements
  WHERE mean_exec_time > 10 -- Queries averaging > 10ms
  ORDER BY mean_exec_time DESC
  LIMIT 50;
$$;

-- Create a function to get table statistics
CREATE OR REPLACE FUNCTION public.get_table_stats()
RETURNS TABLE(
  table_name text,
  total_rows bigint,
  live_rows bigint,
  dead_rows bigint,
  last_vacuum timestamp,
  last_analyze timestamp
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    relname::text as table_name,
    n_live_tup as total_rows,
    n_live_tup as live_rows,
    n_dead_tup as dead_rows,
    last_vacuum::timestamp,
    last_analyze::timestamp
  FROM pg_stat_user_tables
  ORDER BY n_live_tup DESC;
$$;

-- Create a function to monitor index efficiency
CREATE OR REPLACE FUNCTION public.get_index_efficiency()
RETURNS TABLE(
  index_name text,
  table_name text,
  index_size text,
  index_scans bigint,
  index_tup_read bigint,
  index_tup_fetch bigint
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    i.relname::text as index_name,
    t.relname::text as table_name,
    pg_size_pretty(pg_relation_size(i.oid))::text as index_size,
    idx_scan as index_scans,
    idx_tup_read as index_tup_read,
    idx_tup_fetch as index_tup_fetch
  FROM pg_stat_user_indexes psi
  JOIN pg_class i ON psi.indexrelid = i.oid
  JOIN pg_class t ON psi.relid = t.oid
  ORDER BY idx_scan DESC;
$$;

-- Create a cache statistics function
CREATE OR REPLACE FUNCTION public.get_cache_hit_ratio()
RETURNS TABLE(
  database_name text,
  cache_hit_ratio numeric,
  heap_hits bigint,
  heap_reads bigint
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    datname::text as database_name,
    ROUND((sum(heap_blks_hit) / (sum(heap_blks_hit) + sum(heap_blks_read)))::numeric * 100, 2) as cache_hit_ratio,
    sum(heap_blks_hit) as heap_hits,
    sum(heap_blks_read) as heap_reads
  FROM pg_statio_user_tables
  GROUP BY datname;
$$;

-- Grant permissions to monitoring functions
GRANT EXECUTE ON FUNCTION public.get_slow_queries() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_table_stats() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_index_efficiency() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_cache_hit_ratio() TO anon, authenticated;

-- Final confirmation
SELECT 'Query Performance Monitoring Configured Successfully' as status;
