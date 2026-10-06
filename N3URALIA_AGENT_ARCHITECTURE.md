# N3uralia Agent Architecture

Status: Canonical organizational standard  
Owner: N3uralia Architecture  
Scope: All N3uralia vertical operating systems, decision-intelligence products and production AI  
Last reviewed: 2026-10-06

## 1. Decision

N3uralia products must treat AI as an operational layer inside governed business processes, not as a chatbot placed on top of application screens.

The canonical operating loop is:

~~~text
Evidence -> Decision -> Action -> Traceability
~~~

The canonical agent loop is:

~~~text
User intent
   |
   v
Role-aware Assistant
   |
   v
Specialized Agents
   |
   +--> Canonical data
   +--> Deterministic rules
   +--> Skills / tools / APIs
   +--> Cross-domain agents
   |
   v
Policy + authorization
   |
   v
Action / approval / recommendation
   |
   v
Evidence + audit + outcome measurement
~~~

This architecture applies to MOTIL, Property Partners Intelligence, ChileFlota, Black Swan Facility Core, PermisologIA, Sur Realista and future N3uralia products.

## 2. Why this standard exists

Enterprise AI becomes useful when it can understand role and process context, coordinate specialized capabilities, act through governed systems, and preserve evidence.

The architecture therefore separates:

1. The experience that understands the user's objective.
2. The specialists that perform domain work.
3. The canonical systems that own operational truth.
4. The policy layer that controls what may happen.
5. The evidence layer that proves what happened.
6. The telemetry layer that measures whether the automation creates value.

No language model, conversation history or agent memory may silently become the source of operational truth.

## 3. Core principles

### 3.1 Canonical data before AI

Agents reason over canonical operational records. If the canonical record does not exist, the system must either create it through an authorized workflow or explicitly report the gap.

Missing information is not zero.

### 3.2 Assistant is not Agent

An Assistant is the role-aware experience layer.

An Agent is a task-oriented execution specialist.

The Assistant may coordinate Agents, but it does not bypass their contracts, permissions or evidence requirements.

### 3.3 Deterministic rules stay deterministic

Thresholds, legal deadlines, financial calculations, authorization matrices, state machines, compliance rules and other deterministic logic must remain deterministic.

AI may explain, prioritize, summarize, propose and orchestrate deterministic logic. It must not replace it with probabilistic reasoning.

### 3.4 Human authority remains explicit

Consequential actions must have a defined authority model.

The system must know whether it may:

- observe;
- recommend;
- prepare;
- execute with approval;
- execute autonomously within bounded policy.

The absence of an approval policy never implies permission.

### 3.5 Every action is attributable

Every material recommendation or action must be linked to:

- actor;
- assistant;
- agent;
- inputs;
- source records;
- tools used;
- policy decision;
- timestamp;
- resulting state;
- evidence;
- outcome.

### 3.6 Automation must be recoverable

Retries must be bounded and idempotent. Failures must not silently duplicate work, payments, notifications, records or workflow transitions.

Every mutable automation must have a recovery path.

### 3.7 Cross-domain intelligence is a first-class capability

N3uralia products should not reproduce isolated ERP modules with separate AI chatbots.

Assistants may coordinate across maintenance, inventory, people, procurement, finance, HSE, legal, production and other domains when the user's objective legitimately spans them.

Cross-domain access must still respect data ownership and authorization.

## 4. Architectural layers

### 4.1 Experience Layer: Role-aware Assistants

A Role-aware Assistant is the user's primary operational interface.

Examples:

- Mine Manager Assistant
- Maintenance Assistant
- HSE Assistant
- Legal Assistant
- Procurement Assistant
- Property Director Assistant
- Fleet Executive Assistant

An Assistant must know:

- the authenticated user;
- the user's role and organizational scope;
- the current entity or workspace;
- the business process being performed;
- relevant pending work;
- which Agents are allowed to participate;
- which actions require approval;
- what evidence must remain visible.

An Assistant should reduce navigation burden. Users should be able to express the outcome they need and receive an adaptive workspace containing the relevant data, actions and decisions.

An Assistant must not become a hidden superuser.

### 4.2 Execution Layer: Specialized Agents

Agents are specialists with bounded responsibility.

A good Agent has:

- one clear domain objective;
- explicit inputs and outputs;
- defined tools;
- defined data scope;
- a bounded action set;
- success and failure conditions;
- approval requirements;
- evidence requirements;
- observability;
- measurable outcome metrics.

Examples:

