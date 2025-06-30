-- Create orchestrator_conversations table for Central Orchestrator chat data
CREATE TABLE IF NOT EXISTS public.orchestrator_conversations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    conversation_title TEXT DEFAULT 'Company Setup & Configuration',
    messages JSONB DEFAULT '[]'::jsonb,
    company_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.orchestrator_conversations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own orchestrator conversations" ON public.orchestrator_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orchestrator conversations" ON public.orchestrator_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own orchestrator conversations" ON public.orchestrator_conversations
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own orchestrator conversations" ON public.orchestrator_conversations
    FOR DELETE USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_orchestrator_conversations_updated_at
    BEFORE UPDATE ON public.orchestrator_conversations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS orchestrator_conversations_user_id_idx ON public.orchestrator_conversations(user_id);
CREATE INDEX IF NOT EXISTS orchestrator_conversations_created_at_idx ON public.orchestrator_conversations(created_at DESC);

-- Grant permissions
GRANT ALL ON public.orchestrator_conversations TO authenticated;
GRANT ALL ON public.orchestrator_conversations TO service_role;

-- Add comments for documentation
COMMENT ON TABLE public.orchestrator_conversations IS 'Stores Central Orchestrator chat conversations and company profile data';
COMMENT ON COLUMN public.orchestrator_conversations.messages IS 'JSONB array of chat messages between user and orchestrator';
COMMENT ON COLUMN public.orchestrator_conversations.company_data IS 'JSONB object containing extracted company information (name, industry, size, goals, challenges)';
