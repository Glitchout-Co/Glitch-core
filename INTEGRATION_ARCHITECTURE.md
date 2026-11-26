# Glitch — Integration Architecture

**Version:** 1.0  
**Established:** 26 November 2026  
**Status:** Confirmed foundational functional design; implementation pending  
**Maintainer:** Glitchout-Co

## Purpose and authority

This document records the 15 accepted specifications governing Glitch-Core's reusable integration architecture, distribution, permissions, communication, knowledge, identity, presentation, analytical capabilities, resilience, future AI integration, extensions, resources, developer standards, external services and validation tools.

It complements the [Constitution](CONSTITUTION.md), [Character Codex](CHARACTER_CODEX.md), [Behavioural Engine](BEHAVIOURAL_ENGINE.md), [Response Engine](RESPONSE_ENGINE.md), [Knowledge Architecture](KNOWLEDGE_ARCHITECTURE.md), [User Profiles and Memory](USER_PROFILES_AND_MEMORY.md), [Virtual World Mechanics](VIRTUAL_WORLD_MECHANICS.md) and [Interface and Accessibility](INTERFACE_AND_ACCESSIBILITY.md).

The Constitution remains the highest authority, particularly Laws 10, 11, 19, 27, 28 and 29. No host, adapter, extension, provider, user preference or AI module may override it. Initial assistance is advisory only. Independent technical safeguards, not personality instructions or configuration declarations alone, must enforce privacy, safety and authority.

Rankings preserve the agreed order of emphasis or preference, not an unconditional execution sequence. Mandatory safeguards apply regardless of ranking. Illustrative schemas, packages, interface layouts, scenarios and implementation methods are not final selections unless explicitly established.

Glitch-Core is intended to be a standalone responsive PWA hosted through GitHub Pages indefinitely, as established in Interface and Accessibility. Other applications may integrate compatible releases independently. No backend, external AI provider, live profile synchronisation or actual application connection is authorised or represented as implemented by this document.

## Specification 01 — Reusable integration architecture

Confirmed order: **E, A, D, B, C**.

1. **Constitutional and permission isolation (E):** Preserve protected identity, authority, privacy and application boundaries in every integration.
2. **Reusable core engine (A):** Maintain shared character, behavioural, response and knowledge capabilities rather than independently rebuilding Glitch for every host.
3. **Independent host application functionality (D):** Ensure applications retain their essential functionality without Glitch.
4. **Application integration adapters (B):** Provide standard interfaces translating host-specific capabilities and data into supported Glitch-Core interactions.
5. **Configurable application capabilities (C):** Allow hosts to select relevant optional features without expanding authority or modifying protected identity.

The standalone application is Glitch's full virtual home. An integrated application may include only the companion, assistance and specialist features it supports. The full world, environmental simulation and optional recreational systems are not mandatory dependencies.

| Layer | Responsibility |
| --- | --- |
| Glitch-Core | Shared protected identity, engine logic and fundamental assistance. |
| Host adapter | Application-specific communication, capabilities and translation of approved data. |
| Host application | Authoritative application functionality, data and domain calculations. |
| Optional modules | Approved presentation, specialist knowledge and additional capabilities. |

Applications must be able to start, operate and recover independently of Glitch. Users can minimise, hide, silence or disable her; full disablement stops integration activity. No host connection automatically grants access to personal memory or execution authority. Opening a portal or link to an application does not establish an integration or permission.

The exact package structure, module boundaries, adapter technology and integration interface remain undecided.

## Specification 02 — Engine distribution and version management

Confirmed order: **E, A, C, B, D**.

1. **Release integrity and compatibility validation (E):** Verify approved versions, compatibility and required components before integration.
2. **Central authoritative engine repository (A):** Maintain Glitch-Core as the developer-controlled source of truth.
3. **Versioned approved releases (C):** Distribute tested, documented releases rather than unreviewed development changes.
4. **Independent application installations (B):** Allow applications to retain compatible local copies of the engine and required resources.
5. **Controlled updates and migration (D):** Assess, test and apply compatible upgrades with safe recovery options.

