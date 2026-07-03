/**
 * useAgent Hook
 * React hook for fetching and managing individual agent state
 * Provides loading, error, and data states
 */

'use client';

import { useEffect, useState, useCallback } from 'react';
import { Agent, ErrorDetails } from '@/lib/types';
import AgentService from '@/lib/services/AgentService';

interface UseAgentState {
  agent: Agent | null;
  loading: boolean;
  error: ErrorDetails | null;
}

interface UseAgentReturn extends UseAgentState {
  retry: () => void;
}

/**
 * Hook to fetch and manage single agent
 * @param agentId - The UUID of the agent to fetch
 * @returns Agent data, loading state, error, and retry function
 */
export function useAgent(agentId?: string): UseAgentReturn {
  const [state, setState] = useState<UseAgentState>({
    agent: null,
    loading: false,
    error: null
  });

  const fetchAgent = useCallback(async () => {
    if (!agentId) return;

    setState(prev => ({ ...prev, loading: true, error: null }));

    const response = await AgentService.getAgent(agentId);

    if (response.success && response.data) {
      setState({
        agent: response.data,
        loading: false,
        error: null
      });
    } else if (response.error) {
      setState({
        agent: null,
        loading: false,
        error: response.error
      });
    }
  }, [agentId]);

  const retry = useCallback(() => {
    fetchAgent();
  }, [fetchAgent]);

  useEffect(() => {
    fetchAgent();
  }, [fetchAgent]);

  return {
    ...state,
    retry
  };
}

/**
 * Hook to fetch multiple agents
 * @param agentIds - Array of agent UUIDs
 * @returns Array of agents, loading state, error, and retry function
 */
export function useAgents(agentIds?: string[]) {
  const [state, setState] = useState<{
    agents: Agent[];
    loading: boolean;
    error: ErrorDetails | null;
  }>({
    agents: [],
    loading: false,
    error: null
  });

  const fetchAgents = useCallback(async () => {
    if (!agentIds || agentIds.length === 0) return;

    setState(prev => ({ ...prev, loading: true }));
    const response = await AgentService.batchGetAgents(agentIds);

    if (response.success && response.data) {
      setState({
        agents: response.data,
        loading: false,
        error: null
      });
    } else if (response.error) {
      setState({
        agents: [],
        loading: false,
        error: response.error
      });
    }
  }, [agentIds]);

  const retry = useCallback(() => {
    fetchAgents();
  }, [fetchAgents]);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  return {
    ...state,
    retry
  };
}

/**
 * Hook to fetch agents by type
 * @param type - Agent type: 'content', 'multimedia', 'operations', 'blockchain'
 */
export function useAgentsByType(type?: string) {
  const [state, setState] = useState<{
    agents: Agent[];
    loading: boolean;
    error: ErrorDetails | null;
  }>({
    agents: [],
    loading: false,
    error: null
  });

  const fetchAgents = useCallback(async () => {
    if (!type) return;

    setState(prev => ({ ...prev, loading: true }));
    const response = await AgentService.getAgentsByType(type);

    if (response.success && response.data) {
      setState({
        agents: response.data,
        loading: false,
        error: null
      });
    } else if (response.error) {
      setState({
        agents: [],
        loading: false,
        error: response.error
      });
    }
  }, [type]);

  const retry = useCallback(() => {
    fetchAgents();
  }, [fetchAgents]);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  return {
    ...state,
    retry
  };
}
