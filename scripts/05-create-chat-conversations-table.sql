-- Create Chat Conversations table for storing chat history

-- Drop existing table and policies if they exist
DROP POLICY IF EXISTS "Users can view own conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Users can create own conversations" ON public.chat_conversations;
DROP POLICY IF EXISTS "Users can update own conversations" ON public.chat_conversations;
DROP TABLE IF EXISTS public.chat_conversations;

CREATE TABLE public.chat_conversations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    
    -- Conversation Details
    chat_type TEXT NOT NULL,
    specific_agent TEXT,
    title TEXT,
    
    -- Messages
    messages JSONB DEFAULT '[]',
    message_count INTEGER DEFAULT 0,
    
    -- Metrics
    duration_seconds INTEGER DEFAULT 0,
    satisfaction_rating INTEGER,
    resolved BOOLEAN DEFAULT false,
    escalated BOOLEAN DEFAULT false,
    
    -- Metadata
    started_at TIMESTAMPTZ DEFAULT NOW(),
    ended_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add CHECK constraints after table creation
ALTER TABLE public.chat_conversations ADD CONSTRAINT chat_conversations_chat_type_check 
    CHECK (chat_type IN ('agent', 'system', 'general'));

ALTER TABLE public.chat_conversations ADD CONSTRAINT chat_conversations_satisfaction_rating_check 
    CHECK (satisfaction_rating >= 1 AND satisfaction_rating <= 5);

-- Enable Row Level Security
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own conversations" ON public.chat_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own conversations" ON public.chat_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations" ON public.chat_conversations
    FOR UPDATE USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX chat_conversations_user_id_idx ON public.chat_conversations(user_id);
CREATE INDEX chat_conversations_chat_type_idx ON public.chat_conversations(chat_type);
CREATE INDEX chat_conversations_started_at_idx ON public.chat_conversations(started_at);

-- Grant permissions
GRANT ALL ON public.chat_conversations TO authenticated;
GRANT ALL ON public.chat_conversations TO service_role;

-- Success message
SELECT 'Chat Conversations table created successfully!' as status;