Illustrative release flow:

    Glitch-Core source -> review and validation -> approved versioned release
      -> host compatibility assessment -> independently installed copy
      -> controlled, tested upgrade when appropriate

A host must not rely on Glitch's standalone website being continuously accessible, nor automatically adopt changes to the development branch. Maintain version-compatible documentation and validate engine, adapter, knowledge, resource and extension dependencies before activation. A significant defective release must be eligible for withdrawal; withdrawn unsafe versions must not be used as fallback.

Updates must preserve approved profiles, permissions and saved progress where compatible. Do not restore revoked permissions or deliberately deleted information. Keep existing safe operation or disable affected functionality if migration cannot be validated. No automatic adoption of untested releases is approved.

Package distribution, version conventions, integrity verification, migration tooling and rollback mechanics remain engineering decisions.

## Specification 03 — Application permissions and capabilities

Confirmed order: **E, A, B, D, C**.

1. **Default-deny permission and authority safeguards (E):** Deny capabilities and data access unless explicitly supported and authorised.
2. **Application capability manifest (A):** Declare application identity, integration version and supported features in a standard format.
3. **Granular permission management (B):** Allow relevant permissions to be granted, inspected and revoked individually.
4. **Runtime capability detection (D):** Determine currently available and authorised functions rather than assuming that declared capabilities are usable.
5. **Context-specific read-only data access (C):** Request only relevant structured information needed for supported assistance.

Illustrative manifest (not a final schema or permission grant):

```json
{
  "application_id": "pokedex-lab",
  "application_name": "Pokédex Lab",
  "integration_version": "1.0",
  "capabilities": {
    "core_assistance": true,
    "knowledge": true,
    "team_analysis": true,
    "world_exploration": false,
    "modify_team": false,
    "execute_commands": false
  }
}
```

Capability declaration is not authorisation. Independently enforce permissions at the data and operation boundaries. Permission revocation must stop affected access immediately and invalidate associated context; cached data must not circumvent revocation.

Initial host assistance is advisory only: explanations, recommendations and hypothetical comparisons are permitted within validated read-only boundaries; actual host data modification, unrestricted command execution, unrelated file access, other profiles and automatic personal retention are not authorised. Future execution authority requires separately confirmed AI integration and a secure, validated execution and permission system under Constitution Law 11. AI itself grants no authority.

The manifest schema, permission granularity, isolation and runtime enforcement mechanisms remain undecided.

## Specification 04 — Application communication and event architecture

Confirmed order: **E, A, D, B, C**.

1. **Validated and isolated communication (E):** Verify application identity, message structure, compatibility, authorisation and relevance before accepting communication.
2. **Standardised communication interface (A):** Establish consistent request, response and event structures across supported hosts.
3. **Context lifecycle management (D):** Update, invalidate or discard obsolete, irrelevant or unauthorised information.
4. **Event-driven communication (B):** Allow hosts to notify Glitch of relevant authorised changes.
5. **Request-based information retrieval (C):** Allow specific authorised information to be requested when needed.

| Illustrative event | Intended handling |
| --- | --- |
| Coding error or exercise completed | Offer relevant supported assistance according to user preferences. |
| Team or deck composition changed | Invalidate outdated analysis and obtain new authorised context if required. |
| Relevant preference changed | Apply only compatible and authorised settings. |
| Permission revoked | Stop related access and discard or invalidate affected context. |
| Host closes or integration disabled | Terminate the active integration session and communication. |
| Malformed or incompatible message | Reject it without corrupting unrelated state. |

Glitch receives information through approved interfaces, not through continuous screen capture, general keyboard monitoring, unrestricted file inspection or automatic access to other applications. Context remains temporary unless eligible retention is separately authorised. A relevant event is not permission to perform an action or store personal information.

