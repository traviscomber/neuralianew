-- Check if payment-related tables exist
SELECT table_name, table_schema 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('subscriptions', 'payments', 'billing_history', 'payment_methods');

-- Check profiles table for billing fields
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'profiles' 
AND table_schema = 'public'
AND column_name LIKE '%billing%' OR column_name LIKE '%subscription%' OR column_name LIKE '%payment%';

-- Check if we have any subscription data
SELECT subscription_plan, subscription_status, COUNT(*) as count
FROM public.profiles 
GROUP BY subscription_plan, subscription_status;
