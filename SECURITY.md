# Security Policy

## Scope

This document describes the security posture and vulnerability-reporting process for the public N3uralia web repository. Project-specific systems can have additional controls depending on their data, architecture, providers, users, contractual requirements, and operational risk.

N3uralia does not treat a cloud provider's certification or a framework-compatible architecture as a certification held by N3uralia.

## Controls visible in this repository

The application includes controls such as:

- protected API routes that require Bearer-token authentication;
- token validation against the configured authentication provider;
- role and permission patterns where implemented by the relevant product flow;
- environment-variable based secret configuration rather than hard-coded production secrets;
- Content Security Policy and security-related HTTP headers;
- locale and route validation;
- TypeScript and lint/build checks in the delivery workflow;
- version-controlled changes and deployable rollback through the hosting/repository workflow;
- production observability through the deployment platform where configured.

These controls reduce risk but do not by themselves establish compliance with a regulatory framework or certification standard.

## Compliance and certifications

Requirements such as SOC 2, ISO 27001, GDPR, HIPAA, Chilean privacy requirements, contractual security clauses, data residency, retention, encryption, auditability, and availability targets must be evaluated for the specific project.

Do not interpret this repository as claiming that N3uralia currently holds SOC 2, ISO 27001, HIPAA, or another certification unless that certification is separately published with verifiable evidence.

## Dependency and vulnerability management

Dependencies are reviewed through the repository and build workflow. Findings are prioritized according to exploitability, exposure, affected surface, available remediation, and regression risk. We do not apply forced dependency upgrades to production solely to make an audit counter reach zero; security fixes must also preserve system correctness.

Known dependency findings should be treated as technical debt until they are reviewed and remediated or otherwise mitigated. A successful build is not evidence that all dependency vulnerabilities have been eliminated.

## Reporting a vulnerability

If you believe you found a vulnerability in a N3uralia-controlled system, send a concise report to `security@n3uralia.com` including:

- affected URL, repository, or product;
- description of the issue;
- steps to reproduce;
- expected and observed behavior;
- potential impact;
- relevant screenshots, logs, or proof-of-concept details that do not expose unrelated user data.

Please avoid destructive testing, denial-of-service activity, privacy violations, social engineering, or accessing data that is not yours.

## Response

Reports are triaged according to severity, reproducibility, exposure, and operational impact. Remediation timing depends on the affected system and the risk of the change. We do not publish universal response or remediation SLAs unless they are part of a specific contractual commitment.

## Security claims

Public security, uptime, accuracy, ROI, and compliance claims should be supported by verifiable evidence or explicitly scoped to the project where they were measured. See the public Trust & Security page at:

- https://www.n3uralia.com/en/trust
- https://www.n3uralia.com/es/trust

## Last updated

September 8, 2026