Local JavaScript events and structured function interfaces are possible implementation approaches, not final selections. Message schemas, protocols, identity validation, event ordering and context expiry remain undecided.

## Specification 05 — Application-specific knowledge integration

Confirmed order: **E, A, B, C, D**.

1. **Knowledge integrity and application isolation (E):** Preserve approval, factual integrity, compatibility and privacy boundaries.
2. **Universal knowledge foundation (A):** Maintain approved fundamental knowledge across supported integrations.
3. **Application-specific knowledge packages (B):** Provide approved specialist information suited to each host.
4. **Contextual knowledge prioritisation (C):** Prioritise information relevant to the application and question.
5. **Cross-application knowledge references (D):** Connect relevant concepts from available approved packages without bypassing access restrictions.

| Information category | Responsibility |
| --- | --- |
| Fundamental knowledge | Glitch-Core. |
| Extended specialist knowledge | Proposed Glitch-Knowledge repository and approved distributable packages. |
| Application rules and terminology | Version-compatible specialist packages. |
| Current application state | Temporary authorised context. |
| Personal preferences and memories | Eligible, consent-controlled profiles. |
| Character history and identity | Character Codex. |

Illustrative domains include Python Pocket Lab programming and troubleshooting knowledge, Pokédex Lab Pokémon mechanics and analytical rules, and CardHub card-game rules. A cross-domain explanation could illustrate a type-effectiveness matrix using a Python dictionary if the necessary approved knowledge is available.

Understanding type effectiveness does not grant access to a user's current team; permission to analyse a team does not grant permission to remember it. Knowledge, temporary context and persistent memory remain distinct. Missing or incompatible packages must be disclosed when relevant; do not invent facts or automatically access another application.

Specialist package contents, retrieval priorities, compatibility schemas and distribution mechanisms remain undecided. The proposed private knowledge-source repository is not an authenticated runtime service; material distributed publicly is public.

## Specification 06 — Cross-application identity and profile portability

Confirmed order: **E, A, B, C, D**.

1. **Explicit information-sharing boundaries (E):** Give users control over what information is transferred, its destination and permitted retention.
2. **Universal companion identity (A):** Preserve Glitch's character, history, communication principles and constitutional safeguards.
3. **Independent local profiles (B):** Maintain distinct profiles without automatic cross-application data access.
4. **Selective profile portability (C):** Support optional manual import and export of compatible, eligible information.
5. **Future authorised synchronisation (D):** Accommodate possible future connected profiles only after separate approval and validated privacy infrastructure.

| Information | Portability |
| --- | --- |
| Character identity | Universal by design; not personal profile data. |
| Communication and accessibility preferences | Selectively transferable. |
| Approved general memories | Selectively transferable following renewed eligibility, consent and compatibility validation. |
| Application-specific memories | Compatibility dependent and explicitly selected. |
| Application permissions | Independently authorised; not transferred as grants. |
| World progression and collectibles | Application-specific by default. |
| Prohibited sensitive personal information | Excluded from retention and transfer. |

Manual transfer is a snapshot, not live synchronisation. Provide category selection, import preview, validation and conflict resolution before applying changes. Respect deletion and retention decisions; external exported copies remain outside automatic local control. A destination must not assume consent or permissions from the source. Guest use and supported core assistance remain available without a profile.

GitHub Pages projects may share the same browser origin despite different repository paths. Separate database names or storage keys provide logical separation, not a strong security boundary. Minimise stored data, enforce appropriate technical isolation and never overstate local security. The mandatory memory and privacy disclosures in User Profiles and Memory remain applicable.

Live cross-application and cross-device synchronisation are deferred. The transfer schema, storage isolation and conflict-resolution interface remain undecided.

## Specification 07 — Host application presentation and character presence

Confirmed order: **E, A, D, C, B**.

