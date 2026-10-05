# N3uralia Data Intelligence Contract v1

Status: proposed standard  
Scope: all N3uralia operational products and agents  
Owner: N3uralia engineering  
Version: 1.0

## 1. Purpose

N3uralia systems must distinguish operational truth from evidence, derived intelligence, AI output, and user/agent memory.

The common lifecycle is:

```
Source -> Evidence -> Canonical State -> Decision Context -> AI/Rules
       -> Human/System Decision -> Action -> Outcome -> Feedback
```

Every consequential answer or action must be reconstructable from the inputs, transformations, versions, authorization context, and decision record that produced it.

This contract standardizes semantics. It does not require every product to use identical physical table names.

## 2. Non-negotiable rules

1. Canonical business state is never silently replaced by scraped, inferred, AI-generated, or stale external data.
2. Evidence may support promotion into canonical state, but promotion requires an explicit rule or authorized human/system decision.
3. Missing data is not zero, false, empty, or negative evidence by default.
4. Event time and processing time are separate concepts.
5. Derived data and AI output always retain provenance and version information.
6. Agent memory is non-canonical context. It must not become a hidden source of operational truth.
7. Authorization is part of data readiness, not a UI concern.
8. Consequential AI output must be reproducible enough to explain what sources, versions, rules, and model produced it.
9. Projections, search indexes, embeddings, caches, and analytics are rebuildable copies unless explicitly designated otherwise.
10. Every product must expose a Data Readiness Gate before consequential AI reasoning or action.

## 3. Data classes

### 3.1 Canonical business state

The current authoritative business fact inside a product.

Examples: an approved maintenance order state, a verified driver/document status, an approved valuation, a canonical KMZ record, an accepted booking state.

Required semantics:

- stable entity identity;
- explicit ownership/tenant boundary;
- lifecycle state;
- version or update timestamp;
- authoritative write path;
- auditability for consequential changes.

### 3.2 Source evidence

An observation from a source. Evidence can agree with, enrich, contradict, or become stale relative to canonical state.

Minimum logical fields:

```text
evidence_id
source_id
source_type
source_ref
subject_type
subject_id
field_name
value
authority
observed_at
effective_at
ingested_at
source_version
transformation_version
confidence
quality_flags
verification_status
fingerprint
supersedes
created_at
```

Not every field must be a physical column. The product must be able to reconstruct the equivalent semantics.

### 3.3 Derived intelligence

Scores, classifications, summaries, matches, forecasts, embeddings, rankings, recommendations, or other computed values.

Derived intelligence must declare:

- canonical/evidence inputs;
- algorithm, rule, parser, prompt, or transformation version;
- generated_at;
- confidence/quality metadata when meaningful;
- rebuild/reprocessing strategy;
- whether human approval is required before promotion or action.

### 3.4 Agent memory

Governed memory is stable context that improves interaction, not operational truth.

Allowed examples:

- user preferences;
- terminology;
- stable responsibilities;
- stable working context.

Forbidden as memory-only truth:

- current document status;
- ownership;
- current price;
- current maintenance state;
- live market data;
- approvals;
- compliance state;
- active booking state;
- any fact whose correctness depends on current canonical data.

Memory must include:

```text
memory_id
actor_or_scope_id
scope
memory_type
memory_text_or_value
confidence
source_or_reason
created_at
updated_at
expires_at
active
```

## 4. Time model

N3uralia systems must not collapse all timestamps into `created_at`.

Use these meanings where applicable:

- `observed_at`: when the source observation was true or captured.
- `effective_at`: when the represented business fact became effective.
- `ingested_at`: when N3uralia received the observation.
- `created_at`: when the local record was created.
- `updated_at`: when the local record last changed.
- `verified_at`: when an authorized verifier accepted/rejected it.
- `superseded_at`: when a newer fact/evidence replaced it.

Training, analytics, and decisions must use the information that was available at the decision timestamp. Future information must never leak backward into a historical decision reconstruction.

## 5. Missingness contract

Unknown values must carry a reason when the distinction matters.

Preferred logical states:

- `unknown`
- `not_collected`
- `unavailable`
- `not_applicable`
- `pending_review`
- `redacted`

Applications must not silently convert these states to zero, false, empty string, or "not present".

## 6. Authority model

Recommended authority classes:

- `canonical`: authoritative product-owned business state.
- `official`: official external source, still evidence until promoted.
- `verified_external`: external evidence reviewed/verified by a trusted process.
- `derived`: deterministic or statistical computation.
- `ai_generated`: LLM/model-generated interpretation.
- `memory`: governed context, never canonical by itself.

When sources conflict, the product must use an explicit resolution policy. "Latest row wins" is not a valid universal conflict rule.

## 7. Verification model

Recommended verification states:

- `unverified`
- `verified`
- `rejected`
- `superseded`
- `pending_review`

Verification must record actor/system, timestamp, and reason when consequential.

## 8. Data Readiness Gate

Before consequential AI reasoning or action, evaluate:

1. Identity resolution
2. Schema validation
3. Freshness
4. Completeness / missingness
5. Temporal consistency
6. Provenance
7. Contradictions
8. Authorization / visibility
9. Canonical selection

The gate returns:

```text
status: ready | limited | blocked
score: 0..100
checks[]
warnings[]
blockers[]
evaluated_at
policy_version
```

Interpretation:

- `ready`: required evidence and authorization are sufficient.
- `limited`: reasoning may continue, but uncertainty must be visible and consequential actions may require review.
- `blocked`: the system must not present the result as authoritative or execute the consequential action.

The gate must fail closed for authorization failures.

## 9. Decision record

Consequential decisions should retain a compact immutable snapshot or references sufficient to reconstruct the decision.

Logical shape:

```text
decision_id
decision_type
subject_type
subject_id
actor_id
status
input_snapshot_or_refs
evidence_refs
canonical_version_refs
rule_version
prompt_version
model_provider
model_name
model_version
output
confidence
human_review_status
decided_at
created_at
```

Model output must not overwrite canonical state directly unless a separately authorized promotion/action contract exists.

## 10. Lineage and fingerprinting

Every ingest or transformation path that can retry must be idempotent.

Use stable fingerprints over the source identity plus the semantic payload needed to distinguish revisions.

Lineage must answer:

- where did this value come from?
- which source version was used?
- which parser/rule/model transformed it?
- which prior record did it supersede?
- which decision/action consumed it?

## 11. Promotion into canonical state

Evidence promotion must be explicit:

```
evidence observed
-> validation
-> contradiction check
-> policy/rule evaluation
-> human/system authority
-> canonical write
-> audit event
```

No scraper, enrichment job, vector retrieval, or LLM call may silently promote a value into canonical state.

## 12. AI grounding envelope

Agents should receive a structured grounding envelope rather than raw mixed records.

Minimum envelope:

```json
{
  "subject": {"type": "...", "id": "..."},
  "canonical": [],
  "evidence": [],
  "derived": [],
  "memory": [],
  "readiness": {
    "status": "ready",
    "score": 100,
    "warnings": [],
    "blockers": []
  },
  "decisionTime": "ISO-8601"
}
```

Canonical, evidence, derived values, and memory must remain distinguishable after retrieval.

## 13. Observability

At minimum, products should be able to measure:

- evidence ingestion failures;
- stale evidence rate for critical data;
- contradiction count;
- readiness `limited` / `blocked` rate;
- AI calls made with incomplete evidence;
- promotion failures;
- decision records missing source references;
- memory records rejected for containing operational facts;
- reprocessing/reconciliation failures.

## 14. Security and tenancy

Every evidence, canonical fact, memory item, and decision must resolve to an authorization boundary when it contains protected data.

RLS/server authorization must follow the canonical ownership path. Do not infer access from UI visibility, editable metadata, names, or emails.

Service-role access remains server-only.

## 15. Adoption strategy

Adopt incrementally. Do not create duplicate sources of truth merely to satisfy this standard.

For each product:

1. Inventory current canonical entities.
2. Map existing evidence, derived data, memory, and audit/event tables.
3. Identify missing timestamp, provenance, verification, and authorization semantics.
4. Add a Data Readiness Gate in observe mode.
5. Measure warnings/blockers.
6. Correct data contracts and provenance gaps.
7. Enforce the gate for consequential agent actions.
8. Add immutable decision records for high-impact workflows.
9. Add reconciliation and drift monitoring.
10. Only then remove legacy duplicate or ambiguous paths.

## 16. Reference implementation

Sur Realista is the first reference implementation because it already separates:

- canonical KMZ state;
- append-only enrichment evidence;
- source fingerprints;
- prospecting decision events;
- governed non-canonical memory.

The reference implementation must preserve those semantics and add the common readiness contract without replacing existing canonical tables.

## 17. Product-level acceptance criteria

A product conforms to v1 when:

- canonical ownership is documented;
- evidence cannot silently overwrite canonical state;
- missingness is explicit for consequential fields;
- event time and ingestion time are distinguishable where needed;
- derived/AI outputs have provenance/version metadata;
- memory is non-canonical and bounded to stable context;
- a readiness gate exists before consequential AI actions;
- important decisions retain evidence/source references;
- authorization is checked server-side;
- retryable ingestion/processing paths are idempotent;
- at least one reconciliation or drift signal exists for critical evidence.

## 18. Versioning

This contract is versioned. Breaking semantic changes require a new major version. Products may adopt newer optional fields without waiting for a major version as long as v1 meanings remain intact.