- Work Order Agent
- Preventive Maintenance Agent
- Reliability Agent
- Parts Availability Agent
- Contract Deadline Agent
- Mining Property Agent
- Incident Agent
- Supplier Agent
- Valuation Comparable Agent
- Certificate Review Agent

Agents may collaborate, but no Agent may acquire new authority merely because another Agent requested it.

### 4.3 Canonical Data Layer

Canonical data is the operational source of truth.

Typical canonical entities include:

- people;
- organizations;
- roles;
- assets;
- work orders;
- documents;
- contracts;
- properties;
- vehicles;
- suppliers;
- inventory items;
- maintenance plans;
- incidents;
- bookings;
- valuations;
- certificates;
- tasks;
- approvals;
- costs;
- production events.

Every canonical entity should have a stable identity, timestamps, source lineage and lifecycle state.

Ficha 360 is the preferred N3uralia presentation pattern when one operational entity needs to consolidate its complete state, history, costs, documents, actions and evidence.

### 4.4 Deterministic Rules Layer

This layer owns logic that must be reproducible.

Examples:

- RBAC and ABAC;
- workflow state transitions;
- required signatures;
- due-date calculations;
- maintenance intervals;
- stock constraints;
- approval thresholds;
- legal deadlines;
- compliance status;
- score formulas when formally defined;
- financial calculations;
- data-quality constraints.

Agents call these rules. They do not improvise replacements for them.

### 4.5 Skills, Tools and Integration Layer

Agents interact with systems through typed, auditable capabilities.

Capability types include:

- internal services;
- database functions;
- REST or GraphQL APIs;
- document services;
- search and retrieval;
- messaging;
- calendars;
- email;
- ERP/CRM integrations;
- browser automation;
- MCP servers;
- Agent-to-Agent adapters;
- external domain data providers.

Each capability must define:

- input schema;
- output schema;
- authentication model;
- authorization model;
- timeout;
- retry policy;
- idempotency behavior;
- side effects;
- audit metadata.

MCP and Agent-to-Agent protocols are interoperability mechanisms, not authority mechanisms. Authorization remains inside N3uralia policy boundaries.

### 4.6 Policy and Authorization Layer

Authorization is evaluated before action, not after generation.

The runtime must propagate identity and scope from the authenticated human or approved service principal.

The policy decision should consider:

- actor;
- role;
- organization;
- asset/property/project scope;
- requested action;
- data sensitivity;
- current workflow state;
- monetary or operational impact;
- required approvers;
- environmental constraints;
- autonomy level.

A model recommendation cannot override a policy denial.

### 4.7 Evidence and Audit Layer

Every consequential workflow must emit an evidence record.

Minimum evidence envelope:

~~~yaml
event_id: uuid
timestamp: ISO-8601
product: motil
environment: production
actor:
  user_id: uuid
  role: maintenance_lead
assistant:
  id: maintenance-assistant
  version: 1.0.0
agent:
  id: work-order-agent
  version: 1.2.0
intent: close_work_order
entity:
  type: work_order
  id: OT-1234
inputs:
  canonical_refs: []
  document_refs: []
  external_refs: []
policy:
  decision: allow
  rule_ids: []
  approvals: []
execution:
  tool_calls: []
  idempotency_key: string
result:
  state_before: in_progress
  state_after: completed
  status: success
evidence:
  attachments: []
  observations: []
  generated_artifacts: []
metrics:
  latency_ms: 0
  model_cost_usd: 0
~~~

The exact storage implementation may vary by product, but the semantic fields must remain recoverable.

### 4.8 Observability and Value Layer

Agent observability is not limited to model traces.

N3uralia must measure:

Operational reliability:
- success rate;
- failure rate;
- retries;
- latency;
- policy denials;
- approval wait time;
- human corrections;
- rollback or recovery events.

Business value:
- cycle time reduced;
- manual handoffs removed;
- avoided downtime;
- prevented compliance misses;
- recovered revenue;
- stockouts avoided;
- hours saved;
- cost reduced;
- decision time reduced.

Quality:
- recommendation acceptance;
- false positive rate;
- false negative rate;
- data-quality dependency failures;
- grounding coverage;
- evidence completeness.

An Agent without an observable outcome should not be promoted to high autonomy.

## 5. Autonomy model

All executable agent capabilities must declare an autonomy level.

| Level | Name | Behavior |
|---|---|---|
| A0 | Observe | Reads and explains only. No mutation. |
| A1 | Recommend | Produces recommendations and proposed next actions. |
| A2 | Prepare | Creates drafts, plans or pending actions without committing the final state. |
| A3 | Execute with approval | Performs the mutation only after an authorized approval. |
| A4 | Bounded autonomy | Executes without per-action approval only inside explicit policy, scope and limits. |