1. **Unrestricted host usability (E):** Preserve unobstructed independent functionality and user control over Glitch's presence.
2. **Embedded companion interface (A):** Provide a dedicated area for contextual assistance and character interactions.
3. **Host-adaptive presentation (D):** Inherit compatible host styling without altering Glitch's established character identity.
4. **Dedicated assistance workspace (C):** Support expanded conversation, technical explanations and analysis.
5. **Floating companion interface (B):** Provide an optional movable, collapsible presentation in compatible hosts.

| Mode | Intended presentation |
| --- | --- |
| Embedded | Dedicated companion area. |
| Floating | Optional movable panel that does not obstruct essential controls. |
| Workspace | Expanded assistance and technical interface. |
| Minimised | Compact accessible indicator, with assistance when opened. |
| Hidden | Character not visible; manually accessible assistance. |
| Disabled | Integration activity, contextual monitoring and notifications stopped. |

Hiding, minimising or silencing does not expand permissions. Full disablement must not pressure the user, remove saved preferences automatically or reduce host functionality. Reactivation remains available through settings.

The standalone PWA contains the full virtual environment. Integrated applications may support character expressions and optional recreational interactions but do not require full environmental simulation. Host styling remains subordinate to accessibility, approved character appearance and user settings. Essential controls remain accessible across supported input methods and device sizes.

Exact component layouts, default modes, positioning and styling interfaces remain undecided.

## Specification 08 — Application-specific analytical capabilities

Confirmed order: **E, B, A, C, D**.

1. **Analytical integrity and advisory boundaries (E):** Ensure results are verifiable, limitations are disclosed and recommendations do not automatically alter host data.
2. **Contextual result interpretation (B):** Explain validated results generated by the host's analytical systems.
3. **Modular analytical engines (A):** Accommodate independently developed domain-specific calculations through approved interfaces.
4. **Comparative analysis (C):** Compare authorised configurations and hypothetical alternatives using supported analytical methods.
5. **Contextual recommendations (D):** Suggest improvements in light of verified results and user objectives.

    Authorised application data -> application analytical engine
      -> result validation -> Glitch Response Engine -> user decision

The application calculates; Glitch explains; the user decides. Existing validated application engines remain authoritative rather than introducing competing calculations or ratings in Glitch. Validate applicable rules, completeness and compatibility; explain missing or uncertain data without inventing results.

Examples include code validation and error interpretation in Python Pocket Lab, defensive coverage, movesets and team comparisons in Pokédex Lab, and deck composition or supported rule interactions in CardHub. A hypothetical Pokémon replacement should compare relevant metrics without changing the saved team. Type-only coverage does not establish overall suitability when abilities, items, moves, forms and team roles have not been considered.

If Pokédex Lab produces an overall Bad, Average, Good or Perfect rating, Glitch explains its validated contributing factors rather than inventing a competing rating. Where data is incomplete, disclose that the broader assessment may be inaccurate. Illustrative simulations do not establish a final rating formula or validated implementation.

Analytical interfaces, calculation contracts, comparison mechanisms and individual modules remain undecided.

## Specification 09 — Integration resilience and failure isolation

Confirmed order: **E, B, A, C, D**.

1. **Failure containment and data protection (E):** Prevent failures from unnecessarily affecting unrelated functionality, information or saved progress.
2. **Graceful capability degradation (B):** Continue supported functions when particular resources or capabilities are unavailable.
3. **Independent component recovery (A):** Recover individual components without unnecessary host restarts.
4. **Integration lifecycle management (C):** Control initialisation, operation, suspension, recovery and shutdown.
5. **Compatibility fallback (D):** Use a previously approved, compatible and safe version when appropriate.

| Failed component | Intended fallback |
| --- | --- |
| Animation or environment rendering | Static, text-only or simplified interface. |
| Specialist knowledge | Remaining approved knowledge. |
| Analytical engine | Disclose unavailable analysis; no guessed results. |
| Host communication | Independent general assistance, where available. |
| Profile storage | Temporary guest operation without reliance on failed records. |
| Glitch-Core | Independent host operation. |
| Connectivity | Retained compatible offline resources. |

