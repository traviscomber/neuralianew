-- ===== PHASE 5: CONFIGURE QUERY PERFORMANCE MONITORING =====
-- This script creates monitoring functions for Supabase database performance analysis
-- Note: ALTER SYSTEM commands require Supabase dashboard configuration (not executable in transactions)

-- Create a monitoring function to track table statistics
CREATE OR REPLACE FUNCTION public.get_table_stats()
RETURNS TABLE(
  table_name text,
  total_rows bigint,
  live_rows bigint,
  dead_rows bigint,
  table_size text,
  last_vacuum timestamp,
  last_analyze timestamp
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    pst.relname::text as table_name,
    n_live_tup as total_rows,
    n_live_tup as live_rows,
    n_dead_tup as dead_rows,
    pg_size_pretty(pg_total_relation_size(pst.relid))::text as table_size,
    last_vacuum::timestamp,
    last_analyze::timestamp
  FROM pg_stat_user_tables pst
  ORDER BY n_live_tup DESC;
$$;

-- Create a function to monitor index statistics
CREATE OR REPLACE FUNCTION public.get_index_stats()
RETURNS TABLE(
  index_name text,
  table_name text,
  index_size text,
  index_scans bigint,
  index_rows_read bigint,
  index_rows_fetched bigint
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
    idx_tup_read as index_rows_read,
    idx_tup_fetch as index_rows_fetched
  FROM pg_stat_user_indexes psi
  JOIN pg_class i ON psi.indexrelid = i.oid
  JOIN pg_class t ON psi.relid = t.oid
  WHERE idx_scan > 0
  ORDER BY idx_scan DESC;
$$;

-- Create a cache statistics function
CREATE OR REPLACE FUNCTION public.get_cache_stats()
RETURNS TABLE(
  table_name text,
  heap_size text,
  heap_blks_read bigint,
  heap_blks_hit bigint,
  cache_hit_ratio numeric
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    pst.relname::text as table_name,
    pg_size_pretty(pg_total_relation_size(pst.relid))::text as heap_size,
    heap_blks_read,
    heap_blks_hit,
    CASE WHEN (heap_blks_hit + heap_blks_read) = 0 THEN 0 
         ELSE ROUND((heap_blks_hit::numeric / (heap_blks_hit + heap_blks_read))::numeric * 100, 2)
    END as cache_hit_ratio
  FROM pg_statio_user_tables pst
  ORDER BY (heap_blks_hit + heap_blks_read) DESC;
$$;

-- Create a function to find unused indexes
CREATE OR REPLACE FUNCTION public.get_unused_indexes()
RETURNS TABLE(
  index_name text,
  table_name text,
  index_size text,
  index_type text
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    i.relname::text as index_name,
    t.relname::text as table_name,
    pg_size_pretty(pg_relation_size(i.oid))::text as index_size,
    am.amname::text as index_type
  FROM pg_stat_user_indexes psi
  JOIN pg_class i ON psi.indexrelid = i.oid
  JOIN pg_class t ON psi.relid = t.oid
  JOIN pg_am am ON i.relam = am.oid
  WHERE idx_scan = 0 
  AND i.relname NOT LIKE 'pg_toast%'
  ORDER BY pg_relation_size(i.oid) DESC;
$$;

-- Create a function to check table bloat
CREATE OR REPLACE FUNCTION public.get_table_bloat()
RETURNS TABLE(
  table_name text,
  total_size text,
  dead_ratio numeric,
  last_vacuum timestamp,
  needs_vacuum boolean
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    pst.relname::text as table_name,
    pg_size_pretty(pg_total_relation_size(pst.relid))::text as total_size,
    CASE WHEN (n_live_tup + n_dead_tup) = 0 THEN 0
         ELSE ROUND((n_dead_tup::numeric / (n_live_tup + n_dead_tup))::numeric * 100, 2)
    END as dead_ratio,
    last_vacuum::timestamp,
    (n_dead_tup > n_live_tup * 0.1) as needs_vacuum
  FROM pg_stat_user_tables pst
  ORDER BY n_dead_tup DESC;
$$;

-- Grant permissions to monitoring functions
GRANT EXECUTE ON FUNCTION public.get_table_stats() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_index_stats() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_cache_stats() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_unused_indexes() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_table_bloat() TO anon, authenticated;

-- Final confirmation
SELECT 'Query Performance Monitoring Successfully Configured' as status;