A4 is never a default.

Promotion from A2/A3 to A4 requires evidence of reliability, bounded blast radius, rollback or compensation behavior, and measurable value.

## 6. Standard Assistant contract

Every Role-aware Assistant must define:

~~~yaml
id: maintenance-assistant
name: Maintenance Assistant
product: motil
roles:
  - maintenance_manager
  - workshop_lead
scope:
  organization: required
  site: required
  asset: optional
objectives:
  - keep_assets_available
  - coordinate_work_orders
  - prevent_overdue_maintenance
agents:
  - work-order-agent
  - preventive-maintenance-agent
  - reliability-agent
  - parts-availability-agent
  - evidence-agent
cross_domain_agents:
  - procurement-agent
  - people-availability-agent
default_autonomy: A2
allowed_autonomy:
  - A0
  - A1
  - A2
  - A3
workspace:
  intent_driven: true
  evidence_visible: true
  pending_work_visible: true
~~~

## 7. Standard Agent contract

Every production Agent must declare an explicit contract.

~~~yaml
id: work-order-agent
version: 1.2.0
product: motil
domain: maintenance

purpose:
  objective: Coordinate the lifecycle of a maintenance work order.
  non_goals:
    - modify_asset_ownership
    - override_safety_lockout
    - approve_own_exception

inputs:
  required:
    - work_order_id
    - actor_id
  optional:
    - observation
    - attachment_ids

canonical_entities:
  read:
    - work_order
    - asset
    - person
    - inventory_item
  write:
    - work_order
    - work_order_event
    - work_order_evidence

tools:
  - get_work_order
  - validate_transition
  - check_parts
  - record_pause
  - attach_evidence
  - close_work_order

policy:
  default_autonomy: A2
  close_work_order: A3
  destructive_actions: denied

evidence:
  required_for_close:
    - executor_identity
    - elapsed_time
    - completion_observation
    - photo_or_equivalent_evidence

quality:
  idempotency_required: true
  canonical_grounding_required: true
  unsupported_claims_forbidden: true

metrics:
  - cycle_time
  - reopen_rate
  - closure_failure_rate
  - evidence_completeness
~~~

Agent contracts should be machine-readable where practical and validated in CI for products with material agent execution.

## 8. Runtime orchestration

The preferred runtime sequence is:

~~~text
1. Authenticate actor
2. Resolve role and operational scope
3. Resolve user intent
4. Load canonical context
5. Select Assistant
6. Assistant selects permitted Agent(s)
7. Agent plans bounded work
8. Policy checks requested capabilities
9. Execute tools
10. Validate resulting state
11. Persist evidence
12. Return outcome and next action
13. Emit telemetry
~~~

Steps 8 through 11 are mandatory for mutable operations.

### 8.1 Planning boundaries

Agent planning must happen inside a bounded capability graph.

The runtime should prefer explicit capabilities over arbitrary code execution.

### 8.2 Cross-agent handoffs

Every handoff must include structured context:

~~~yaml
handoff_id: uuid
from_agent: preventive-maintenance-agent
to_agent: parts-availability-agent
objective: verify_required_parts
entity_refs:
  - asset:EXC-01
  - maintenance_plan:PM-442
requested_output:
  - availability
  - shortages
  - expected_replenishment
authority:
  mutation_allowed: false
trace_id: uuid
~~~

Agents must not rely on undocumented conversational context for critical handoffs.

### 8.3 Long-running workflows

Long-running work should be represented as durable workflow state, not as an open model session.

The system should persist:

- current step;
- waiting condition;
- owner;
- due date;
- approvals;
- retries;
- last successful transition;
- next permitted transitions.

## 9. Memory model

N3uralia distinguishes four memory classes.

1. Canonical operational memory: database records and approved documents.
2. Workflow memory: durable process state.
3. Retrieval memory: indexed material used for contextual grounding.
4. Conversational memory: convenience context for interaction.

Only classes 1 and 2 may determine operational state.

Retrieval and conversational memory may inform reasoning, but must never silently mutate canonical truth.

## 10. Data quality gate

Before an Agent executes a consequential action, it should verify that its critical inputs meet the required quality threshold.

Examples:

- asset identity is not ambiguous;
- responsible person exists and is active;
- document version is canonical;
- deadline has a source date;
- financial amount has currency;
- property comparable has provenance;
- supplier identity is deduplicated;
- required photo/evidence exists.

If critical data is missing, the Agent should create or route a data-quality task instead of inventing the value.

## 11. Failure model

Agents must fail explicitly.