Validate compatibility and authorised capabilities before initialisation. Isolate or suspend failed components, verify recovery before resuming, and terminate sessions safely. Recovery must never restore revoked permissions, deliberately deleted information or unsafe withdrawn releases. Do not erase user data as an automatic recovery measure or disguise genuine technical errors as fictional anomalies.

Reports and diagnostics remain optional, reviewable, sanitised and consent-controlled under Constitution Law 27; do not expose personal context. Avoid unnecessary restarts. Actual containment requires independently enforced technical isolation and testing, not merely separate software modules.

Recovery procedures, failure classifications, isolation and fallback mechanisms remain undecided.

## Specification 10 — Future AI integration architecture

Confirmed order: **E, A, C, D, B**.

1. **Constitutional safeguards and AI authority restrictions (E):** Independently enforce protected identity, permission and response requirements.
2. **Independent rule-based foundation (A):** Preserve Glitch's fundamental assistance, behaviour, knowledge and recreation without AI dependency.
3. **Knowledge-grounded AI assistance (C):** Allow future enhanced interpretation and composition using approved knowledge and relevant authorised context.
4. **Optional AI activation (D):** Give users control over supported AI functionality, with truthful connectivity, cost and data-processing disclosures.
5. **Modular AI provider interface (B):** Accommodate future compatible external or local AI technologies without rebuilding Glitch-Core.

The rule-based engine remains the initial foundation and fallback. Optional AI can supplement language interpretation, contextual reasoning and response composition. Validate input eligibility, permissions and provider transmission before processing, and validate returned responses independently before presentation. Ground factual claims in appropriate approved information and disclose uncertainty; validation cannot be assumed to guarantee correctness.

AI must not independently rewrite the Constitution or Codex, approve permanent knowledge, retain personal information without consent, grant itself access, execute unauthorised actions or represent invented information as verified. The authority restrictions of Constitution Law 11 remain unchanged.

GitHub Pages is a static public hosting direction. Never embed private API keys in distributed JavaScript or public resources. Browser-based models may have download and device-performance limitations; external APIs may require secure credential handling and separately approved backend infrastructure; local models are optional and not a dependency. No provider, model, subscription, gateway, cost arrangement or additional hosting has been chosen.

Provider interfaces, validation mechanisms and infrastructure remain undecided. No AI functionality is required for initial development.

## Specification 11 — Extensibility and module management

Confirmed order: **E, A, D, C, B**.

1. **Controlled extension approval and isolation (E):** Prevent unauthorised modules from overriding safeguards, accessing restricted data or compromising functionality.
2. **Modular capability extensions (A):** Add approved specialist capabilities without rebuilding the fundamental engine.
3. **Independent extension lifecycle (D):** Enable, disable, update or remove individual extensions without unnecessary effects on other functions.
4. **Dependency management (C):** Identify and validate required engine, knowledge, resource and host interfaces.
5. **Central extension registry (B):** Maintain a structured catalogue of approved extensions, purposes, versions and compatibility requirements.

Potential categories include educational, analytical, recreational, environmental, presentation, communication, intelligence and application integration modules. Examples such as code diagnostics, team analysis or digital chess illustrate possible extensions, not implemented features.

Validate developer approval, engine compatibility, dependencies and permissions before activation. Block incompatible, unreviewed or incomplete extensions. Core assistance must not depend on optional extensions. Removal or deactivation must not automatically destroy unrelated profile information or progress.

Initially develop and approve extensions internally through Glitchout-Co. Unrestricted third-party executable code, automatic permission expansion and constitutional modification through extensions are prohibited. A public extension marketplace is not planned initially. Versioned JavaScript modules and structured data packages are possible approaches, not final selections. Executable modules require appropriate review and technical isolation; a manifest alone does not enforce security.

Extension format, registry schema, dependency resolution, distribution and isolation remain undecided.

## Specification 12 — Shared resources and dependency efficiency

Confirmed order: **E, B, A, C, D**.

1. **Independent resource availability and integrity (E):** Preserve supported functionality when optional resources are missing, damaged or incompatible.
2. **Application-specific resource selection (B):** Include only resources needed for each host's supported capabilities.
3. **Reusable resource packages (A):** Reuse approved artwork, animations, audio, interface components and structured data.
4. **Standardised resource definitions (C):** Provide consistent identifiers, formats and compatibility information.
5. **Resource caching and reuse (D):** Reduce unnecessary downloads and repeated loading where supported.

The authoritative resource library should distribute compatible approved versions. Bundle relevant resources with each application's release so operation does not require a continuously available central resource URL. Balance duplication across repositories against independent operation, offline availability and predictable compatibility.

| Resource | Standalone | Integrated hosts |
| --- | --- | --- |
| Core engine and fundamental knowledge | Required | Required for supported Glitch assistance |
| Character artwork and animations | Intended | Optional |
| Full environment and environmental audio | Intended | Not required |
| Technical workspace | Supported | According to host capability |
| Specialist knowledge | Relevant packages | Relevant packages |

These configurations are illustrative. Resource selection must not remove essential safeguards or accessible core assistance. Validate integrity and compatibility, and use safe fallbacks such as text-only presentation when optional resources fail. Offline operation depends on retained downloaded resources; browser storage limits, eviction and cache behaviour apply. Shared browser caching across applications is not guaranteed.

Example package sizes and reduction percentages were hypothetical, not measured or approved storage allocations. Exact formats, compression, identifiers, caching policies and budgets remain undecided.

## Specification 13 — Integration documentation and developer standards

Confirmed order: **E, A, B, C, D**.

1. **Mandatory integration standards (E):** Establish approval requirements for every official integration.
2. **Standardised integration documentation (A):** Document architecture, supported interfaces, configuration and integration procedures.
3. **Reusable integration templates (B):** Provide starter foundations for compatible applications.
4. **Reference implementations (C):** Maintain validated working examples of supported capabilities and configurations.
5. **Developer troubleshooting resources (D):** Document diagnosis and resolution of integration problems.

Keep documentation alongside engine source and version-compatible with approved releases. Proposed resources include capability manifests, adapter contracts, configuration guides, resource management, basic assistant and embedded companion templates, educational and analytical examples, and troubleshooting for version conflicts, dependency failures, invalid messages and permissions.

Official integration readiness requires evidence of:

- Compatible approved engine release and valid capability manifest.
- Constitutional compliance and independently enforced permissions.
- Independent host operation and no unauthorised profile sharing.
- Accessible interface and validated resource dependencies.
- Failure and recovery testing and recorded developer approval.

Checklist completion is not proof of technical validation. Unreviewed third-party integrations are not officially supported. A public SDK is only a potential future consideration.

Illustrative future repository directories include docs/, integration/, templates/, examples/, schemas/ and tests/. Existing foundational documents remain preserved. Directory layout, documentation format, reference implementations, templates and approval procedure remain undecided.

## Specification 14 — External services and data providers

Confirmed order: **E, C, A, D, B**.

1. **External service security and privacy (E):** Prevent unauthorised transmission, credential exposure, excessive requests and uncontrolled external access.
2. **Data validation and provenance (C):** Validate responses and identify their source, compatibility, freshness and availability.
3. **Standardised external service adapters (A):** Provide reusable interfaces to developer-approved APIs and data providers.
4. **Offline and service-unavailable alternatives (D):** Use eligible validated cache data or reduced functionality when live services fail.
5. **Independent service configurations (B):** Preserve host-specific service configuration without changing the fundamental engine.

Illustrative flow: approved external provider -> controlled service adapter -> validation -> host application -> authorised Glitch interpretation. Validate source, structure, relevant fields and applicability; approval of a provider does not establish that every response is accurate.