Standard failure classes:

- AUTHORIZATION_DENIED
- CANONICAL_DATA_MISSING
- CANONICAL_DATA_CONFLICT
- INVALID_STATE_TRANSITION
- APPROVAL_REQUIRED
- TOOL_TIMEOUT
- TOOL_UNAVAILABLE
- EXTERNAL_SYSTEM_ERROR
- EVIDENCE_REQUIRED
- POLICY_BLOCKED
- RETRY_EXHAUSTED
- HUMAN_REVIEW_REQUIRED

A failure must not be returned as a fabricated success narrative.

## 12. Security requirements

Production agent systems must:

- use least privilege;
- keep secrets server-side;
- never expose privileged credentials to prompts or browser bundles;
- validate all tool inputs and outputs;
- bound external requests;
- apply rate limits and concurrency limits;
- protect against prompt-based privilege escalation;
- separate read and write capabilities;
- log policy decisions without leaking secrets;
- use scoped service identities for background workflows;
- verify tenant and organization boundaries on every consequential operation.

## 13. Product UX standard

The preferred user experience is outcome-oriented rather than module-oriented.

Instead of requiring:

~~~text
Open Maintenance -> Find Asset -> Find Plan -> Find Work Order -> Check Stock -> Contact Procurement
~~~

the user should be able to request:

~~~text
Prepare EXC-01 for tomorrow's 08:00 shift.
~~~

The Assistant may then produce an adaptive workspace containing:

- asset status;
- open maintenance;
- required work;
- parts availability;
- assigned people;
- risks;
- approvals;
- executable actions;
- supporting evidence.

The underlying modules remain important. The Assistant is a governed orchestration surface over them.

## 14. MOTIL reference implementation

MOTIL is the primary reference implementation for this architecture because its operating model naturally crosses assets, people, work, materials, production, cost, risk, HSE and legal obligations.

### 14.1 Assistant map

~~~text
MOTIL Operational Assistant
|
+-- Mine Manager Assistant
|   +-- Production Agent
|   +-- Cost Agent
|   +-- Risk Agent
|   +-- Planning Agent
|
+-- Maintenance Assistant
|   +-- Work Order Agent
|   +-- Preventive Maintenance Agent
|   +-- Reliability Agent
|   +-- Parts Availability Agent
|   +-- Evidence Agent
|
+-- HSE Assistant
|   +-- Compliance Agent
|   +-- Incident Agent
|   +-- HSE Calendar Agent
|
+-- Legal Assistant
|   +-- Contract Agent
|   +-- Deadline Agent
|   +-- Mining Property Agent
|   +-- Document Agent
|
+-- People Assistant
|   +-- Skills Agent
|   +-- Availability Agent
|   +-- Training Agent
|   +-- Authorization Agent
|
+-- Procurement Assistant
    +-- Supplier Agent
    +-- Stock Agent
    +-- Purchase Agent
    +-- Invoice Agent
~~~

### 14.2 Example cross-domain objective

User objective:

~~~text
Can EXC-01 operate safely tomorrow at 08:00?
~~~

Expected orchestration:

1. Asset Agent resolves the canonical asset.
2. Maintenance Agent checks open and overdue work.
3. Evidence Agent verifies closure evidence on recent critical work.
4. Parts Agent checks shortages that could block maintenance.
5. People Agent checks qualified personnel and shift availability.
6. HSE Agent checks active restrictions or required controls.
7. Production Agent checks planned operational demand.
8. Policy layer determines whether the result is advisory or may update operational clearance.
9. Assistant returns a concise readiness state, blockers, evidence and authorized next actions.

This is the target N3uralia pattern: one operational objective, multiple governed specialists, one traceable result.

## 15. Adoption requirements for every N3uralia product

A product may claim compliance with the N3uralia Agent Architecture only when it has:

- a canonical data model;
- authenticated identity;
- explicit authorization;
- at least one role-aware Assistant definition;
- bounded Agent contracts;
- typed tool capabilities;
- deterministic rule boundaries;
- an evidence model;
- a durable workflow model for long-running work;
- standard failure semantics;
- observability;
- business outcome metrics;
- approval gates for consequential actions;
- recovery behavior for mutable automation.

A chatbot with database access is not compliant by itself.

## 16. Maturity model

### Stage 0 — Chat

Natural-language interface over information.

### Stage 1 — Grounded Assistant

Reads canonical data and produces traceable answers.

### Stage 2 — Coordinated Agents

Assistant coordinates bounded specialists.

### Stage 3 — Governed Execution

Agents prepare or execute actions through policy and approvals.

### Stage 4 — Cross-domain Operations

Agents coordinate across operational domains using durable workflows.

### Stage 5 — Bounded Autonomous Operations

Selected workflows execute autonomously inside measurable, recoverable and auditable policy boundaries.

Products should advance by workflow, not by declaring the entire product autonomous.

## 17. Anti-patterns

Do not:

- create one giant Agent with access to every tool;
- use chat history as the operational database;
- grant agents service-role access by default;
- allow an agent to approve its own exception;
- hide source evidence behind generated summaries;
- replace deterministic rules with LLM judgement;
- execute mutations without idempotency where duplication matters;
- silently retry destructive operations;
- let cross-domain orchestration bypass domain permissions;
- optimize for number of agents rather than operational value;
- call a workflow autonomous when humans still perform invisible manual recovery;
- invent metrics, sources or canonical state.

## 18. Engineering gates

For any Agent that can mutate operational state, release requires:

1. Contract review.
2. Authorization tests, including negative cases.
3. Canonical-data validation.
4. Idempotency test.
5. Failure-path test.
6. Evidence persistence test.
7. Audit trace verification.
8. Relevant lint/typecheck/test/build gates.
9. Preview or staging workflow validation where available.
10. Production observability and rollback/compensation readiness.

## 19. KPI and ROI contract

Each production Agent should declare at least one operational KPI and one business-value hypothesis.

Example:

~~~yaml
agent: preventive-maintenance-agent
operational_kpis:
  - overdue_pm_rate
  - schedule_adherence
quality_kpis:
  - false_block_rate
  - human_override_rate
business_value:
  hypothesis: Reduce unplanned downtime by identifying and coordinating overdue preventive maintenance.
  measurement_window: monthly
~~~

If value cannot be measured directly, define a defensible proxy before increasing autonomy.

## 20. Interoperability policy

N3uralia supports open interoperability where it improves operations.

Preferred integration sequence:

1. Native typed internal capability.
2. Stable external API.
3. MCP capability when it provides a governed reusable tool boundary.
4. Agent-to-Agent adapter when another trusted agent system owns the specialist workflow.
5. Browser automation only when a supported API is unavailable and the workflow can be made reliable.

External agents never inherit unrestricted access to N3uralia canonical systems.

## 21. Relationship to AGENTS.md and the Agent Quality Layer

This document defines the runtime and product architecture for operational agents.

AGENTS.md defines repository-specific engineering rules for coding agents.

AGENT_QUALITY_LAYER.md and ORG_STANDARD_QUALITY_LAYER.md define automated repository quality gates.

These layers complement each other:

~~~text
Operational Agent Architecture
        |
        +--> governs product assistants, agents and actions

Repository Agent Standards
        |
        +--> governs coding agents working on the product

Quality Layer
        |
        +--> enforces code and release standards
~~~

## 22. External validation

This architecture is N3uralia's own operating standard. It is not dependent on SAP.

SAP's 2026 Autonomous Enterprise direction independently validates several of the same architectural patterns: role-aware assistants, specialized execution agents, intent-driven workspaces, governed access to business data, human-controlled autonomy, auditability and cross-functional orchestration.

References:

- The New Stack, "There is just not a room for error: SAP is putting its AI agents in the back office", 2026-10-06.
- SAP News Center, "SAP Puts the Autonomous Enterprise to Work", 2026-10-06.
- SAP, Joule Agents and Joule Assistants.
- SAP Business AI release highlights, Q2 2026.

N3uralia's differentiation is to implement this pattern as focused vertical operating systems with canonical domain models, faster deployment and tighter operational context.

## 23. Architecture test

Before adding any agent capability, answer these questions:

1. What user role owns the objective?
2. Which Assistant receives the intent?
3. Which bounded Agent owns the specialist task?
4. Which canonical records ground the task?
5. Which deterministic rules constrain it?
6. Which tools may the Agent use?
7. Which actions are read, prepare, approve or execute?
8. Which policy decides authorization?
9. What evidence is produced?
10. How is failure represented?
11. How is the workflow recovered?
12. Which KPI proves that the capability is useful?

If these questions do not have concrete answers, the feature is not ready for production autonomy.

## 24. Canonical summary

N3uralia agent systems follow this rule:

~~~text
Intent
  -> Role context
  -> Canonical evidence
  -> Specialized reasoning
  -> Deterministic constraints
  -> Authorization
  -> Action
  -> Evidence
  -> Outcome
  -> Learning through measured system improvement
~~~

The model may reason.

The system must govern.

The canonical record decides what is true.

Authorized humans and explicit policy decide what may happen.