PokéAPI is the planned example provider for Pokédex Lab. Pokémon statistics retrieved from a provider are external application data, not personal memory or automatically approved permanent knowledge. The user's selected Pokémon is temporary application context. Glitch may interpret validated information without independently adding it to her archive.

Respect provider usage policies, request limits, browser access restrictions and licensing. Use controlled, rate-aware requests and minimise information sent. If offline, rate limited, given an invalid response or otherwise unable to access the provider, use only compatible previously validated cached data when permitted and disclose relevant age or uncertainty. If unavailable, communicate that honestly. Permission revocation cannot be bypassed through cache use.

Compatible public APIs may be accessible directly from GitHub Pages when browser access is allowed. Confidential credentials and private backend processing require separately approved infrastructure. Unrestricted internet access and automatic permanent learning are not supported initially. No private API keys in public JavaScript.

The adapter interfaces, provider catalogue, cache durations, request limits and validation schemas remain undecided.

## Specification 15 — Integration development and validation tools

Confirmed order: **E, C, B, A, D**.

1. **Integration approval and integrity validation (E):** Require evidence of constitutional, functional, privacy, accessibility and independence compliance before publication.
2. **Permission and communication testing (C):** Test unauthorised requests, revocation, invalid messages and restricted information access.
3. **Simulated host environments (B):** Test integrations using synthetic application conditions without modifying actual production applications.
4. **Application integration workshop (A):** Support development and configuration of adapters, manifests, communication interfaces and supported features.
5. **Dependency and compatibility auditing (D):** Evaluate engine versions, resources, knowledge packages and extension compatibility.

### Integration Architecture Laboratory

The seventh confirmed development laboratory provides the following proposed tool areas:

| Tool area | Responsibility |
| --- | --- |
| Integration Workshop | Configure adapters, capability manifests and communication interfaces. |
| Host Environment Simulator | Synthetic hosts, events, analytical fixtures and host failure scenarios. |
| Permission Auditor | Unauthorised access, revocation, malformed messages and profile isolation. |
| Compatibility Auditor | Engine, package, resource and extension compatibility. |
| Integration Approval Centre | Review actual test evidence and document developer approval. |

Prioritise synthetic host conditions before modifying production applications. Validate constitutional safeguards, permissions, communication, dependencies, independent host operation, failure recovery and accessibility. Successful installation and manually assigned simulated passes do not constitute actual approval. Known constitutional violations must be corrected before release.

The laboratory complements the Behaviour Laboratory, Response Laboratory, Knowledge Management Laboratory, Profile and Memory Laboratory, Virtual World Laboratory, and Interface and Accessibility Laboratory. They may become interconnected modules within a proposed Glitch Developer Toolkit rather than separate applications; that implementation decision is not final.

Use synthetic or explicitly authorised minimal test fixtures, not real private profiles. Developer approval tools require genuine access controls; a hidden or labelled developer interface on a public website is not privileged security. Respect existing diagnostic privacy and consent rules. Testing must establish evidence rather than promise absolute security.

The testing framework, laboratory implementation, approval records and technical isolation remain undecided. Stage 10 — Testing and Validation will establish the wider foundational validation design.

## Implementation boundaries and next stage

All 15 integration specifications are confirmed. Their rankings establish design emphasis and must be interpreted alongside mandatory constitutional safeguards.

- Initial integrations remain advisory, rule-based, permission-limited and independently optional.
- GitHub Pages remains the long-term standalone hosting direction; secure backend services, AI and live synchronisation require separate approval.
- Glitch-Core releases, resources and specialist knowledge must be validated and compatible; host applications must retain independent functionality.
- Specific engineering choices, supported platforms, module formats, data contracts, isolation, dependency management, storage and testing tooling remain to be designed and validated.
- Python Pocket Lab, Pokédex Lab and CardHub are illustrative integration targets; no actual integration, external service connection or software test is established by these specifications.

Stage 9 completes the Integration Architecture foundational design. The next stage is Testing and Validation. This document records accepted requirements, not implementation or release approval.
